
function burgerClicked()
{
    var burgerMenu = document.getElementById('navbar-nav');
    var burgerIcon = document.getElementById('burgericon');
    burgerMenu.classList.toggle('burger-clicked');
    burgerIcon.classList.toggle('fa-close');
}