import style from './style.scss';

if (module.hot) {
  module.hot.accept()
}

const menuOpenBtn = document.querySelector('.header-menu__btn');
const menuCloseBtn = document.querySelector('.menu-btn__close');
const menu = document.querySelector('.menu');
const btnDesktop = document.querySelector('.btn-desktop');
const btnMobile = document.querySelector('.btn-mobile');
const textMobile = document.querySelector('.info-mobile');
const textDesktop = document.querySelector('.info-desktop');
const formInput = document.querySelector('.input-mail');
const inputLabel = document.querySelector('.label-mail');
const invalidFeedback = document.querySelector('.invalid-feedback');
const listInput = document.querySelector('.list-input');
const list = document.querySelector('.list');
const listItem = document.querySelectorAll('.list-item');
const accordion = document.getElementsByClassName('accordion');

btnMobile.addEventListener('click', () => {
  btnDesktop.classList.remove('active');
  btnMobile.classList.add('active');
  textDesktop.style.display = 'none';
  textMobile.style.display = 'grid';
});

btnDesktop.addEventListener('click', () => {
  btnMobile.classList.remove('active');
  btnDesktop.classList.add('active');
  textMobile.style.display = 'none';
  textDesktop.style.display = 'grid';
});

menuOpenBtn.addEventListener('click', () => {
  menu.style.visibility = 'visible';
})

menuCloseBtn.addEventListener('click', () => {
  menu.style.visibility = 'hidden';
});

formInput.addEventListener('blur', () => {
  if (!formInput.value.includes('@') || formInput.value.length < 8) {
    formInput.classList.add('invalid');
    invalidFeedback.style.display = 'block';
    inputLabel.style.color = '#E80F3B';
  } else {
    formInput.classList.remove('invalid');
    invalidFeedback.style.display = 'none';
    inputLabel.style.color = '#7D7D7D';
  }
});

listInput.addEventListener('click', () => {
  list.classList.add('list-active');
})

listItem.forEach((item) => {
  item.addEventListener('click', () => {
    for (let i = 0; i < listItem.length; i++) {
      if (listItem[i].classList.contains('item-active')) {
        listItem[i].classList.remove('item-active');
      }
    }
    listInput.value = item.textContent;
    item.classList.add('item-active');
    list.classList.remove('list-active');
  })
})


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle('active-acc');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}