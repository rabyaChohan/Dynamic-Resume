document.addEventListener("DOMContentLoaded", function () {
    var addSkillButton = document.getElementById("add-skill");
    var skillInput = document.getElementById("skill");
    var skillsList = document.getElementById("skills-list");
    var resumeForm = document.getElementById("resumeForm");
    var outputElement = document.getElementById("resumeOutput");
    // Adding skill functionality
    if (addSkillButton && skillInput && skillsList) {
        addSkillButton.addEventListener("click", function () {
            var skillValue = skillInput.value.trim();
            if (skillValue) {
                var li = document.createElement("li");
                li.textContent = skillValue;
                skillsList.appendChild(li);
                skillInput.value = ''; // Clear the input field
            }
            else {
                alert('Please enter a skill');
            }
        });
    }
    // Form submission and resume generation
    if (resumeForm && outputElement) {
        resumeForm.addEventListener("submit", function (event) {
            var _a, _b, _c, _d, _e;
            event.preventDefault();
            // Get values safely
            var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "No Name";
            var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "No Email";
            var contactNo = ((_c = document.getElementById("contactNo")) === null || _c === void 0 ? void 0 : _c.value) || "No Contact";
            var education = ((_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value) || "No Education";
            var experience = ((_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value) || "No Experience";
            // Collect skills
            var skills = Array.from(skillsList.children).map(function (li) { return li.textContent || ""; });
            // Generate resume output
            var resumeOutput = "\n                <h1>Resume</h1>\n                <h3>Personal Information:</h>\n                <p><b>Name:</b> ".concat(name, "</p>\n                <p><b>Email:</b> ").concat(email, "</p>\n                <p><b>Contact No:</b> ").concat(contactNo, "</p>\n                <h3>Education:</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience:</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills:</h3>\n                <p>").concat(skills.length > 0 ? skills.join(', ') : 'No skills added.', "</p>\n            ");
            // Display the output
            outputElement.innerHTML = resumeOutput;
        });
    }
});
