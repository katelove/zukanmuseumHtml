//打開menu 選單
    const menu=document.getElementById('menu-point')
    const menuList=document.getElementById("menu-ul")
    menu.addEventListener('click',openMenu())


function openMenu(){
    // menuList.style.display='block'
    console.log("style",menuList.style.display);
    if(menuList.style.display==='none'){
        menuList.style.display='block'
    }else{
        menuList.style.display='none'
    }
}