const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const texts = ['My name is Thang and I\'m a Web Developer'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typing() {
  if(count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(typing, 100);
}());


$("#scroll").click(function() {
  $('html,body').animate({
      scrollTop: $("#main-container").offset().top},
      'slow');
});




hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

$( window ).scroll(function() {
  if($(window).scrollTop() > 0) {
    $('nav').addClass('nav-transparent')
    $('.nav-text').css('color', 'black');
    $('.line').css('background', 'black');
  }
  else if($(window).scrollTop() == 0) {
    $('nav').removeClass('nav-transparent')
    $('.nav-text').css('color', 'white');
    $('.line').css('background', 'white');
  }
});

$('')