document.getElementById('menu-btn').addEventListener('click', function () {
  var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
  myOffcanvas.toggle();
});