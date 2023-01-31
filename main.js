

function updateclock() {
    var datatime = new Date();
    var  h = datatime.getHours();
    var m = datatime.getMinutes();
    var s = datatime.getSeconds();
  
    var  ampm = document.getElementById('ampm');
    if (h>=12){
        ampm.innerHTML = 'PM';
    }else {
        ampm.innerHTML= 'AM';
    }

    document.getElementById('Hours').innerHTML=h;
    document.getElementById('minutes').innerHTML=m;
    document.getElementById('seconds').innerHTML=s;

    setTimeout (() =>{
        updateclock()

    },1000)
   


   
    
}
updateclock()


