document.addEventListener("DOMContentLoaded", function(){
    const mainDisplay = document.getElementById("rating-form");
    const messageDisplay = document.getElementById("message-box");
    const form = document.getElementById("form");
    const ratingDisplay = document.getElementById("rating-stars")

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let rating = document.querySelector('input[name="rating"]:checked').value

        ratingDisplay.textContent = rating
        mainDisplay.style.display = "none"
        messageDisplay.style.display = "flex"

    })
})