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

document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.querySelector('.btn-play');

  playButton.addEventListener('click', function() {
      window.location.href = 'https://www.youtube.com/watch?v=4KT9BN-MSkM&ab_channel=%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0%D0%97%D0%B5%D0%BC%D0%BB%D1%8F';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var collapseElement = document.getElementById('moreAboutShefstvo');
  var toggleTextSpan = document.querySelector('.more-shefstvo .shefstvo-toggle-text');
  var toggleIcon = document.querySelector('.more-shefstvo .shefstvo-toggle-icon');

  // Function to update text and icon on collapse show/hide
  function updateToggleElement(isCollapsed) {
      if (isCollapsed) {
          toggleTextSpan.textContent = 'Свернуть';
          toggleIcon.style.transform = 'rotate(180deg)';
      } else {
          toggleTextSpan.textContent = 'Подробнее о шефстве';
          toggleIcon.style.transform = 'rotate(0deg)';
      }
  }

  // Event listener for when the collapse element is shown
  collapseElement.addEventListener('show.bs.collapse', function() {
      updateToggleElement(true);
  });

  // Event listener for when the collapse element is hidden
  collapseElement.addEventListener('hide.bs.collapse', function() {
      updateToggleElement(false);
  });
});

var mySwiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Enable swiper in both directions
  loop: true,
  // Responsive breakpoints
  breakpoints: {

    780: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});