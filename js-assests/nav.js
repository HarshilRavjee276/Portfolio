// Mobile sidebar (file explorer) toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var scrim = document.querySelector('.scrim');

  function closeMenu() {
    sidebar.classList.remove('is-open');
    scrim.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    sidebar.classList.add('is-open');
    scrim.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle && sidebar && scrim) {
    toggle.addEventListener('click', function () {
      var isOpen = sidebar.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });
    scrim.addEventListener('click', closeMenu);
    document.querySelectorAll('.side-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
});
