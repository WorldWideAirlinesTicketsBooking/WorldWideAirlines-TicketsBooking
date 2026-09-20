document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("message").innerHTML =
    "Thank you! Your booking inquiry has been received. We will contact you shortly.";

    this.reset();
});
