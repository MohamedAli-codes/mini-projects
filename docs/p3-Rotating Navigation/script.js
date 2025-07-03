var openNav = document.getElementById('open-nav');
var closeNav = document.getElementById('close-nav');
var divContainer = document.querySelector('.container');
var circleBtnsContainer = document.querySelector('.circle-btns')


openNav.addEventListener('click', (e)=>{
    divContainer.classList.add('show-nav');
    circleBtnsContainer.classList.add('active')
})

closeNav.addEventListener('click', (e)=>{
    divContainer.classList.remove('show-nav');
    circleBtnsContainer.classList.remove('active')
})
