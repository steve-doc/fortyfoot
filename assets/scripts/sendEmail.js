function sendMail(contactForm) {
    emailjs.send("service_t1iuzxd","template_6o1amh7", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_tel": contactForm.tel.value,
        "interest": contactForm.interest.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.alert("Thank you, we'll be in touch!");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}