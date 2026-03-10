function abrirMenu(){

let menu = document.getElementById("menu-lateral");

if(menu.style.left === "0px"){
menu.style.left = "-200px";
}else{
menu.style.left = "0px";
}

}
