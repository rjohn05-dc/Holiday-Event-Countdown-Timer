let intervalID; // Declare a variable to store the interval ID
let days;
let hours;
let minutes;
let seconds;


const FutureTime =document.getElementByID('date').value;
console.log(FutureTime);

function updateTime(){
    const currentTime = new Date(); // Gets the current time
    const timeDifference=FutureTime-currentTime; // Difference in MILLISECONDS between the target date and the current date


    if(timeDifference<=0){
        document.getElementById('countdown').innerHTML='The countdown has ended!'; // If the countdown has ended, display this message
        clearInterval(intervalID); 
        return;

    }
    // Convert the time difference to seconds, minutes, hours, and days
        const days=Math.floor(timeDifference/(1000*60*60*24));
        const hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60));
        const minutes=Math.floor((timeDifference%(1000*60*60))/(1000*60));
        const seconds=Math.floor((timeDifference%(1000*60))/1000);


// Display the countdown timer
document.getElementById('timer').innerHTML=`Days:${days},Hours:${hours},Minutes:${minutes},Seconds:${seconds}`;

const intervalID=setInterval(updateTime,1000); // Update the countdown timer every second

updateTime(); // Call the function to start the countdown
}