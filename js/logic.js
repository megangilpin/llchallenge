$(document).ready(function () {
  // Carousel features created with splide.js
  let splide = new Splide('.splide', {
    autoWidth: true,
    start: 1,
    focus: 'center',
    perPage: 1,
    gap: 35,
    trimSpace: false,
    keyboard: true,
    drag: true,
    slideFocus: true,
    breakpoints: {
      640: {
        perPage: 1
      }
    }
  });

  // Changes card opacity if it is the active card
  let images = document.querySelectorAll('.splide__slide');

  let activeImage = images[1];

  let activeClass = 'splide__focus';

  splide.on('move', function (newIndex) {
    let image = images[newIndex];

    if (image && activeImage !== image) {
      if (activeImage) {
        activeImage.classList.remove(activeClass);
      }

      image.classList.add(activeClass);
      activeImage = image;
    }
  });

  images[1].classList.add(activeClass);
  splide.mount();

  // Change font color of select drop down once a selectable option is chosen
  $('#reason').css('color', 'black');
  $('#reason').change(function () {
    var current = $('#reason').val();
    if (current != 'null' && current !== 'reason') {
      $('#reason').css('color', '#001d5d');
    } else {
      $('#reason').css('color', 'black');
    }
  });

  // Responsive Nav
  const burger = document.querySelector('.navigation__burger i');
  const nav = document.querySelector('.navigation__side');

  function toggleNav() {
    console.log(nav);
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('navigation__active');
  }

  burger.addEventListener('click', function () {
    toggleNav();
  });
});

// Google Map functions

let map;

function initMap() {
  let options = {
    zoom: 14,
    center: { lat: 38.970638, lng: -94.704292 },
    disableDefaultUI: true,
    scrollwheel: false,
    gestureHandling: 'none',
    mapId: 'f45248977fbad7c9'
  };
  map = new google.maps.Map(document.getElementById('map'), options);

  let marker = new google.maps.Marker({
    position: {
      ...options.center
    },
    map: map,
    icon: '../assets/img/icon/Location_pin.svg'
  });
}
