document.addEventListener("DOMContentLoaded", () => {
    const addSkillButton = document.getElementById("add-skill") as HTMLButtonElement;
    const skillInput = document.getElementById("skill") as HTMLInputElement;
    const skillsList = document.getElementById("skills-list") as HTMLUListElement;
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const outputElement = document.getElementById("resumeOutput") as HTMLDivElement;
  
    // Adding skill functionality
    if (addSkillButton && skillInput && skillsList) {
        addSkillButton.addEventListener("click", function () {
            const skillValue = skillInput.value.trim();
            if (skillValue) {
                const li = document.createElement("li");
                li.textContent = skillValue;
                skillsList.appendChild(li);
                skillInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a skill');
            }
        });
    }
  
    // Form submission and resume generation
    if (resumeForm && outputElement) {
        resumeForm.addEventListener("submit", function (event) {
            event.preventDefault();
  
            // Get values safely
            const name = (document.getElementById("name") as HTMLInputElement)?.value || "No Name";
            const email = (document.getElementById("email") as HTMLInputElement)?.value || "No Email";
            const contactNo = (document.getElementById("contactNo") as HTMLInputElement)?.value || "No Contact";
            const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || "No Education";
            const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value || "No Experience";
  
            // Collect skills
            const skills = Array.from(skillsList.children).map(li => li.textContent || "");
  
            // Generate resume output
            const resumeOutput = `
                <h1>Resume</h1>
                <h3>Personal Information:</h>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Contact No:</b> ${contactNo}</p>
                <h3>Education:</h3>
                <p>${education}</p>
                <h3>Experience:</h3>
                <p>${experience}</p>
                <h3>Skills:</h3>
                <p>${skills.length > 0 ? skills.join(', ') : 'No skills added.'}</p>
            `;
  
            // Display the output
            outputElement.innerHTML = resumeOutput;
        });
    }
  });