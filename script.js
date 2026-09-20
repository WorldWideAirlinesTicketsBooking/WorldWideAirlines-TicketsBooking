 <script>

        /* =========================================================
           HELPERS
        ========================================================= */

        function escapeHtml(value) {

            return String(value ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        }


        function showToast(message) {

            const toast =
                document.getElementById("toast");

            if (!toast) return;

            toast.textContent = message;

            toast.classList.add("show");

            clearTimeout(window.toastTimer);

            window.toastTimer =
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 3200);

        }


        /* =========================================================
           AIRLINES
        ========================================================= */

        const airlines = [

            "Aegean Airlines",
            "Aer Lingus",
            "Aeroflot",
            "Air Algérie",
            "Air Arabia",
            "Air Astana",
            "Air Canada",
            "Air China",
            "Air France",
            "Air India",
            "Air Mauritius",
            "Air New Zealand",
            "Air Peace",
            "Air Serbia",
            "Air Seychelles",
            "Air Tanzania",
            "AirAsia",
            "Alaska Airlines",
            "Alitalia",
            "American Airlines",
            "ANA",
            "Asiana Airlines",
            "Austrian Airlines",
            "Avianca",
            "Azul Brazilian Airlines",
            "Batik Air",
            "British Airways",
            "Brussels Airlines",
            "Cathay Pacific",
            "China Airlines",
            "China Eastern Airlines",
            "China Southern Airlines",
            "Condor",
            "Copa Airlines",
            "Croatia Airlines",
            "Delta Air Lines",
            "EgyptAir",
            "EL AL",
            "Emirates",
            "Ethiopian Airlines",
            "Etihad Airways",
            "Eurowings",
            "EVA Air",
            "Finnair",
            "Flydubai",
            "Frontier Airlines",
            "Garuda Indonesia",
            "Gulf Air",
            "Hainan Airlines",
            "Hawaiian Airlines",
            "Iberia",
            "Icelandair",
            "IndiGo",
            "ITA Airways",
            "Japan Airlines",
            "Jeju Air",
            "JetBlue",
            "Kenya Airways",
            "KLM Royal Dutch Airlines",
            "Korean Air",
            "Kuwait Airways",
            "LATAM Airlines",
            "LOT Polish Airlines",
            "Lufthansa",
            "Malaysia Airlines",
            "Middle East Airlines",
            "Nile Air",
            "Oman Air",
            "Pakistan International Airlines",
            "Pegasus Airlines",
            "Philippine Airlines",
            "Qantas",
            "Qatar Airways",
            "Royal Air Maroc",
            "Royal Brunei Airlines",
            "Royal Jordanian",
            "RwandAir",
            "Saudia",
            "Scandinavian Airlines",
            "Scoot",
            "Singapore Airlines",
            "South African Airways",
            "Southwest Airlines",
            "SriLankan Airlines",
            "SWISS",
            "TAP Air Portugal",
            "Thai Airways",
            "Turkish Airlines",
            "United Airlines",
            "Uzbekistan Airways",
            "Vietnam Airlines",
            "Virgin Atlantic",
            "Vistara",
            "WestJet",
            "Wizz Air",
            "XiamenAir"
        ];

        airlines.sort((a, b) =>
            a.localeCompare(b)
        );


        function loadAirlines() {

            const select =
                document.getElementById("airline");

            if (!select) return;

            select.innerHTML =
                '<option value="">Any Airline</option>';

            airlines.forEach(airline => {

                const option =
                    document.createElement("option");

                option.value = airline;
                option.textContent = airline;

                select.appendChild(option);

            });

        }


        function renderAirlineDirectory() {

            const container =
                document.getElementById("airlineDirectory");

            const search =
                document.getElementById("airlineSearch");

            if (!container) return;

            const query =
                (search?.value || "")
                    .trim()
                    .toLowerCase();

            const filtered =
                airlines.filter(airline =>
                    airline.toLowerCase().includes(query)
                );

            container.innerHTML =
                filtered.map(airline => `
                    <div class="airline-item">
                        ${escapeHtml(airline)}
                    </div>
                `).join("");

        }


        /* =========================================================
           DESTINATIONS
        ========================================================= */

        const destinations = [

            {
                key: "abu-dhabi",
                city: "Abu Dhabi",
                country: "United Arab Emirates",
                flag: "🇦🇪",
                icon: "🏙️",
                description: "A modern Gulf capital known for architecture, culture and beaches."
            },

            {
                key: "accra",
                city: "Accra",
                country: "Ghana",
                flag: "🇬🇭",
                icon: "🌴",
                description: "A lively coastal capital with markets, beaches and cultural attractions."
            },

            {
                key: "addis-ababa",
                city: "Addis Ababa",
                country: "Ethiopia",
                flag: "🇪🇹",
                icon: "🏔️",
                description: "A highland capital and an important gateway to East Africa."
            },

            {
                key: "amsterdam",
                city: "Amsterdam",
                country: "Netherlands",
                flag: "🇳🇱",
                icon: "🚲",
                description: "Famous for canals, museums, historic streets and cycling culture."
            },

            {
                key: "athens",
                city: "Athens",
                country: "Greece",
                flag: "🇬🇷",
                icon: "🏛️",
                description: "A historic Mediterranean city centered around ancient landmarks."
            },

            {
                key: "auckland",
                city: "Auckland",
                country: "New Zealand",
                flag: "🇳🇿",
                icon: "🌊",
                description: "A beautiful harbor city surrounded by beaches and natural landscapes."
            },

            {
                key: "bangkok",
                city: "Bangkok",
                country: "Thailand",
                flag: "🇹🇭",
                icon: "🏯",
                description: "A vibrant destination known for temples, food, shopping and nightlife."
            },

            {
                key: "barcelona",
                city: "Barcelona",
                country: "Spain",
                flag: "🇪🇸",
                icon: "🏖️",
                description: "A Mediterranean city famous for architecture, beaches and cuisine."
            },

            {
                key: "beijing",
                city: "Beijing",
                country: "China",
                flag: "🇨🇳",
                icon: "🏯",
                description: "A historic capital featuring major cultural and imperial landmarks."
            },

            {
                key: "cairo",
                city: "Cairo",
                country: "Egypt",
                flag: "🇪🇬",
                icon: "🏺",
                description: "A gateway to ancient Egyptian history, museums and the Giza pyramids."
            },

            {
                key: "cape-town",
                city: "Cape Town",
                country: "South Africa",
                flag: "🇿🇦",
                icon: "⛰️",
                description: "A scenic city combining mountains, coastline, food and culture."
            },

            {
                key: "chicago",
                city: "Chicago",
                country: "United States",
                flag: "🇺🇸",
                icon: "🏙️",
                description: "A major American city known for architecture, museums and lakefront views."
            },

            {
                key: "colombo",
                city: "Colombo",
                country: "Sri Lanka",
                flag: "🇱🇰",
                icon: "🌴",
                description: "A coastal city offering beaches, culture, food and access to Sri Lanka."
            },

            {
                key: "doha",
                city: "Doha",
                country: "Qatar",
                flag: "🇶🇦",
                icon: "🏙️",
                description: "A modern Gulf destination with museums, waterfronts and contemporary architecture."
            },

            {
                key: "dubai",
                city: "Dubai",
                country: "United Arab Emirates",
                flag: "🇦🇪",
                icon: "🌆",
                description: "A global destination famous for skyscrapers, shopping, beaches and desert experiences."
            },

            {
                key: "dublin",
                city: "Dublin",
                country: "Ireland",
                flag: "🇮🇪",
                icon: "🍀",
                description: "A friendly European capital with historic neighborhoods and cultural attractions."
            },

            {
                key: "frankfurt",
                city: "Frankfurt",
                country: "Germany",
                flag: "🇩🇪",
                icon: "🏢",
                description: "A major European financial and aviation hub."
            },

            {
                key: "freetown",
                city: "Freetown",
                country: "Sierra Leone",
                flag: "🇸🇱",
                icon: "🌊",
                description: "A coastal West African capital known for beaches and surrounding hills."
            },

            {
                key: "hong-kong",
                city: "Hong Kong",
                country: "Hong Kong",
                flag: "🇭🇰",
                icon: "🌃",
                description: "A major international city known for its skyline, harbor and food culture."
            },

            {
                key: "islamabad",
                city: "Islamabad",
                country: "Pakistan",
                flag: "🇵🇰",
                icon: "🌿",
                description: "Pakistan's capital, known for greenery, modern planning and scenic hills."
            },

            {
                key: "istanbul",
                city: "Istanbul",
                country: "Türkiye",
                flag: "🇹🇷",
                icon: "🕌",
                description: "A historic city connecting Europe and Asia with rich architecture and culture."
            },

            {
                key: "jakarta",
                city: "Jakarta",
                country: "Indonesia",
                flag: "🇮🇩",
                icon: "🌇",
                description: "A large Southeast Asian capital with diverse culture and cuisine."
            },

            {
                key: "jeddah",
                city: "Jeddah",
                country: "Saudi Arabia",
                flag: "🇸🇦",
                icon: "🌊",
                description: "A Red Sea gateway with historic areas, waterfront attractions and modern districts."
            },

            {
                key: "johannesburg",
                city: "Johannesburg",
                country: "South Africa",
                flag: "🇿🇦",
                icon: "🏙️",
                description: "A major South African city and an important regional business hub."
            },

            {
                key: "karachi",
                city: "Karachi",
                country: "Pakistan",
                flag: "🇵🇰",
                icon: "🌊",
                description: "Pakistan's major coastal metropolis and commercial center."
            },

            {
                key: "kuala-lumpur",
                city: "Kuala Lumpur",
                country: "Malaysia",
                flag: "🇲🇾",
                icon: "🏙️",
                description: "A modern Asian capital famous for its skyline, food and shopping."
            },

            {
                key: "kuwait-city",
                city: "Kuwait City",
                country: "Kuwait",
                flag: "🇰🇼",
                icon: "🏙️",
                description: "A Gulf capital featuring modern architecture and waterfront attractions."
            },

            {
                key: "lagos",
                city: "Lagos",
                country: "Nigeria",
                flag: "🇳🇬",
                icon: "🌆",
                description: "A major West African city known for business, culture, beaches and entertainment."
            },

            {
                key: "lahore",
                city: "Lahore",
                country: "Pakistan",
                flag: "🇵🇰",
                icon: "🏰",
                description: "A cultural Pakistani city known for historic architecture and cuisine."
            },

            {
                key: "lisbon",
                city: "Lisbon",
                country: "Portugal",
                flag: "🇵🇹",
                icon: "🚋",
                description: "A scenic European capital known for hills, historic neighborhoods and coastal views."
            },

            {
                key: "london",
                city: "London",
                country: "United Kingdom",
                flag: "🇬🇧",
                icon: "🎡",
                description: "A global city famous for history, museums, shopping and iconic landmarks."
            },

            {
                key: "los-angeles",
                city: "Los Angeles",
                country: "United States",
                flag: "🇺🇸",
                icon: "🌴",
                description: "A major American destination known for entertainment, beaches and diverse neighborhoods."
            },

            {
                key: "madrid",
                city: "Madrid",
                country: "Spain",
                flag: "🇪🇸",
                icon: "🏙️",
                description: "Spain's capital with museums, historic plazas, parks and food."
            },

            {
                key: "male",
                city: "Malé",
                country: "Maldives",
                flag: "🇲🇻",
                icon: "🏝️",
                description: "A gateway to the Maldives' famous islands, beaches and tropical resorts."
            },

            {
                key: "manila",
                city: "Manila",
                country: "Philippines",
                flag: "🇵🇭",
                icon: "🌴",
                description: "A lively Southeast Asian capital with historic and coastal attractions."
            },

            {
                key: "melbourne",
                city: "Melbourne",
                country: "Australia",
                flag: "🇦🇺",
                icon: "☕",
                description: "An Australian city celebrated for culture, cafés, sports and arts."
            },

            {
                key: "mexico-city",
                city: "Mexico City",
                country: "Mexico",
                flag: "🇲🇽",
                icon: "🌆",
                description: "A huge cultural capital with museums, historic sites and excellent food."
            },

            {
                key: "miami",
                city: "Miami",
                country: "United States",
                flag: "🇺🇸",
                icon: "🌴",
                description: "A popular destination known for beaches, art, nightlife and warm weather."
            },

            {
                key: "montreal",
                city: "Montreal",
                country: "Canada",
                flag: "🇨🇦",
                icon: "🏙️",
                description: "A bilingual Canadian city known for food, festivals and historic districts."
            },

            {
                key: "mumbai",
                city: "Mumbai",
                country: "India",
                flag: "🇮🇳",
                icon: "🌆",
                description: "India's major financial and entertainment center on the Arabian Sea."
            },

            {
                key: "muscat",
                city: "Muscat",
                country: "Oman",
                flag: "🇴🇲",
                icon: "🏔️",
                description: "An Omani coastal city known for mountains, forts and Arabian culture."
            },

            {
                key: "nairobi",
                city: "Nairobi",
                country: "Kenya",
                flag: "🇰🇪",
                icon: "🦁",
                description: "A major East African hub and gateway to wildlife and nature experiences."
            },

            {
                key: "new-delhi",
                city: "New Delhi",
                country: "India",
                flag: "🇮🇳",
                icon: "🏛️",
                description: "India's capital with historic monuments, markets and cultural attractions."
            },

            {
                key: "new-york",
                city: "New York",
                country: "United States",
                flag: "🇺🇸",
                icon: "🗽",
                description: "A global city known for Times Square, Central Park, museums and diverse culture."
            },

            {
                key: "paris",
                city: "Paris",
                country: "France",
                flag: "🇫🇷",
                icon: "🗼",
                description: "A world-famous destination for art, fashion, architecture and cuisine."
            },

            {
                key: "perth",
                city: "Perth",
                country: "Australia",
                flag: "🇦🇺",
                icon: "🌊",
                description: "A sunny Australian city with beaches, parks and a relaxed lifestyle."
            },

            {
                key: "phuket",
                city: "Phuket",
                country: "Thailand",
                flag: "🇹🇭",
                icon: "🏝️",
                description: "A tropical destination known for beaches, islands and resort experiences."
            },

            {
                key: "riyadh",
                city: "Riyadh",
                country: "Saudi Arabia",
                flag: "🇸🇦",
                icon: "🏙️",
                description: "Saudi Arabia's capital and a major regional business destination."
            },

            {
                key: "rio",
                city: "Rio de Janeiro",
                country: "Brazil",
                flag: "🇧🇷",
                icon: "🏖️",
                description: "A spectacular Brazilian city famous for beaches, mountains and vibrant culture."
            },

            {
                key: "rome",
                city: "Rome",
                country: "Italy",
                flag: "🇮🇹",
                icon: "🏛️",
                description: "An ancient European capital filled with history, architecture and Italian cuisine."
            },

            {
                key: "san-francisco",
                city: "San Francisco",
                country: "United States",
                flag: "🇺🇸",
                icon: "🌉",
                description: "A famous California city known for its bay, bridges and neighborhoods."
            },

            {
                key: "seoul",
                city: "Seoul",
                country: "South Korea",
                flag: "🇰🇷",
                icon: "🌃",
                description: "A dynamic Asian capital combining technology, history, shopping and food."
            },

            {
                key: "singapore",
                city: "Singapore",
                country: "Singapore",
                flag: "🇸🇬",
                icon: "🌇",
                description: "A modern city-state known for cleanliness, food, shopping and architecture."
            },

            {
                key: "sydney",
                city: "Sydney",
                country: "Australia",
                flag: "🇦🇺",
                icon: "🌉",
                description: "An iconic Australian city famous for its harbor, beaches and Opera House."
            },

            {
                key: "tokyo",
                city: "Tokyo",
                country: "Japan",
                flag: "🇯🇵",
                icon: "🌃",
                description: "A huge Japanese metropolis combining modern technology and traditional culture."
            },

            {
                key: "toronto",
                city: "Toronto",
                country: "Canada",
                flag: "🇨🇦",
                icon: "🏙️",
                description: "Canada's largest city with diverse neighborhoods, culture and waterfront attractions."
            },

            {
                key: "vancouver",
                city: "Vancouver",
                country: "Canada",
                flag: "🇨🇦",
                icon: "🏔️",
                description: "A scenic Canadian city surrounded by mountains, ocean and parks."
            },

            {
                key: "vienna",
                city: "Vienna",
                country: "Austria",
                flag: "🇦🇹",
                icon: "🎻",
                description: "A European capital famous for classical music, palaces and cafés."
            },

            {
                key: "washington",
                city: "Washington, D.C.",
                country: "United States",
                flag: "🇺🇸",
                icon: "🏛️",
                description: "The United States capital with major monuments, museums and cultural sites."
            },

            {
                key: "zurich",
                city: "Zurich",
                country: "Switzerland",
                flag: "🇨🇭",
                icon: "🏔️",
                description: "A Swiss city known for its lake, old town, business district and nearby Alps."
            }

        ];


        destinations.sort((a, b) =>
            a.city.localeCompare(b.city)
        );


        function renderDestinations() {

            const grid =
                document.getElementById("destinationGrid");

            const search =
                document.getElementById("destinationSearch");

            if (!grid) return;

            const query =
                (search?.value || "")
                    .trim()
                    .toLowerCase();

            const filtered =
                destinations.filter(item => {

                    const searchable =
                        `${item.city} ${item.country} ${item.description}`
                            .toLowerCase();

                    return searchable.includes(query);

                });

            grid.innerHTML =
                filtered.map(item => `

                    <article class="destination-card">

                        <div class="destination-image">
                            ${escapeHtml(item.flag)}
                            ${escapeHtml(item.icon)}
                        </div>

                        <div class="destination-content">

                            <h3>
                                ${escapeHtml(item.city)}
                            </h3>

                            <p>
                                ${escapeHtml(item.country)}
                            </p>

                            <p>
                                ${escapeHtml(item.description)}
                            </p>

                            <div class="destination-price">
                                Worldwide Travel
                            </div>

                            <button
                                type="button"
                                class="details-btn"
                                onclick="showDestination('${escapeHtml(item.key)}')"
                            >
                                View Details
                            </button>

                        </div>

                    </article>

                `).join("");


            if (!filtered.length) {

                grid.innerHTML = `
                    <div class="empty-results">
                        No destination found for
                        <strong>${escapeHtml(query)}</strong>.
                    </div>
                `;

            }

        }


        function showAllDestinations() {

            const search =
                document.getElementById("destinationSearch");

            if (search) {
                search.value = "";
            }

            renderDestinations();

            document
                .getElementById("destinations")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        }


        function showDestination(key) {

            const destination =
                destinations.find(item =>
                    item.key === key
                );

            if (!destination) return;

            const modal =
                document.getElementById("destinationModal");

            const content =
                document.getElementById("destinationText");

            content.innerHTML = `

                <h2>
                    ${escapeHtml(destination.flag)}
                    ${escapeHtml(destination.city)}
                </h2>

                <p>
                    <strong>Country:</strong>
                    ${escapeHtml(destination.country)}
                </p>

                <h3>About ${escapeHtml(destination.city)}</h3>

                <p>
                    ${escapeHtml(destination.description)}
                </p>

                <h3>Travel Planning</h3>

                <p>
                    Use the flight search engine above to enter
                    your departure city, travel dates, passengers,
                    cabin class and preferred airline.
                </p>

                <h3>Popular Travel Interests</h3>

                <p>
                    Explore local attractions, food, culture,
                    shopping, landmarks and nearby experiences.
                </p>

            `;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        }


        function closeDestination() {

            const modal =
                document.getElementById("destinationModal");

            modal?.classList.remove("active");

            document.body.style.overflow = "";

        }


        function closeDestinationOnBackdrop(event) {

            if (
                event.target.id === "destinationModal"
            ) {
                closeDestination();
            }

        }


        /* =========================================================
           AIRPORTS
        ========================================================= */

        const airports = [

            {
                code: "ISB",
                city: "Islamabad",
                country: "Pakistan",
                name: "Islamabad International Airport"
            },

            {
                code: "KHI",
                city: "Karachi",
                country: "Pakistan",
                name: "Jinnah International Airport"
            },

            {
                code: "LHE",
                city: "Lahore",
                country: "Pakistan",
                name: "Allama Iqbal International Airport"
            },

            {
                code: "PEW",
                city: "Peshawar",
                country: "Pakistan",
                name: "Bacha Khan International Airport"
            },

            {
                code: "MUX",
                city: "Multan",
                country: "Pakistan",
                name: "Multan International Airport"
            },

            {
                code: "SKT",
                city: "Sialkot",
                country: "Pakistan",
                name: "Sialkot International Airport"
            },

            {
                code: "UET",
                city: "Quetta",
                country: "Pakistan",
                name: "Quetta International Airport"
            },

            {
                code: "DXB",
                city: "Dubai",
                country: "United Arab Emirates",
                name: "Dubai International Airport"
            },

            {
                code: "AUH",
                city: "Abu Dhabi",
                country: "United Arab Emirates",
                name: "Zayed International Airport"
            },

            {
                code: "SHJ",
                city: "Sharjah",
                country: "United Arab Emirates",
                name: "Sharjah International Airport"
            },

            {
                code: "DOH",
                city: "Doha",
                country: "Qatar",
                name: "Hamad International Airport"
            },

            {
                code: "JED",
                city: "Jeddah",
                country: "Saudi Arabia",
                name: "King Abdulaziz International Airport"
            },

            {
                code: "RUH",
                city: "Riyadh",
                country: "Saudi Arabia",
                name: "King Khalid International Airport"
            },

            {
                code: "MED",
                city: "Medina",
                country: "Saudi Arabia",
                name: "Prince Mohammad bin Abdulaziz International Airport"
            },

            {
                code: "LHR",
                city: "London",
                country: "United Kingdom",
                name: "Heathrow Airport"
            },

            {
                code: "LGW",
                city: "London",
                country: "United Kingdom",
                name: "Gatwick Airport"
            },

            {
                code: "STN",
                city: "London",
                country: "United Kingdom",
                name: "Stansted Airport"
            },

            {
                code: "MAN",
                city: "Manchester",
                country: "United Kingdom",
                name: "Manchester Airport"
            },

            {
                code: "BHX",
                city: "Birmingham",
                country: "United Kingdom",
                name: "Birmingham Airport"
            },

            {
                code: "GLA",
                city: "Glasgow",
                country: "United Kingdom",
                name: "Glasgow Airport"
            },

            {
                code: "CDG",
                city: "Paris",
                country: "France",
                name: "Charles de Gaulle Airport"
            },

            {
                code: "FRA",
                city: "Frankfurt",
                country: "Germany",
                name: "Frankfurt Airport"
            },

            {
                code: "IST",
                city: "Istanbul",
                country: "Türkiye",
                name: "Istanbul Airport"
            },

            {
                code: "JFK",
                city: "New York",
                country: "United States",
                name: "John F. Kennedy International Airport"
            },

            {
                code: "EWR",
                city: "Newark",
                country: "United States",
                name: "Newark Liberty International Airport"
            },

            {
                code: "LAX",
                city: "Los Angeles",
                country: "United States",
                name: "Los Angeles International Airport"
            },

            {
                code: "YYZ",
                city: "Toronto",
                country: "Canada",
                name: "Toronto Pearson International Airport"
            },

            {
                code: "YVR",
                city: "Vancouver",
                country: "Canada",
                name: "Vancouver International Airport"
            },

            {
                code: "BOM",
                city: "Mumbai",
                country: "India",
                name: "Chhatrapati Shivaji Maharaj International Airport"
            },

            {
                code: "DEL",
                city: "New Delhi",
                country: "India",
                name: "Indira Gandhi International Airport"
            },

            {
                code: "KUL",
                city: "Kuala Lumpur",
                country: "Malaysia",
                name: "Kuala Lumpur International Airport"
            },

            {
                code: "SIN",
                city: "Singapore",
                country: "Singapore",
                name: "Singapore Changi Airport"
            },

            {
                code: "BKK",
                city: "Bangkok",
                country: "Thailand",
                name: "Suvarnabhumi Airport"
            },

            {
                code: "NRT",
                city: "Tokyo",
                country: "Japan",
                name: "Narita International Airport"
            },

            {
                code: "SYD",
                city: "Sydney",
                country: "Australia",
                name: "Sydney Kingsford Smith Airport"
            }

        ];


        function setupAirportAutocomplete() {

            setupOneAirportAutocomplete(
                "from",
                "fromSuggestions"
            );

            setupOneAirportAutocomplete(
                "to",
                "toSuggestions"
            );

        }


        function setupOneAirportAutocomplete(
            inputId,
            suggestionId
        ) {

            const input =
                document.getElementById(inputId);

            const box =
                document.getElementById(suggestionId);

            if (!input || !box) return;

            input.addEventListener(
                "input",
                () => {

                    const query =
                        input.value
                            .trim()
                            .toLowerCase();

                    if (!query) {

                        box.innerHTML = "";
                        box.classList.remove("active");
                        return;

                    }

                    const matches =
                        airports
                            .filter(airport => {

                                const searchable =
                                    `${airport.code}
                                     ${airport.city}
                                     ${airport.country}
                                     ${airport.name}`
                                        .toLowerCase();

                                return searchable.includes(query);

                            })
                            .slice(0, 8);


                    box.innerHTML =
                        matches.map(airport => `

                            <button
                                type="button"
                                class="airport-option"
                                data-code="${escapeHtml(airport.code)}"
                                data-city="${escapeHtml(airport.city)}"
                            >

                                <span class="airport-main">

                                    <strong>
                                        ${escapeHtml(airport.city)}
                                    </strong>

                                    <small>
                                        ${escapeHtml(airport.name)}
                                        ·
                                        ${escapeHtml(airport.country)}
                                    </small>

                                </span>

                                <span class="airport-code">
                                    ${escapeHtml(airport.code)}
                                </span>

                            </button>

                        `).join("");


                    if (matches.length) {
                        box.classList.add("active");
                    } else {
                        box.classList.remove("active");
                    }


                    box.querySelectorAll(".airport-option")
                        .forEach(button => {

                            button.addEventListener(
                                "click",
                                () => {

                                    input.value =
                                        `${button.dataset.city}
                                         (${button.dataset.code})`;

                                    box.classList.remove("active");

                                }
                            );

                        });

                }
            );


            input.addEventListener(
                "focus",
                () => {

                    if (input.value.trim()) {
                        input.dispatchEvent(
                            new Event("input")
                        );
                    }

                }
            );

        }


        document.addEventListener(
            "click",
            event => {

                if (!event.target.closest(".field")) {

                    document
                        .querySelectorAll(".airport-suggestions")
                        .forEach(box =>
                            box.classList.remove("active")
                        );

                }

            }
        );


        function swapAirports() {

            const from =
                document.getElementById("from");

            const to =
                document.getElementById("to");

            if (!from || !to) return;

            const value =
                from.value;

            from.value =
                to.value;

            to.value =
                value;

            showToast("Departure and destination swapped.");

        }


        /* =========================================================
           DATES / TRIP TYPE
        ========================================================= */

        function setupDates() {

            const departure =
                document.getElementById("departure");

            const returnDate =
                document.getElementById("returnDate");

            if (!departure || !returnDate) return;

            const today =
                new Date()
                    .toISOString()
                    .split("T")[0];

            departure.min = today;
            returnDate.min = today;


            departure.addEventListener(
                "change",
                () => {

                    returnDate.min =
                        departure.value || today;

                    if (
                        returnDate.value &&
                        departure.value &&
                        returnDate.value < departure.value
                    ) {

                        returnDate.value =
                            departure.value;

                    }

                }
            );

        }


        function setupTripTypes() {

            document
                .querySelectorAll('input[name="trip"]')
                .forEach(radio => {

                    radio.addEventListener(
                        "change",
                        updateTripUI
                    );

                });

            updateTripUI();

        }


        function updateTripUI() {

            const type =
                document.querySelector(
                    'input[name="trip"]:checked'
                )?.value;

            const returnDate =
                document.getElementById("returnDate");

            if (!returnDate) return;

            if (type === "one_way") {

                returnDate.disabled = true;
                returnDate.value = "";

            } else {

                returnDate.disabled = false;

            }

            if (type === "multi_city") {

                showToast(
                    "Multi-City mode selected. Your backend must support multi-leg flight searches."
                );

            }

        }


        /* =========================================================
           FLIGHT SEARCH
        ========================================================= */

        async function searchFlights() {

            const from =
                document.getElementById("from")
                    ?.value.trim();

            const to =
                document.getElementById("to")
                    ?.value.trim();

            const departure =
                document.getElementById("departure")
                    ?.value;

            const returnDate =
                document.getElementById("returnDate")
                    ?.value;

            const tripType =
                document.querySelector(
                    'input[name="trip"]:checked'
                )?.value || "round_trip";

            const adults =
                Number(
                    document.getElementById("Adults")
                        ?.value || 1
                );

            const youths =
                Number(
                    document.getElementById("Youths")
                        ?.value || 0
                );

            const children =
                Number(
                    document.getElementById("Childrens")
                        ?.value || 0
                );

            const infants =
                Number(
                    document.getElementById("Infants")
                        ?.value || 0
                );

            const cabin =
                document.getElementById("cabinClass")
                    ?.value || "Economy";

            const airline =
                document.getElementById("airline")
                    ?.value || "";


            if (!from || !to || !departure) {

                showToast(
                    "Please enter From, To and Departure Date."
                );

                return;

            }


            if (
                tripType === "round_trip" &&
                !returnDate
            ) {

                showToast(
                    "Please select a return date."
                );

                return;

            }


            if (from.toLowerCase() === to.toLowerCase()) {

                showToast(
                    "Departure and destination cannot be the same."
                );

                return;

            }


            if (
                tripType === "round_trip" &&
                returnDate < departure
            ) {

                showToast(
                    "Return date cannot be before departure date."
                );

                return;

            }


            const searchButton =
                document.getElementById("searchButton");

            searchButton?.classList.add("loading");

            if (searchButton) {
                searchButton.textContent =
                    "⏳ Searching Flights...";
            }


            const payload = {

                tripType,

                origin: from,
                destination: to,

                departureDate: departure,
                returnDate:
                    tripType === "one_way"
                        ? null
                        : returnDate,

                passengers: {
                    adults,
                    youths,
                    children,
                    infants
                },

                cabinClass: cabin,
                airline

            };


            try {

                /*
                 * OPTIONAL REAL BACKEND
                 *
                 * Connect this endpoint to your authorized
                 * flight provider.
                 */

                const response =
                    await fetch(
                        "/api/flights/search",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(payload)
                        }
                    );


                if (!response.ok) {
                    throw new Error(
                        "Flight API unavailable"
                    );
                }


                const data =
                    await response.json();

                renderFlightResults(
                    data.flights ||
                    data.results ||
                    []
                );

            } catch (error) {

                /*
                 * IMPORTANT:
                 * This does NOT pretend that real flights
                 * were found. It clearly tells the visitor
                 * that the API is not connected.
                 */

                showBackendConnectionMessage();

            } finally {

                searchButton?.classList.remove(
                    "loading"
                );

                if (searchButton) {
                    searchButton.textContent =
                        "🔎 Search Flights";
                }

            }

        }


        function showBackendConnectionMessage() {

            const section =
                document.getElementById(
                    "flightResultsSection"
                );

            const list =
                document.getElementById(
                    "resultsList"
                );

            const summary =
                document.getElementById(
                    "resultsSummary"
                );

            section.classList.add("active");

            summary.textContent =
                "Flight search request prepared.";

            list.innerHTML = `

                <div class="empty-results">

                    <h3>
                        Live Flight API Not Connected
                    </h3>

                    <p style="margin-top:10px;">

                        Your search form is working, but
                        <strong>/api/flights/search</strong>
                        is not connected to a live flight provider.

                    </p>

                    <p style="margin-top:10px;">

                        Connect this endpoint to an authorized
                        flight API/backend to display real-time
                        flight inventory, fares and availability.

                    </p>

                </div>

            `;

            section.scrollIntoView({
                behavior: "smooth"
            });

        }


        /* =========================================================
           FLIGHT RESULTS
        ========================================================= */

        let currentFlights = [];


        function renderFlightResults(
            flights
        ) {

            currentFlights =
                Array.isArray(flights)
                    ? flights
                    : [];

            const section =
                document.getElementById(
                    "flightResultsSection"
                );

            const list =
                document.getElementById(
                    "resultsList"
                );

            const summary =
                document.getElementById(
                    "resultsSummary"
                );


            section.classList.add("active");


            if (!currentFlights.length) {

                summary.textContent =
                    "No flights were returned.";

                list.innerHTML = `
                    <div class="empty-results">
                        <h3>No Flights Found</h3>
                        <p>
                            Try different dates, airports or
                            search preferences.
                        </p>
                    </div>
                `;

                section.scrollIntoView({
                    behavior: "smooth"
                });

                return;

            }


            summary.textContent =
                `${currentFlights.length} flight option(s) found.`;


            applyFlightFilters();

            section.scrollIntoView({
                behavior: "smooth"
            });

        }


        function parseDuration(value) {

            if (typeof value === "number") {
                return value;
            }

            const text =
                String(value || "")
                    .toLowerCase();

            const hourMatch =
                text.match(/(\d+)\s*h/);

            const minuteMatch =
                text.match(/(\d+)\s*m/);

            const hours =
                hourMatch
                    ? Number(hourMatch[1])
                    : 0;

            const minutes =
                minuteMatch
                    ? Number(minuteMatch[1])
                    : 0;

            return hours * 60 + minutes;

        }


        function applyFlightFilters() {

            const sort =
                document.getElementById(
                    "sortFlights"
                )?.value || "price";

            const maxConnections =
                document.getElementById(
                    "maxConnections"
                )?.value;


            let flights =
                [...currentFlights];


            if (maxConnections !== "") {

                flights =
                    flights.filter(flight => {

                        const stops =
                            Number(
                                flight.stops ??
                                flight.numberOfStops ??
                                0
                            );

                        return stops <=
                            Number(maxConnections);

                    });

            }


            flights.sort((a, b) => {

                if (sort === "duration") {

                    return (
                        parseDuration(
                            a.duration
                        ) -
                        parseDuration(
                            b.duration
                        )
                    );

                }

                if (sort === "departure") {

                    return String(
                        a.departureTime ||
                        a.departure ||
                        ""
                    ).localeCompare(
                        String(
                            b.departureTime ||
                            b.departure ||
                            ""
                        )
                    );

                }

                return (
                    Number(
                        a.price ??
                        a.totalPrice ??
                        Infinity
                    ) -
                    Number(
                        b.price ??
                        b.totalPrice ??
                        Infinity
                    )
                );

            });


            const list =
                document.getElementById(
                    "resultsList"
                );


            if (!flights.length) {

                list.innerHTML = `
                    <div class="empty-results">
                        No flights match the selected filter.
                    </div>
                `;

                return;

            }


            list.innerHTML =
                flights.map(
                    (flight, index) =>
                        flightCard(
                            flight,
                            index
                        )
                ).join("");

        }


        function flightCard(
            flight,
            index
        ) {

            const airline =
                flight.airline ||
                flight.airlineName ||
                "Airline";

            const flightNumber =
                flight.flightNumber ||
                flight.number ||
                "Flight";

            const from =
                flight.origin ||
                flight.from ||
                "---";

            const to =
                flight.destination ||
                flight.to ||
                "---";

            const departure =
                flight.departureTime ||
                flight.departure ||
                "--:--";

            const arrival =
                flight.arrivalTime ||
                flight.arrival ||
                "--:--";

            const duration =
                flight.duration ||
                "--";

            const stops =
                flight.stops ??
                flight.numberOfStops ??
                0;

            const price =
                flight.price ??
                flight.totalPrice ??
                "—";

            const currency =
                flight.currency ||
                "USD";

            const baggage =
                flight.baggage ||
                "Baggage details provided by airline";


            return `

                <article class="flight-card">

                    <div class="flight-top">

                        <div>

                            <div class="airline-name">
                                ${escapeHtml(airline)}
                            </div>

                            <div class="flight-number">
                                ${escapeHtml(flightNumber)}
                            </div>

                        </div>

                        <div class="flight-price">

                            <strong>
                                ${escapeHtml(currency)}
                                ${escapeHtml(price)}
                            </strong>

                            <small>
                                per selected fare
                            </small>

                        </div>

                    </div>


                    <div class="flight-route">

                        <div class="flight-point">

                            <strong>
                                ${escapeHtml(departure)}
                            </strong>

                            <small>
                                ${escapeHtml(from)}
                            </small>

                        </div>


                        <div class="route-line">

                            ✈️

                            <br>

                            ${escapeHtml(duration)}

                            <br>

                            ${escapeHtml(stops)} stop(s)

                        </div>


                        <div class="flight-point">

                            <strong>
                                ${escapeHtml(arrival)}
                            </strong>

                            <small>
                                ${escapeHtml(to)}
                            </small>

                        </div>

                    </div>


                    <div class="flight-meta">

                        <span>
                            🧳 ${escapeHtml(baggage)}
                        </span>

                        <span>
                            ✈️ ${escapeHtml(airline)}
                        </span>

                    </div>


                    <button
                        type="button"
                        class="select-flight-btn"
                        onclick="selectFlight(${index})"
                    >
                        Select Flight
                    </button>

                </article>

            `;

        }


        document
            .getElementById("sortFlights")
            ?.addEventListener(
                "change",
                applyFlightFilters
            );


        document
            .getElementById("maxConnections")
            ?.addEventListener(
                "change",
                applyFlightFilters
            );


        /* =========================================================
           SELECT FLIGHT
        ========================================================= */

        let selectedFlight = null;


        async function selectFlight(index) {

            selectedFlight =
                currentFlights[index];


            if (!selectedFlight) return;


            /*
             * Optional offer endpoint.
             * If it is not connected, we still show the
             * passenger form without claiming a confirmed ticket.
             */

            if (selectedFlight.id) {

                try {

                    const response =
                        await fetch(
                            `/api/flights/offer/${encodeURIComponent(
                                selectedFlight.id
                            )}`
                        );


                    if (response.ok) {

                        const offer =
                            await response.json();

                        selectedFlight =
                            offer.flight ||
                            offer.offer ||
                            selectedFlight;

                    }

                } catch (error) {

                    console.log(
                        "Offer endpoint not connected."
                    );

                }

            }


            buildPassengerForm();

            document
                .getElementById("passengerModal")
                .classList.add("active");

            document.body.style.overflow =
                "hidden";

        }


        /* =========================================================
           PASSENGER FORM
        ========================================================= */

        function getPassengerCounts() {

            return {

                adults: Number(
                    document.getElementById("Adults")
                        ?.value || 1
                ),

                youths: Number(
                    document.getElementById("Youths")
                        ?.value || 0
                ),

                children: Number(
                    document.getElementById("Childrens")
                        ?.value || 0
                ),

                infants: Number(
                    document.getElementById("Infants")
                        ?.value || 0
                )

            };

        }


        function buildPassengerForm() {

            const counts =
                getPassengerCounts();

            const container =
                document.getElementById(
                    "passengerFields"
                );

            const ageContainer =
                document.getElementById(
                    "passengerAges"
                );


            if (!container) return;


            container.innerHTML = "";


            let number = 1;


            const addPassenger =
                (
                    type,
                    count
                ) => {

                    for (
                        let i = 1;
                        i <= count;
                        i++
                    ) {

                        const block =
                            document.createElement(
                                "div"
                            );

                        block.className =
                            "passenger-block";


                        block.innerHTML = `

                            <h4>
                                Passenger ${number}
                                - ${escapeHtml(type)}
                            </h4>

                            <div class="passenger-grid">

                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                >

                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                >

                                <select
                                    name="title"
                                    required
                                >
                                    <option value="">
                                        Title
                                    </option>
                                    <option value="Mr">
                                        Mr
                                    </option>
                                    <option value="Ms">
                                        Ms
                                    </option>
                                    <option value="Mrs">
                                        Mrs
                                    </option>
                                    <option value="Miss">
                                        Miss
                                    </option>
                                </select>

                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    aria-label="Date of Birth"
                                    required
                                >

                                <input
                                    type="text"
                                    name="passport"
                                    placeholder="Passport / ID Number"
                                    required
                                >

                                <input
                                    type="text"
                                    name="nationality"
                                    placeholder="Nationality"
                                    required
                                >

                            </div>

                        `;


                        container.appendChild(
                            block
                        );


                        number++;

                    }

                };


            addPassenger(
                "Adult",
                counts.adults
            );

            addPassenger(
                "Youth",
                counts.youths
            );

            addPassenger(
                "Child",
                counts.children
            );

            addPassenger(
                "Infant",
                counts.infants
            );


            updatePassengerAgeFields(
                counts
            );

        }


        function updatePassengerAgeFields(
            counts = getPassengerCounts()
        ) {

            const box =
                document.getElementById(
                    "passengerAges"
                );

            if (!box) return;

            box.innerHTML = "";


            let number = 1;


            const addAgeFields =
                (
                    type,
                    count,
                    min,
                    max
                ) => {

                    for (
                        let i = 1;
                        i <= count;
                        i++
                    ) {

                        const wrapper =
                            document.createElement(
                                "div"
                            );

                        wrapper.innerHTML = `

                            <label>
                                ${escapeHtml(type)}
                                ${i} Age
                            </label>

                            <select
                                name="passengerAge"
                                required
                            >
                                <option value="">
                                    Select age
                                </option>

                                ${Array
                                    .from(
                                        {
                                            length:
                                                max - min + 1
                                        },
                                        (_, index) =>
                                            min + index
                                    )
                                    .map(age =>
                                        `<option value="${age}">
                                            ${age} years
                                        </option>`
                                    )
                                    .join("")
                                }

                            </select>

                        `;

                        box.appendChild(
                            wrapper
                        );

                        number++;

                    }

                };


            addAgeFields(
                "Child",
                counts.children,
                2,
                11
            );

            addAgeFields(
                "Infant",
                counts.infants,
                0,
                1
            );

        }


        function closePassengerModal() {

            document
                .getElementById(
                    "passengerModal"
                )
                ?.classList.remove("active");

            document.body.style.overflow = "";

        }


        /* =========================================================
           BOOKING HOLD
        ========================================================= */

        async function submitBookingHold(event) {

            event.preventDefault();


            if (!selectedFlight) {

                showToast(
                    "Please select a flight first."
                );

                return;

            }


            const form =
                document.getElementById(
                    "passengerForm"
                );

            const formData =
                new FormData(form);


            const passengerFields =
                {};


            formData.forEach(
                (value, key) => {

                    if (!passengerFields[key]) {
                        passengerFields[key] = [];
                    }

                    passengerFields[key].push(
                        value
                    );

                }
            );


            const payload = {

                flight:
                    selectedFlight,

                passengers:
                    passengerFields

            };


            try {

                const response =
                    await fetch(
                        "/api/bookings/hold",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(payload)
                        }
                    );


                if (!response.ok) {
                    throw new Error(
                        "Booking endpoint unavailable"
                    );
                }


                const data =
                    await response.json();


                showBookingConfirmation(
                    data.reference ||
                    data.bookingReference ||
                    "PENDING"
                );


            } catch (error) {

                showBookingConfirmation(
                    "DEMO-PENDING"
                );

            }

        }


        function showBookingConfirmation(
            reference
        ) {

            const box =
                document.getElementById(
                    "bookingConfirmation"
                );


            box.style.display =
                "block";


            box.innerHTML = `

                <strong>
                    Booking request prepared
                </strong>

                <p style="margin-top:7px;">

                    Reference:
                    <strong>
                        ${escapeHtml(reference)}
                    </strong>

                </p>

                <p style="margin-top:7px;">

                    This front-end demo does not confirm
                    ticket issuance or payment. Connect
                    <strong>/api/bookings/hold</strong>
                    to your secure backend before accepting
                    real bookings.

                </p>

            `;

        }


        /* =========================================================
           PAYMENT
        ========================================================= */

        function copyIBAN() {

            const value =
                document.getElementById(
                    "iban"
                )?.textContent.trim();

            if (!value) return;


            if (
                navigator.clipboard &&
                navigator.clipboard.writeText
            ) {

                navigator.clipboard
                    .writeText(value)
                    .then(() => {

                        showToast(
                            "IBAN copied to clipboard."
                        );

                    })
                    .catch(() => {

                        showToast(
                            "Please copy the IBAN manually."
                        );

                    });

            } else {

                showToast(
                    "Please copy the IBAN manually."
                );

            }

        }


        function startSecurePayment() {

            showToast(
                "A real card gateway must be connected before accepting card payments."
            );

        }


        function submitPaymentDetails(event) {

            event.preventDefault();


            const reference =
                document.getElementById(
                    "paymentBookingReference"
                )?.value.trim();


            if (!reference) {

                showToast(
                    "Please enter your booking reference."
                );

                return;

            }


            /*
             * Do not claim that money was received here.
             * This is only a front-end confirmation form.
             */

            showToast(
                "Payment information captured on this demo page. Connect a secure backend before going live."
            );


            event.target.reset();

        }


        /* =========================================================
           CONTACT FORM
        ========================================================= */

        function sendMessage(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                )?.value.trim();


            showToast(
                `Thank you${name ? " " + name : ""}. Your message form is ready for backend/email connection.`
            );


            event.target.reset();

        }


        /* =========================================================
           FAQ
        ========================================================= */

        function toggleFAQ(button) {

            const item =
                button.closest(".faq-item");

            if (!item) return;


            const isActive =
                item.classList.contains(
                    "active"
                );


            document
                .querySelectorAll(".faq-item")
                .forEach(other => {

                    other.classList.remove(
                        "active"
                    );

                    const icon =
                        other.querySelector(
                            ".faq-question span"
                        );

                    if (icon) {
                        icon.textContent = "+";
                    }

                });


            if (!isActive) {

                item.classList.add(
                    "active"
                );

                const icon =
                    button.querySelector(
                        "span"
                    );

                if (icon) {
                    icon.textContent = "−";
                }

            }

        }


        /* =========================================================
           ESC KEY FOR MODALS
        ========================================================= */

        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    closeDestination();
                    closePassengerModal();

                }

            }
        );


        /* =========================================================
           INITIALIZE WEBSITE
        ========================================================= */

        document.addEventListener(
            "DOMContentLoaded",
            () => {

                loadAirlines();

                renderAirlineDirectory();

                renderDestinations();

                setupAirportAutocomplete();

                setupDates();

                setupTripTypes();


                const year =
                    document.getElementById(
                        "currentYear"
                    );

                if (year) {
                    year.textContent =
                        new Date().getFullYear();
                }

            }
        );

    </script>
