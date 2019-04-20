var navBtn = document.getElementById("navBtn");

navBtn.onclick = function(){
	return showMenus();
}

function showMenus(){
    document.querySelector(".menuItems").classList.toggle("active");   
}

console.log("test");