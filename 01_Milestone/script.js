function toggleSection(sectionId) {
    const sectionContent = document.querySelector(`#${sectionId} .content`);
    const toggleIcon = document.querySelector(`#${sectionId} .toggle-icon`);
    if (sectionContent) {
        sectionContent.classList.toggle('hidden');
        // Change the toggle icon based on visibility
        if (sectionContent.classList.contains('hidden')) {
            if (toggleIcon)
                toggleIcon.textContent = '+'; // Show plus icon when hidden
        }
        else {
            if (toggleIcon)
                toggleIcon.textContent = '-'; // Show minus icon when visible
        }
    }
}
