document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 321) {
        console.log('Ширина > 321, выходим, Swiper не запускаем');
    // экран шире 768px — слайдер не нужен, просто выходим
    return;
  }
  //else 
console.log('Ширина <= 321, создаём Swiper');
   const swiper = new Swiper('.brend__line', {
    // сколько слайдов видно одновременно
    slidesPerView: 1.25,

    // расстояние между слайдами в пикселях
    spaceBetween: 16,

    // по желанию: листать по кругу или нет
    loop: false,

    pagination: {
    el: '.swiper-pagination',
  },
  });

});
document.addEventListener('DOMContentLoaded', () => {
  const showAll = document.querySelector('.show_all');
  if (!showAll) return;

  const showAllText = showAll.querySelector('p');
  const hiddenSlides = document.querySelectorAll('.brend__line__block.hidden');

  showAll.addEventListener('click', () => {
    if (!hiddenSlides.length) return;

    const isOpening = hiddenSlides[0].classList.contains('hidden');

    hiddenSlides.forEach(slide => {
      slide.classList.toggle('hidden', !isOpening);
    });

    showAllText.textContent = isOpening ? 'Скрыть' : 'Показать все';
  });
}); // вот это нормально, но тогда сверху должна быть открывающая скобка


