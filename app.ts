document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const country = (document.getElementById('country') as HTMLInputElement).value;
    const area = (document.getElementById('area') as HTMLInputElement).value;
    const currentJob = (document.getElementById('currentJob') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Generate resume content
    const resumeContent = `
        <h2 class="editable" contenteditable="true">${name}</h2>
        <p class="editable" contenteditable="true">Email: ${email}</p>
        <p class="editable" contenteditable="true">Phone: ${phone}</p>
        <p class="editable" contenteditable="true">Address: ${address}</p>
        <p class="editable" contenteditable="true">City: ${city}</p>
        <p class="editable" contenteditable="true">Country: ${country}</p>
        <p class="editable" contenteditable="true">Area: ${area}</p>
        <p class="editable" contenteditable="true">Currently Working: ${currentJob}</p>
        <h3 class="editable" contenteditable="true">Skills</h3>
        <p class="editable" contenteditable="true">${skills}</p>
        <h3 class="editable" contenteditable="true">Experience</h3>
        <p class="editable" contenteditable="true">${experience}</p>
        <h3 class="editable" contenteditable="true">Education</h3>
        <p class="editable" contenteditable="true">${education}</p>
    `;

    // Display generated resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
});

