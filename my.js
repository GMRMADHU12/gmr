// Smooth scrolling to section on page
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Replace this with your own implementation
    console.log(data);
    alert('Thanks for your message!');
    
    // Clear the form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});


