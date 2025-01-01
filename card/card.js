var c1 = document.querySelector("div");
var btn = document.querySelector("button");
var btn2 = document.querySelector("i");

btn.addEventListener("click", () => {
    c1.className = "card";
    btn.style.display = "none";
    
});

btn2.addEventListener("click", () => {
    c1.className = "card-2";
});


    // c1.addEventListener("animationend", () => {
    //     if (c1.className === "card-2") { 
    //         c1.style.display = "none"; 
    //         btn.style.display = "block";
    //     }
    // });