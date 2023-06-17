// navigationbar start
var item=document.querySelectorAll('a')
var Correntlocation=location.href
for(var i=0; i<item.length;i++){
    if(item[i].href==Correntlocation){
        item[i].className=("active")
    }
}
// navigationbar end