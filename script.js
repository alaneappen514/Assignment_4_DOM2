Object.addEventListener("click", imRight1);
Object.addEventListener("click", imRight2);

function imRight1() {

    // The problem with code below is that it creates more than one text
    //let p1 = document.createElement("p1");
    //let right_1 = "I'm right";
    //p1.innerHTML = String(right_1);
    //document.body.appendChild(p1);

    // get the first button div
    let b = document.getElementById("I'm right");

    // if first button text is set to hidden, make it visible
    if (b.style.display === "none"){
        b.style.display = "block";
    }
    b.innerHTML = "I'm right";

    // set text of other button to hidden, so only one text is visible on screen at a time
    let a = document.getElementById("No, I'm right!");
    a.style.display = "none";
}

function imRight2() {

    // The problem with code below is that it creates more than one text
    //let p2 = document.createElement("p2");
    //let right_2 = "No, I'm right!";
    //p2.innerHTML = String(right_2);
    //document.body.appendChild(p2);

    // get the second button div
    let c = document.getElementById("No, I'm right!");

    // if second button text is set to hidden, make it visible
    if (c.style.display === "none"){
        c.style.display = "block";
    }
    c.innerHTML = "No, I'm right!";
    
    // set text of other button to hidden, so only one text is visible on screen at a time
    let d = document.getElementById("I'm right");
    d.style.display = "none";
}