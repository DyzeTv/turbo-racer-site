document.addEventListener("DOMContentLoaded", function() {
    console.log("Turbo Racer est prêt !");
    
    // Animation du bouton
    document.querySelector(".btn").addEventListener("mouseover", function() {
        this.style.backgroundColor = "yellow";
        this.style.color = "black";
    });

    document.querySelector(".btn").addEventListener("mouseleave", function() {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    });
});
