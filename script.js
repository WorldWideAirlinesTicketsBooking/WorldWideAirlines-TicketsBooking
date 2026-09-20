document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("message").innerHTML =
        "Thank you! Your inquiry has been submitted successfully.";

    this.reset();
});
