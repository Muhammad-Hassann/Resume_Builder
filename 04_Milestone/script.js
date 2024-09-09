const personalInfo = document.querySelector(".personal-info");
const editBtn = document.querySelector(".btn-div > .edit-btn");
editBtn.style.display = "none";
// Show the edit button on mouseover
personalInfo.addEventListener("mouseover", () => {
    editBtn.style.display = "block";
    personalInfo.classList.add("active-personal");
});
// Hide the edit button on mouseout
personalInfo.addEventListener("mouseout", () => {
    editBtn.style.display = "none";
    personalInfo.classList.remove("active-personal");
});
const sections = document.querySelectorAll(".section");
let activeSection = null;
sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
        if (activeSection !== section) {
            if (activeSection) {
                activeSection.classList.remove("active-section");
                const editBtn = activeSection.querySelector(".edit-btn");
                editBtn.style.display = "none";
            }
            section.classList.add("active-section");
            const editBtn = section.querySelector(".edit-btn");
            editBtn.style.display = "block";
            activeSection = section;
        }
    });
    section.addEventListener("mouseleave", () => {
        if (activeSection === section) {
            section.classList.remove("active-section");
            const editBtn = section.querySelector(".edit-btn");
            editBtn.style.display = "none";
            activeSection = null;
        }
    });
});
function editSection(section) {
    let inputField;
    switch (section) {
        case 'personal':
            inputField = document.getElementById('name-input');
            if (inputField) {
                inputField.value = document.getElementById('name').innerText;
                inputField.focus();
            }
            inputField = document.getElementById('job-input');
            if (inputField) {
                inputField.value = document.getElementById('job').innerText;
                inputField.focus();
            }
            inputField = document.getElementById('email-input');
            if (inputField) {
                inputField.value = document.getElementById('email').innerText;
                inputField.focus();
            }
            inputField = document.getElementById('phone-input');
            if (inputField) {
                inputField.value = document.getElementById('phone').innerText;
                inputField.focus();
            }
            inputField = document.getElementById('location-input');
            if (inputField) {
                inputField.value = document.getElementById('location').innerText;
                inputField.focus();
            }
            break;
        case 'summary':
            inputField = document.getElementById('summary-input');
            if (inputField) {
                inputField.value = document.getElementById('summary').innerText;
                inputField.focus();
            }
            break;
        case 'skills':
            inputField = document.getElementById('skills-input');
            if (inputField) {
                const skills = Array.from(document.querySelectorAll('#skills-content li'))
                    .map((li) => li.innerText)
                    .join(', ');
                inputField.value = skills;
                inputField.focus();
            }
            break;
        case 'education':
            inputField = document.getElementById('education-input');
            if (inputField) {
                inputField.value = document.getElementById('education').innerText;
                inputField.focus();
            }
            break;
        case 'experience':
            inputField = document.getElementById('experience-input');
            if (inputField) {
                const experiences = Array.from(document.querySelectorAll('#experience-content p'))
                    .map((p) => p.innerText)
                    .join('\n');
                inputField.value = experiences;
                inputField.focus();
            }
            break;
        default:
            console.error(`Unknown section: ${section}`);
    }
}
// Profile Picture Upload and Display
const imageInput = document.getElementById('image-input');
const profilePicture = document.getElementById('profile-picture');
document.getElementById('image-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const file = imageInput.files ? imageInput.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicture.src = e.target?.result;
        };
        reader.readAsDataURL(file);
    }
});
// Personal Info Update
const nameInput = document.getElementById('name-input');
const jobInput = document.getElementById('job-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const locationInput = document.getElementById('location-input');
document.getElementById('personal-info-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('name').textContent = nameInput.value || 'John Doe';
    document.getElementById('job').textContent = jobInput.value || 'Web Developer';
    document.getElementById('email').textContent = emailInput.value || 'john.doe@example.com';
    document.getElementById('phone').textContent = phoneInput.value || '+123 456 7890';
    document.getElementById('location').textContent = locationInput.value || 'New York, USA';
});
// Summary Update
const summaryInput = document.getElementById('summary-input');
const summaryDisplay = document.getElementById('summary-content');
document.getElementById('summary-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    summaryDisplay.textContent = summaryInput.value || 'A highly motivated web developer with experience in creating dynamic and responsive web applications.';
    summaryInput.value = '';
});
// Skills Update
const skillsInput = document.getElementById('skills-input');
const skillsList = document.getElementById('skills-content');
document.getElementById('skills-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const skillsArray = skillsInput.value.split(',').map(skill => skill.trim());
    skillsList.innerHTML = '';
    skillsArray.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    skillsInput.value = '';
});
// Experience Update
const experienceInput = document.getElementById('experience-input');
const experienceDisplay = document.getElementById('experience-content');
document.getElementById('experience-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    experienceDisplay.textContent = experienceInput.value || 'Software Engineer at ABC Company (2020 - Present)';
    experienceInput.value = '';
});
// Education Update
const educationInput = document.getElementById('education-input');
const educationDisplay = document.getElementById('education-content');
document.getElementById('education-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    educationDisplay.textContent = educationInput.value || 'B.Sc. in Computer Science - XYZ University (2015 - 2019)';
    educationInput.value = '';
});
