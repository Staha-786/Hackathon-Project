var form = document.getElementById("resume-form");
var resume = document.getElementById("Resume-Display");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("phone-number").value;
    var education = document.getElementById("education").value;
    var WorkExperience = document.getElementById("work-experience").value;
    var skills = document.getElementById("skills").value;
    // Generate Resume Content
    var resumeContent = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>phone-number:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>work-experience</h3>\n    <p>").concat(WorkExperience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display the generated Resume
    if (resume) {
        resume.innerHTML = resumeContent;
    }
    else {
        console.error("The Resume content is missing");
    }
});
