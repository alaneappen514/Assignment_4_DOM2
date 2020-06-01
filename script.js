<<<<<<< HEAD
Object.addEventListener("click", imRight1);
Object.addEventListener("click", imRight2);
Object.addEventListener("mouseover", hovered);

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

function hovered() {
    // when user hovers over the div class send the alert with appropriate message
    alert("Hey, I told you not to hover over me!");
}
<<<<<<< HEAD
=======
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const value  = document.getElementById("password").value;
    const h1Tag = document.getElementById("message");
    if(value === "12345678")
    {
        h1Tag.innerHTML = "Login Sucess"
    }
    else{
     alert("Login Failed")
    }
    });
    





>>>>>>> ca0b6d87871f082cc9283b1ba86f5a631e6f43ea
=======

function getVolume() {
    let radius = document.getElementById("radius").value;
    
    // volume of sphere = 4/3 * pi * r^3
    let volume = (4*Math.PI*radius*radius*radius)/3;

    // since we can get a really long float, let's trim the number of decimal places to 3
    volume = volume.toFixed(3);

    alert("The volume of the sphere with radius: " + radius + " is = " + volume + ".");
}
>>>>>>> bonus
