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
  $('#collapseDiagnostics2').on('shown.bs.collapse', function () {
      $('#diagnostics-line2').hide();
  });

  $('#collapseDiagnostics2').on('hidden.bs.collapse', function () {
      $('#diagnostics-line2').show();
  });
});

$(document).ready(function() {
  $('#collapseDiagnostics3').on('shown.bs.collapse', function () {
      $('#diagnostics-line3').hide();
  });

  $('#collapseDiagnostics3').on('hidden.bs.collapse', function () {
      $('#diagnostics-line3').show();
  });
});

$(document).ready(function() {
  $('#collapseDiagnostics4').on('shown.bs.collapse', function () {
      $('#diagnostics-line4').hide();
  });

  $('#collapseDiagnostics4').on('hidden.bs.collapse', function () {
      $('#diagnostics-line4').show();
  });
});

$('#collapseDiagnostics').on('show.bs.collapse', function () {
  // Поворот стрелки на 180 градусов
  $('#arrow1').css('transform', 'rotate(180deg)');
  $('#title1').addClass('active');
});

$('#collapseDiagnostics').on('hide.bs.collapse', function () {
  // Возвращение стрелки в исходное положение
  $('#arrow1').css('transform', 'rotate(0deg)');
  $('#title1').removeClass('active');
});


$('#collapseDiagnostics2').on('show.bs.collapse', function () {
  // Поворот стрелки на 180 градусов
  $('#arrow2').css('transform', 'rotate(180deg)');
  $('#title2').addClass('active');
});

$('#collapseDiagnostics2').on('hide.bs.collapse', function () {
  // Возвращение стрелки в исходное положение
  $('#arrow2').css('transform', 'rotate(0deg)');
  $('#title2').removeClass('active');
});

$('#collapseDiagnostics3').on('show.bs.collapse', function () {
  // Поворот стрелки на 180 градусов
  $('#arrow3').css('transform', 'rotate(180deg)');
  $('#title3').addClass('active');
});

$('#collapseDiagnostics3').on('hide.bs.collapse', function () {
  // Возвращение стрелки в исходное положение
  $('#arrow3').css('transform', 'rotate(0deg)');
  $('#title3').removeClass('active');
});

$('#collapseDiagnostics4').on('show.bs.collapse', function () {
  // Поворот стрелки на 180 градусов
  $('#arrow4').css('transform', 'rotate(180deg)');
  $('#title4').addClass('active');
});

$('#collapseDiagnostics4').on('hide.bs.collapse', function () {
  // Возвращение стрелки в исходное положение
  $('#arrow4').css('transform', 'rotate(0deg)');
  $('#title4').removeClass('active');
});

$('#teamMore').on('show.bs.collapse', function () {
  $('.team-show').hide();
});

$('#teamMore').on('hide.bs.collapse', function () {
  $('.team-show').show();
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



  // Initialize renamed Swiper
var animalSwiper = new Swiper('.animalSwiper', {
  // Optional parameters
  slidesPerView: 1, // One slide per view on mobile
  spaceBetween: 10, // Space between slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'; // Default bullet rendering
    },
  },
});

var teamSwiper = new Swiper('.teamSwiper', {
  
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'; // Default bullet rendering
    },
  },
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var desktopSwiper = new Swiper('.desktopSwiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination-progressbar',
    type: 'progressbar',
  },
  // Listen to Swiper events:
  on: {
    progress: function(progress) {
      if (this.pagination.progressbar && this.pagination.progressbar.el) {
        var progressBar = this.pagination.progressbar.el;
        var progressBarFill = progressBar.querySelector('.progressbar-fill');
        if (!progressBarFill) {
          progressBarFill = document.createElement('div');
          progressBarFill.className = 'progressbar-fill';
          progressBar.appendChild(progressBarFill);
        }
        var totalProgress = progress * 100;
        progressBarFill.style.width = totalProgress + '%';
      }
    },
    slideChange: function() {
      // Update progress bar on slide change, if necessary
    },
  },
});

var desktopOneswiper = new Swiper('.desktopOneSwiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable pagination
  pagination: {
    el: '.swiper-pagination-progressbar',
    type: 'progressbar',
  },
  // Listen to Swiper events:
  on: {
    progress: function(progress) {
      if (this.pagination.progressbar && this.pagination.progressbar.el) {
        var progressBar = this.pagination.progressbar.el;
        var progressBarFill = progressBar.querySelector('.progressbar-fill');
        if (!progressBarFill) {
          progressBarFill = document.createElement('div');
          progressBarFill.className = 'progressbar-fill';
          progressBar.appendChild(progressBarFill);
        }
        var totalProgress = progress * 100;
        progressBarFill.style.width = totalProgress + '%';
      }
    },
    slideChange: function() {
      // Update progress bar on slide change, if necessary
    },
  },
  
});


$(document).ready(function() {
  // Listen for the collapse show event
  $('#collapseOne, #collapseTwo, #collapseThree, #collapseFour').on('show.bs.collapse', function () {
    $(this).prev().find('.stroke-change').css('stroke', '#362E2C'); // Change stroke color to #362E2C
  });

  // Listen for the collapse hide event
  $('#collapseOne, #collapseTwo, #collapseThree, #collapseFour').on('hide.bs.collapse', function () {
    $(this).prev().find('.stroke-change').css('stroke', '#F16835'); // Change stroke color back to #F16835
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggleButton').addEventListener('click', function() {
      var toggleText = document.querySelector('.shefstvo-toggle-text1');
      var toggleIcon = document.getElementById('toggleIcon');

      if (toggleText.textContent === 'Подробнее о шефстве') {
          toggleText.textContent = 'Свернуть';
          toggleIcon.style.transform = 'rotate(180deg)';
      } else {
          toggleText.textContent = 'Подробнее о шефстве';
          toggleIcon.style.transform = 'rotate(0deg)';
      }
  });
});

$(document).ready(function() {
  $('#zayavkaAccept').click(function() {
    $('#zayavkaModal').modal('hide');
    $('#thanksModal').modal('show');
  });
});

$(document).ready(function() {
  $('#letZayavka').click(function() {
    $('#contactModal').modal('hide');
    $('#zayavkaModal').modal('show');
  });
});



function redirectToAcceptedPage() {
  window.location.href = 'accepted.html';
}

function redirectToArticles() {
  window.location.href = 'articles.html';
}

function redirectToVeterinar() {
  window.location.href = 'veterinar.html';
}

function redirectToPerevozka() {
  window.location.href = 'perevozka.html';
}

function redirectToHotel() {
  window.location.href = 'hotel.html';
}

function toggleTab(clickedElement) {
  $('.tab-panel-title, .tab-panel-number').removeClass('active');
  
  $(clickedElement).find('.tab-panel-title, .tab-panel-number').addClass('active');
}
