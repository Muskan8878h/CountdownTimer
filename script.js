const  endDate= "5 October 2025 12:00 AM"
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end =  new Date(endDate);
    const now= new Date();
    const diff= (end-now)/1000; //divide  by 1000 to convert into seconds
    // console.log(end);
    // console.log(now);
    
    if(diff<0) return ; //value will not show in negitive so we use this

    inputs[0].value = Math.floor(diff/3600/24); //convert into days
    inputs[1].value = Math.floor(diff/3600)%24; //convert into hours
    inputs[2].value = Math.floor(diff/60)%60;   //convert into minutes
    inputs[3].value = Math.floor(diff)%60;      //convert into seconds 
}

// initial call
clock();
