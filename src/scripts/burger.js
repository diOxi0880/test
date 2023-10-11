const activeSvgList = document.querySelector('.burger_menu');
const hiddenDivList = document.querySelector('.burger_list');

activeSvgList.addEventListener('click', function () {
    const burgerImage = activeSvgList.querySelector('img');
    if (hiddenDivList.style.visibility === 'hidden') {
        hiddenDivList.style.visibility = 'visible';
        burgerImage.setAttribute('src', 'images/burger/menu_button_cross.svg')
    } else {
        hiddenDivList.style.visibility = 'hidden';
        burgerImage.setAttribute('src', 'images/burger/menu_button.svg')       
    }
}) 