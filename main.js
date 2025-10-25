 
 const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const actionButton = document.getElementById('actionButton');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    actionButton.addEventListener('click', () => {
      alert('Get Started button clicked!');
    });