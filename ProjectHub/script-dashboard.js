console.log ('JavaScript file loaded')

document.addEventListener('DOMContentLoaded',()=>{

    const toggleCheckbox = document.getElementById('menuicon');
    const sidebar = document.querySelector('.sidebar-container');
    const menuLabel =document.getElementById('menu-label');

    function updateSidebarVisibility(){
        if(window.innerWidth < 768){

    sidebar.classList.add('hide');
            menuLabel.textContent="PROJECT TRACKER";
        } else {
            sidebar.classList.remove('hide');
        
        menuLabel.textContent="MENU";
        }
    }

    toggleCheckbox.addEventListener('change',function(){

sidebar.classList.toggle('hide');//toggle sidebar visibility

        menuLabel.textContent = sidebar.classList.contains('hide')? "PROJECT TRACKER":"MENU";//CHANGE LABEL
    });
//Initialize sidebar visibility based on screen width

    updateSidebarVisibility();

    window.addEventListener(`resize`,updateSidebarVisibility);

});

const allSideMenu = document.querySelectorAll( '.sidebar .sidebar-container li a');

allSideMenu.forEach(item=>{
    const li = item.parentElement;

    item.addEventListener('click',function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active')
    })
});
