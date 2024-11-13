

function subscribe() {
    email = document.getElementById("email").value;
    if (email == "") {
        alert("Please enter a valid email address.");
        return;
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    } else {
        alert("Thank you for subscribing!");    
    }
}