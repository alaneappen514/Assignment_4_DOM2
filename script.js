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
    





