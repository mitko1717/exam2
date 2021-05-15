const carousel = document.querySelector('.section-four__carousel');
const carouselObj = document.querySelector('.section-four__carousel--obj');

const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

let count = 0;

const size = carouselObj.offsetWidth;
const lengthObj = document.querySelectorAll('.section-four__carousel--obj');
const objWidth = document.querySelector(
  '.section-four__carousel--obj'
).offsetWidth;

const paginator = document.querySelectorAll('.circles__item--circle');

prevBtn.addEventListener('click', () => {
  if (count <= 0) {
    return (count = count);
  }

  count--;
  paginator[count + 1].classList.remove('active');
  paginator[count].classList.add('active');

  carousel.style.transition = 'transform 0.2s ease-in-out';
  carousel.style.transform =
    'translateX(' + (-objWidth - 20) * count * 3 + 'px)';
  console.log(count);
});

nextBtn.addEventListener('click', () => {
  if (count >= lengthObj.length / 3 - 1) {
    return (count = count);
  }

  count++;
  paginator[count - 1].classList.remove('active');
  paginator[count].classList.add('active');

  carousel.style.transition = 'transform 0.2s ease-in-out';
  carousel.style.transform =
    'translateX(' + (-objWidth - 20) * count * 3 + 'px)';
  console.log(count);
});

///

const moreDet2 = document.querySelector('.section-two__content--right__btn');
const moreDet3 = document.querySelector('.section-three__content--left__btn');

const more2 = document.querySelector('.parag__more2');
const more3 = document.querySelector('.parag__more3');

moreDet2.addEventListener('click', () => {
  if (more2.style.display === 'none') {
    more2.style.display = 'block';
  } else {
    more2.style.display = 'none';
  }
});

moreDet3.addEventListener('click', () => {
  if (more3.style.display === 'none') {
    more3.style.display = 'block';
  } else {
    more3.style.display = 'none';
  }
});
//

const sectionFive = document.querySelector('.section-five');
const btnSecFive = document.querySelector('.section-five__button');
const hiddenGallery = document.querySelector('.hiddenGallery');

btnSecFive.addEventListener('click', () => {
  if (hiddenGallery.style.display === 'none') {
    hiddenGallery.style.display = 'block';
    hiddenGallery.style.marginBottom = '50px';
    sectionFive.style.height = '1200px';
  } else {
    hiddenGallery.style.display = 'none';
    sectionFive.style.height = '1000px';
  }
});

//
// const nav = document.querySelectorAll('.right-nav');

// for (let i = 0; i < nav.length; i++) {
//   nav[i].addEventListener('click', check);
// }

// function check(e) {
//   document.querySelector('.activeNav').classList.remove('activeNav');

//   e.target.classList.add('activeNav');
// }

// //

// const headNav = document.querySelectorAll('.header__list');
// for (let i = 0; i < headNav.length; i++) {
//   headNav[i].addEventListener('click', check);
// }

// function check(e) {
//   document.querySelector('.activeHead').classList.remove('activeHead');

//   e.target.classList.add('activeHead');
// }

const rightNav = document.querySelectorAll('.right-nav--circle');

rightNav.forEach(function (item) {
  item.addEventListener('click', function () {
    rightNav.forEach(function (item) {
      item.classList.remove('activeNav');
    });
    item.classList.add('activeNav');
  });
});

const headNav = document.querySelectorAll('.header__list--list-item');

headNav.forEach(function (item) {
  item.addEventListener('click', function () {
    headNav.forEach(function (item) {
      if (item.classList.contains('activeHead'))
        item.classList.remove('activeHead');
    });
    item.classList.add('activeHead');
  });
});

