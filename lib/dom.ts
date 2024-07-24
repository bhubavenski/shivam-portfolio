

export default function calculateFixedStateNavbar(): void {
  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  const sticky = navbar.offsetTop;

  function myFunction() {
    if (window.scrollY >= 112) {
      if (!navbar) return;
      navbar.classList.add('fixed');
    } else {
      if (!navbar) return;
      navbar.classList.remove('fixed');
    }
  }

  window.onscroll = function () {
    myFunction();
  };
}
