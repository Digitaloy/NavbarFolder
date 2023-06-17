// navigationbar start
var item=document.querySelectorAll('a')
var Correntlocation=location.href
for(var i=0; i<item.length;i++){
    if(item[i].href==Correntlocation){
        item[i].className=("active")
    }
}
// navigationbar end

function change(){
    var country=document.getElementById("country").value;
    var city=""

    if(country=="Bangladesh"){
        city=["Dhaka","Sylet","Rajshahi"]
         }
    else if(country=="India"){
        city=["Kolkata","Dilli","Maldha"]
         }
    else if(country=="Pakisthan"){
        city=["Multan","Lahore","Islamabad"]
         }
    var string=""
    for(var i=0; i<city.length;i++){
        string=string+"<option>"+city[i]+"</option>" 
    }
    string="<select>"+string+"<select>"
    document.getElementById("select").innerHTML=string 
    
}

//subject
function changes(){
    var country=document.querySelector(".country").value;
    var subject=""

    if(country=="Dhaka University College"){
        subject=["Bangla","Math","English"]
         }
    else if(country=="Rajshahi Degree College"){
        subject=["Bangla","Math","ICT"]
         }
    else if(country=="Bogura Mohila College"){
        subject=["Bangla","Math","Social Science"]
         }
    var book=""
    for(var i=0; i<subject.length;i++){
        book=book+"<option>"+subject[i]+"</option>" 
    }
    book="<select>"+book+"<select>"
    document.querySelector(".select").innerHTML=book 
    
}

// phone number
 var phone=document.querySelector(".phone")
 

  phone.addEventListener('input',function(){
    if(phone.value.length<11 || phone.value.length>11){
        phone.style.color="red"
    }
    else{
        phone.style.color="blue"
    }
})

var OlItem=document.querySelector(".OlItem")
var addBtn=document.querySelector(".add")

addBtn.addEventListener('click', function(){
    var phoneValue=document.querySelector(".phone").value
    var phoneValue=document.createTextNode(phoneValue)
    var li=document.createElement("li")
    OlItem.appendChild(li)
    li.appendChild(phoneValue)
})