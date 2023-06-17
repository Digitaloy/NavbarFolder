// navigationbar start
var item=document.querySelectorAll('a')
var Correntlocation=location.href
for(var i=0; i<item.length;i++){
    if(item[i].href==Correntlocation){
        item[i].className=("active")
    }
}

// navigationbar end


// marksheet form validation start
var bangla= document.getElementById("bangla");
var english= document.getElementById("english");
var physics= document.getElementById("physics");
var math= document.getElementById("math");
var add_button= document.getElementById("add_button");
var input= document.querySelectorAll(".inputs")

for (var i=0; i<input.length;i++){
    input[i].addEventListener('input',function(){
    for(var k=0; k<input.length;k++ ){
    if(input[k].value>100){
    input[k].style.background="red";
    }
    else{
    input[k].style.background="none";
           }
          }
        })
       }

add_button.addEventListener('click', function(){

      if(bangla.value==""||english.value ==""||physics.value==""||math.value=="" ){
        alert("vai input den");
             }

      else{
        
        var Newbangla=parseInt(bangla.value);
        var Newenglish=parseInt(english.value);
        var Newphysics=parseInt(physics.value);  
        var Newmath=parseInt(math.value); 
       
        var Newtotal_mark=document.getElementById("total_mark")
        var total_mark=Newbangla+Newenglish+Newphysics+Newmath
        Newtotal_mark.innerHTML=total_mark
        Newtotal_mark.style.background="blue"


        var Newaverage=document.getElementById("average")
        var average=total_mark/4
        Newaverage.innerHTML=average
        Newaverage.style.background="blue"


        var Newgrade=document.getElementById("grade")
        if(average>80 && average<100){
          Newgrade.innerHTML="A+"
          Newgrade.style.background="green"

        }
        else if(average>60 && average<79){
          Newgrade.innerHTML="A"
          Newgrade.style.background="green"

        }
        else if(average>40 && average<59){
          Newgrade.innerHTML="B"
          Newgrade.style.background="green"

        } 
        else {
          Newgrade.innerHTML="F"
          Newgrade.style.background="red"
         }    

        var Newp_f=document.getElementById("p_f")

        if(average>39){
          Newp_f.innerHTML="you are passed"
          Newp_f.style.background="green"
        }
        
       else{
        Newp_f.innerHTML="you are failed"
        Newp_f.style.background="red"
       }
      }
  });  
  // marksheet form validation end

  
   // practic
   var inputShow=document.querySelector(".input");
   var displayShow=document.querySelector(".dd");
   
   function show(){
     displayShow.innerHTML=this.value;
   }
inputShow.addEventListener("keyup",show)
    // practic