var toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function () {
  if (topbar.classList.contains('show')) {
    topbar.classList.remove('show');
    topbar.classList.add('hide');
  }
  else {
    topbar.classList.add('show');
    topbar.classList.remove('hide');
  }
});