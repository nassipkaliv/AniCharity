function makeActiveMonth(button) {
  document.querySelectorAll('.month .btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

function makeActivePrice(button) {
  document.querySelectorAll('.price .btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

document.getElementById('homeButton').addEventListener('click', function() {
  window.location.href = 'index.html';
});
