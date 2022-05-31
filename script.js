const btn = document.querySelector('button');
const wrap = document.querySelector(".wrap-popup");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

btn.addEventListener('click', e => {
    wrap.style.display = 'block';
    e.stopPropagation();
});

wrap.addEventListener('click', e => {
    wrap.style.display = 'none';
    e.stopPropagation();
});

popup.addEventListener('click', e => {
    wrap.style.display = 'block';
    e.stopPropagation();
});

close.addEventListener('click', e => {
    wrap.style.display = 'none';
    e.stopPropagation();
});

