document.getElementById("subscribed-btn").addEventListener("click", function() {
    alert("Thank you for subscribing! Download unlocked.");
    document.getElementById("subscribe-overlay").style.display = "none";
    document.getElementById("download-section").style.display = "block";
});
