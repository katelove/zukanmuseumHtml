//打開menu 選單
    const menu=document.getElementById('menu-point')
    const menuList=document.getElementById("menu-ul")
    console.log('menu:',menu);
    console.log('menuList:',menuList);
    menu.addEventListener('click',openMenu)

function openMenu(){
    // menuList.style.display='block'
    console.log("click style",menuList);
    if(menuList.style.display ==='none'){
        menuList.style.display ='block'
    }else{
        menuList.style.display ='none'
    }
}