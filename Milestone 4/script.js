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
    var resumeContent = "\n    <h2> Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>phone-number:</b> <span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>work-experience</h3>\n    <p contenteditable=\"true\">").concat(WorkExperience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated Resume
    if (resume) {
        resume.innerHTML = resumeContent;
    }
    else {
        console.error("The Resume content is missing");
    }
});
