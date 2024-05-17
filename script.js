let dDate = setInterval(function(){
    let date = new Date();
    datetext = date.toTimeString();
    datetext = datetext.split(' ')[0];
    let divDate = document.getElementById("date");
    divDate.innerHTML= datetext;
    }, 1000);