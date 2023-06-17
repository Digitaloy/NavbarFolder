// navbar start
var item=document.querySelectorAll('a')
var Correntlocation=location.href
for(var i=0; i<item.length;i++){
    if(item[i].href==Correntlocation){
        item[i].className=("active")
    }
}
var runText=document.getElementById("runText")
var text='COMPLETE DEVELOPMENT FOR FULL STACK DEVELOPMENT ROADMAP TUTORIAL'
setInterval(fun, 100);
index = 0;

function fun(){
    runText.innerHTML=text.slice(0,index++) 
    if(index>text.length){
        index=0;
    }
    
};
// navbar end

// formlist start
var title =document.querySelector('#title')
var author =document.querySelector('#author')
var year =document.querySelector('#year')
var Booklist =document.querySelector('#Book-list')
var btn=document.querySelector('.btn')

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(title.value=="" && author.value=="" && year.value==""){
        alert('hi')
    }
    else{
        var newrow=document.createElement('tr')
        var newtitle=document.createElement('th');
        newtitle.style.color=('red');
        newtitle.style.fontSize=('1.3rem');
        newtitle.innerHTML=title.value
        Booklist.appendChild(newrow);
        newrow.appendChild(newtitle)

        var newauthor=document.createElement('th')
        newauthor.style.fontSize=('1.3rem');
        newauthor.innerHTML=author.value
        newrow.appendChild(newauthor)

        var newyear=document.createElement('th')
        newyear.style.fontSize=('1.3rem');
        newyear.innerHTML=year.value
        newrow.appendChild(newyear);

    }

})
// formlist end