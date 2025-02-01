"use strict";
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const area = document.getElementById('area').value;
    const currentJob = document.getElementById('currentJob').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
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
