var subscribed = false;

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
        subscribed = true;
    }
}

function unlock() {
    var content_lock = document.getElementById("content_lock");
    if (subscribed) {
        content_lock.innerHTML = "Enjoyed this post? Subscribe for more!";
    } else {
        content_lock.innerHTML = "Please subscribe to view this content.";
    }
}