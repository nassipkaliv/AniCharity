function makeActiveMonth(button) {
  document.querySelectorAll('.month .btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

function makeActivePrice(button) {
  document.querySelectorAll('.price .btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

$(document).ready(function() {
  $('#collapseDiagnostics').on('shown.bs.collapse', function () {
      $('#diagnostics-line').hide();
  });

  $('#collapseDiagnostics').on('hidden.bs.collapse', function () {
      $('#diagnostics-line').show();
  });
});

$(document).ready(function() {
  $('.news-arrow').click(function() {
      $('.arrow-icon').toggleClass('rotate');
  });
});