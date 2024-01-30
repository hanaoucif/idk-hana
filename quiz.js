//js
//nav
// Function to change the background color of the navbar on scroll 
function handleScroll() {
  const navbar = document.querySelector('#old-menu');
  const scrollY = window.scrollY;

  // You can set a threshold value for when the background color changes
  // For example, change color when scrolled down by 100 pixels
  if (scrollY >= 100) {
      navbar.style.backgroundColor = 'white';
      navbar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

    
      //for transition nav
      navbar.style.transition= 'background-color 0.5s ease-in-out';
    
  
  } else {
      navbar.style.backgroundColor = 'transparent';
  
  }
}
