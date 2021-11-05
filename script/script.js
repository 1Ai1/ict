const anchors = document.querySelectorAll('a[href^="#"]')
let send = document.querySelector('.callof')
let input = document.querySelector('#client')
let submit = document.querySelector('.submit')
let mass = document.querySelector('.mass')
// send.onclick = function(){
// 	alert("Ваше заявка успешно принята!")
//     window.location.reload();
// }
mass.onclick = function(){
  window.location.reload();
}

function readMore(){
let learn = document.querySelector('.learn');
let more = document.querySelector('.learing');

if(learn.style.display === "none"){
  learn.style.display = "inline";
  more.innerHTML = "Скрыть";
}	
else {
  learn.style.display = "none";
  more.innerHTML = "Learn more";
}
}	

send.onclick = function validateForm(){

	let n = document.querySelector('.name').value;
	let l = document.querySelector('.lastname').value;
	let e = document.querySelector('.email').value;
	let s = document.querySelector('.subject').value;

	if(n==""){
		alert("Please enter your Username");
		return false;
	}
	if(l==""){
		alert("Please enter your Lastname");
		return false;
	}
	if(e==""){
		alert("Please enter your email");
		return false;
	}
    if(s==""){
		alert("Please enter your subject");
	    return false;
	}
	alert("All datas are valid!, send it to the server!")
     
             window.location.reload();
             return true;

}

submit.onclick = function(){
   let m = document.querySelector('.mozg').value;
   if(m==""){
   	alert("Please enter your email here");
   	return false;
 }
   	alert("All datas are valid!, send it to the server!")
     
             window.location.reload();
             return true;
   }

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}