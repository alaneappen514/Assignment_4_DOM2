Object.addEventListener("click", imRight1);
Object.addEventListener("click", imRight2);

function imRight1() {
    //let p1 = document.createElement("p1");
    //let right_1 = "I'm right";
    //p1.innerHTML = String(right_1);
    //document.body.appendChild(p1);

    let b = document.getElementById("I'm right");

    if (b.style.display === "none"){
        b.style.display = "block";
    }
    b.innerHTML = "I'm right";

    let a = document.getElementById("No, I'm right!");
    a.style.display = "none";
}

function imRight2() {
    //let p2 = document.createElement("p2");
    //let right_2 = "No, I'm right!";
    //p2.innerHTML = String(right_2);
    //document.body.appendChild(p2);
    let c = document.getElementById("No, I'm right!");

    if (c.style.display === "none"){
        c.style.display = "block";
    }
    c.innerHTML = "No, I'm right!";
    
    let d = document.getElementById("I'm right");
    d.style.display = "none";
}