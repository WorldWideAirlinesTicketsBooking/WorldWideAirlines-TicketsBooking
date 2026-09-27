const AIRLABS_BASE = "https://airlabs.co/api/v9";

function json(res, status, body) {
    res.status(status)
        .setHeader("Content-Type", "application/json")
        .send(JSON.stringify(body));
}

async function airlabs(path, params = {}) {
    const key = process.env.AIRLABS_API_KEY;

    if (!key) {
        throw new Error("AIRLABS_API_KEY is not configured on Vercel.");
    }

    const url = new URL(`${AIRLABS_BASE}/${path}`);

    Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== "") {
            url.searchParams.set(k, v);
        }
    });

    url.searchParams.set("api_key", key);

    const r = await fetch(url);

    const data = await r.json().catch(() => ({}));

    if (!r.ok || data.error) {
        throw new Error(
            data.message ||
            data.error ||
            `AirLabs HTTP ${r.status}`
        );
    }

    return data;
}

async function resolveAirport(value) {
    const raw = String(value || "").trim();

    const direct = raw.match(/\b([A-Za-z]{3})\b(?:\s*\)|$)/);

    if (direct) {
        return direct[1].toUpperCase();
    }

    const data = await airlabs("suggest", {
        q: raw
    });

    const list = Array.isArray(data.response?.airports)
        ? data.response.airports
        : Array.isArray(data.airports)
            ? data.airports
            : [];

    const a = list[0] || {};

    return String(
        a.iata_code ||
        a.iata ||
        a.code ||
        ""
    ).toUpperCase();
}

export default async function handler(req, res) {

    try {

        // ============================================
        // GET REQUESTS
        // ============================================

        if (req.method === "GET") {

            const type = String(req.query?.type || "");

            // Airport autocomplete / suggestions
            if (type === "suggest") {

                const d = await airlabs("suggest", {
                    q: req.query?.q || ""
                });

                return json(res, 200, {
                    airports:
                        d.response?.airports ||
                        d.airports ||
                        []
                });
            }

            // Airlines list
            if (type === "airlines") {

                const d = await airlabs("airlines");

                return json(res, 200, {
                    airlines:
                        d.response?.airlines ||
                        d.airlines ||
                        []
                });
            }

            return json(res, 400, {
                error: "Use type=suggest or type=airlines."
            });
        }

        // ============================================
        // ONLY POST BELOW THIS POINT
        // ============================================

        if (req.method !== "POST") {

            return json(res, 405, {
                error: "Method not allowed"
            });
        }

        const body = req.body || {};

        // Resolve origin and destination
        const dep = await resolveAirport(body.origin);
        const arr = await resolveAirport(body.destination);

        if (!dep || !arr) {

            return json(res, 400, {
                error:
                    "Could not resolve the origin or destination airport."
            });
        }

        // ============================================
        // AIRLABS SCHEDULE REQUEST
        // ============================================

        const params = {

            dep_iata: dep,

            arr_iata: arr,

            _fields:
                "flight_iata,flight_number,airline_iata,dep_iata,arr_iata,dep_time,arr_time,dep_actual,arr_actual,status,delayed,dep_gate,arr_gate,dep_terminal,arr_terminal"
        };

        const d = await airlabs(
            "schedules",
            params
        );

        const schedules =
            Array.isArray(d.response?.flights)
                ? d.response.flights
                : Array.isArray(d.flights)
                    ? d.flights
                    : [];

        // ============================================
        // CONVERT AIRLABS DATA FOR WEBSITE
        // ============================================

        const flights = schedules.map((f, i) => ({

            id:
                f.flight_iata ||
                `${f.flight_number || "flight"}-${i}`,

            airline:
                f.airline_iata ||
                "Airline",

            flightNumber:
                f.flight_iata ||
                f.flight_number ||
                "Flight",

            origin:
                f.dep_iata ||
                dep,

            destination:
                f.arr_iata ||
                arr,

            departureTime:
                f.dep_time ||
                f.dep_actual ||
                "--:--",

            arrivalTime:
                f.arr_time ||
                f.arr_actual ||
                "--:--",

            duration:
                "Schedule data",

            stops:
                0,

            price:
                "N/A",

            currency:
                "",

            baggage:
                "Check airline fare rules",

            status:
                f.status ||
                "scheduled",

            delay:
                f.delayed ||
                0,

            departureGate:
                f.dep_gate ||
                "",

            arrivalGate:
                f.arr_gate ||
                "",

            departureTerminal:
                f.dep_terminal ||
                "",

            arrivalTerminal:
                f.arr_terminal ||
                "",

            raw:
                f
        }));

        // ============================================
        // SEND RESULTS BACK TO WEBSITE
        // ============================================

        return json(res, 200, {

            flights,

            notice:
                "AirLabs schedules provide current/upcoming flight schedule and status data. They do not provide bookable fares or ticket issuance."
        });

    } catch (e) {

        return json(res, 500, {

            error:
                e.message ||
                "AirLabs request failed."
        });
    }
}
