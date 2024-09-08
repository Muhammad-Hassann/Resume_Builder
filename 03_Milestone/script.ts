function toggleSection(sectionId: string): void {
  const section = document.getElementById(sectionId) as HTMLElement;
  const toggleIcon = section.previousElementSibling?.querySelector('.toggle-icon');

  if (section.style.display === 'none') {
    section.style.display = 'block'; 
    toggleIcon!.textContent = '-';
  } else {
    section.style.display = 'none'; 
    toggleIcon!.textContent = '+'; 
  }
}


// Profile Picture Upload and Display
const imageInput = document.getElementById('image-input') as HTMLInputElement;
const profilePicture = document.getElementById('profile-picture') as HTMLImageElement;

document.getElementById('image-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const file = imageInput.files ? imageInput.files[0] : null;

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePicture.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
});

// Personal Info Update
const nameInput = document.getElementById('name-input') as HTMLInputElement;
const jobInput = document.getElementById('job-input') as HTMLInputElement;
const emailInput = document.getElementById('email-input') as HTMLInputElement;
const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
const locationInput = document.getElementById('location-input') as HTMLInputElement;

document.getElementById('personal-info-form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  document.getElementById('name')!.textContent = nameInput.value || 'John Doe';
  document.getElementById('job')!.textContent = jobInput.value || 'Web Developer';
  document.getElementById('email')!.textContent = emailInput.value || 'john.doe@example.com';
  document.getElementById('phone')!.textContent = phoneInput.value || '+123 456 7890';
  document.getElementById('location')!.textContent = locationInput.value || 'New York, USA';
});

// Summary Update
const summaryInput = document.getElementById('summary-input') as HTMLTextAreaElement;
const summaryDisplay = document.getElementById('summary') as HTMLElement;

document.getElementById('summary-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  summaryDisplay.textContent = summaryInput.value || 'A highly motivated web developer with experience in creating dynamic and responsive web applications.';
});

// Skills Update
const skillsInput = document.getElementById('skills-input') as HTMLTextAreaElement;
const skillsList = document.getElementById('skills-list') as HTMLElement;

document.getElementById('skills-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const skillsArray = skillsInput.value.split(',').map(skill => skill.trim());
  
  skillsList.innerHTML = '';
  skillsArray.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
});

// Experience Update
const experienceInput = document.getElementById('experience-input') as HTMLTextAreaElement;
const experienceDisplay = document.getElementById('experience') as HTMLElement;

document.getElementById('experience-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  experienceDisplay.textContent = experienceInput.value || 'Software Engineer at ABC Company (2020 - Present)';
});

// Education Update
const educationInput = document.getElementById('education-input') as HTMLTextAreaElement;
const educationDisplay = document.getElementById('education') as HTMLElement;

document.getElementById('education-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  educationDisplay.textContent = educationInput.value || 'B.Sc. in Computer Science - XYZ University (2015 - 2019)';
});
