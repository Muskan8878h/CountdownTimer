const  endDate= "5 October 2025 12:00 AM"
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end =  new Date(endDate);
    const now= new Date();
    const diff= (end-now)/1000; //divide  by 1000 to convert into seconds
    // console.log(end);
    // console.log(now);
}