// navigationbar start
var item=document.querySelectorAll('a')
var Correntlocation=location.href
for(var i=0; i<item.length;i++){
    if(item[i].href==Correntlocation){
        item[i].className=("active")
    }
}

// navigationbar end


var Font=document.getElementById("Font");
var a4page=document.getElementById("a4page");
var backgroundcolor=document.getElementById("backgroundcolor");
var textcolor=document.getElementById("textcolor");
var fontstyle=document.getElementById("fontstyle");
var text_transform=document.getElementById("text_transform");
var text_align=document.getElementById("text_align");
var under=document.getElementById("under");


Font.addEventListener('change', function(e){
    a4page.style.fontSize=e.target.value;
})

backgroundcolor.addEventListener('change', function(e){
    a4page.style.background=e.target.value;
})

textcolor.addEventListener('change', function(e){
    a4page.style.color=e.target.value;
})

fontstyle.addEventListener('change', function(e){
    a4page.style.fontStyle=e.target.value;
})

text_transform.addEventListener('change', function(e){
    a4page.style.textTransform=e.target.value;
})

text_align.addEventListener('change', function(e){
    a4page.style.textAlign=e.target.value;
})

under.addEventListener('click', function(e){
    a4page.classList.toggle("under")=e.target.value;
})
// navigationbar end
// practic
var inputShow=document.querySelector(".input");
var displayShow=document.getElementById("a4page");

function show(){
  displayShow.innerHTML=this.value;
}
inputShow.addEventListener("keyup",show);
 // practic
 var title = document.querySelector('h1');
var text='My name is Md Ahad Shaikh My website very easy to learn here.';

setInterval(fun, 100);
index = 0;

function fun(){
    title.innerHTML=text.slice(0,index++) 
    if(index>text.length){
        index=0;
    }
    
};