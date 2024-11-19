var message;
var email;
var name;

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
        document.cookie = "subscribed=true";
    }
}

function unlock() {
    var content_lock = document.getElementById("content_lock");
    var subscribed = getCookie("subscribed");
    if (subscribed) {
        content_lock.innerHTML = "Enjoyed this post? Subscribe for more!";
    } else {
        content_lock.innerHTML = "Please subscribe to view this content.";
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return;
  }

function send() {
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    name = document.getElementById("name").value;
    var alertMessage  = "";
    if (name == "" || email == "" || message == "") {
        alertMessage  += ("Please fill out all fields.\n");
    }
    if (email == "" || !email.includes("@")) {
        alertMessage  += ("Please enter a valid email address.");
    }

    if (alertMessage  != "") {
        alert(alertMessage);
        return;
    } else {
        alertMessage  += ("Thank you for your message! We will get back to you shortly.");
    }
    alert(alertMessage);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function expandForm() {
    var form = document.getElementById("message");
    var message = document.getElementById("message").value;
    var enters = message.split("\n").length;
    console.log(enters);
    var lines = message.length/55;
    lines = Math.floor(lines);
    console.log(lines);
    var total = lines + enters;

    if (total < 3) {
        form.rows = 3;
        return 3;
    } else {
        form.rows = total+1;
        return total+1;
    }

}

function generateEmail() {

}