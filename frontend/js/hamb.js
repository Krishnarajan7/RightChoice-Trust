function toggleMenu() {
  document.querySelector('.hamburger-menu').classList.toggle('active');
  document.querySelector('.navitems').classList.toggle('active');
}
function toggleDropdown(event) {
  event.preventDefault();
  let dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('active');
}