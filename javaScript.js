const photo = document.getElementById('photo-of-me');

photo.addEventListener('click', () => {
    photo.classList.toggle('flipped');
});


photo.addEventListener('mouseenter', () => {
  photo.style.borderColor = '#0080ff';   // hover colour
});

photo.addEventListener('mouseleave', () => {
  photo.style.borderColor = '';          // revert to the CSS rule
});