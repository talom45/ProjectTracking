console.log ('JavaScript file loaded')

document.addEventListener('DOMContentLoaded',()=>{

    const toggleCheckbox = document.getElementById('menuicon');
    const sidebar = document.querySelector('.sidebar-container');
    const menuLabel =document.getElementById('menu-label');

    toggleCheckbox.addEventListener('change',function(){

sidebar.classList.toggle('hide');//toggle sidebar visibility

        menuLabel.textContent = sidebar.classList.contains('hide')? "PROJECT TRACKER":"MENU";//CHANGE LABEL
    });
//Optional: Intialize sidebar visibility based on screen width

    if(window.innerWidth < 768){

        sidebar.classList.add('hide');
    }
});
