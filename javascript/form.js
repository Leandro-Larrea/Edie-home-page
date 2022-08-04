	expressions={
		usuario: /^[a-zA-Z0-9._-]{6,20}$/,
		nombre: /^[a-zA-ZÁ-ÿ\s]{6,40}$/, 
		contraseña:/^.{7,12}$/,
		email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 
		telefono:/^[\d-\s]{7,16}$/
	}
const navClasses = document.querySelector(".nav__mobile-container-item-off").classList
const comprobador = (item, x) =>{
	for(i = item.length-1; i>= 0; i--){
		if(item[i] === x){
			return true
		}
		
	}
	return false;
}
const mobileIconsClasses = document.querySelector(".nav__mobile-i").classList

document.querySelector(".nav__mobile-i").addEventListener("click", () =>{
	if (comprobador(navClasses, "nav__mobile-container-item-on") === true){
		navClasses.remove("nav__mobile-container-item-on");
		navClasses.add("nav__mobile-container-item-off");
		mobileIconsClasses.remove("fa-xmark")
		mobileIconsClasses.add("fa-bars")
		
	}
	else{
		mobileIconsClasses.remove("fa-bars")
		mobileIconsClasses.add("fa-xmark")
		navClasses.add("nav__mobile-container-item-on")
		navClasses.remove("nav__mobile-container-item-off")
		
	}

}
)

const emailList = document.querySelector(".footer__email-input").classList
const tester = (input) =>{ if(input.target.name === "email"){
		if(expressions.email.test(input.target.value)){
			emailList.remove("footer__email-input-wrong")
		}else{
			emailList.add("footer__email-input-wrong")
		}
}
}
const takeOut = () =>{
	document.querySelector(".footer__email-input-button").classList.add("footer__email-input-button-fly")}

const takeBack = () =>{
	document.querySelector(".footer__email-input-button").classList.remove("footer__email-input-button-fly")
}
const sizes = () =>{ 
	
	if (window.innerWidth >= 660) {
		navClasses.remove("nav__mobile-container-item-on");
		navClasses.add("nav__mobile-container-item-off");
		mobileIconsClasses.remove("fa-xmark")
		mobileIconsClasses.add("fa-bars")
	}
	}


document.querySelector(".footer__email-input").addEventListener("keyup",tester)
document.querySelector(".footer__email-input").addEventListener("blur",tester);
document.querySelector(".footer__email-input").addEventListener("click",takeOut)
document.querySelector(".footer__email-input").addEventListener("blur",takeBack)
window.addEventListener("resize", sizes);
