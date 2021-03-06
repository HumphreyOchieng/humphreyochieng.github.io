/**
 * Created by Humphrey Ochieng on 7/2/2017.
 */
document.addEventListener('DOMContentLoaded', function(){
    var
        checkbox = document.getElementById('checkbox'),
        list = document.getElementById('nav__inner'),
        menuIcon = document.getElementById('nav__menu-icon'),
        menuIconBars = document.getElementsByClassName('nav__bar'),
        menuIconBarsClicked = document.getElementsByClassName('nav__bar--crossed'),
        body = document.getElementsByTagName('body')
        ;

    function openMenu(){
        list.className = "nav__inner--open";
        body[0].className = "no-scroll";
        for(var counter = menuIconBars.length-1;counter >= 0; --counter){
            menuIconBars[counter].className = 'nav__bar--crossed';
        }
    }
    function closeMenu(){

        list.className = "nav__inner";
        body[0].className = "";
        for(var counter = menuIconBarsClicked.length-1;counter >= 0; --counter){
            menuIconBarsClicked[counter].className = 'nav__bar';
        }
    }
    function onClickEvent(){
        if(list.className === 'nav__inner'){
            openMenu()
        } else {
            closeMenu();
        }
    }

    menuIcon.addEventListener('click', onClickEvent, false);
    list.addEventListener('click', onClickEvent, false);
});