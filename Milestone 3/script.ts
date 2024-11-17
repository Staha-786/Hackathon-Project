const form = document.getElementById("resume-form") as HTMLFormElement
const resume = document.getElementById("Resume-Display") as HTMLDivElement

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    const name = (document.getElementById("Name") as HTMLInputElement).value
    const email = (document.getElementById("Email") as HTMLInputElement).value
    const phone = (document.getElementById("phone-number") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const WorkExperience = (document.getElementById("work-experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // Generate Resume Content
    
    const resumeContent = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>phone-number:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>work-experience</h3>
    <p>${WorkExperience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `
    // Display the generated Resume
    
    if(resume){
        resume.innerHTML = resumeContent
    }else{
        console.error("The Resume content is missing");
    }
 
});
