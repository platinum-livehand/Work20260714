// Team Profile Page Scripts
function initializePage() {
    console.log('Team Profile Page loaded');
    initProjects();
    initContactForm();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

/* ===========================================
   Projects Functions (Person C)
   =========================================== */
function initProjects() {
    const projectButtons = document.querySelectorAll('.project-btn');

    if (!projectButtons.length) {
        return;
    }

    projectButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            const card = this.closest('.project-card');
            const projectId = card ? card.getAttribute('data-project') : null;

            if (projectId) {
                alert('Opening details for Project ' + projectId + '...\n\nThis would navigate to the project page in a real application.');
            }
        });
    });
}

/* ===========================================
   Contact Form Functions (Person D)
   =========================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) {
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        status.textContent = 'Sending message...';
        status.className = 'form-status';

        setTimeout(() => {
            console.log('Form submitted:', data);
            status.textContent = 'Message sent successfully! We will get back to you soon.';
            status.className = 'form-status success';
            form.reset();
        }, 1500);
    });
}
