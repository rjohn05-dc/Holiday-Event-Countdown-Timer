let timers=[]; // Array to store the timers


// Set the target date and time
const targetDate = new Date()

// Function to calculate and display the countdown timer
function updateCountdown(){
    const now=new Date(); // Get the current date and time
    const timeDifference=targetDate-now; // Difference in MILLISECONDS between the target date and the current date
    const name=document.getElementById('name').value; // Get the name of the timer
    const date= new Date(document.getElementById('date').value); // Get the date of the timer
    
    if (timeDifference <= 0) {
        document.getElementById('activeTimers').innerHTML = 'FimbleWinter is here!';
        clearInterval(intervalID); // Stop the countdown timer when the target date is reached
        return;
    }

    timers.push({ name, date }); // Add the timer to the array

// Calculate the number of days, hours, minutes and seconds remaining
const days=Math.floor(timeDifference/(1000*60*60*24));
const hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((timeDifference%(1000*60*60))/(1000*60));
const seconds=Math.floor((timeDifference%(1000*60))/1000);

// Display the countdown timer
document.getElementById('activeTimers').innerHTML=`Days:${days},Hours:${hours},Minutes:${minutes},Seconds:${seconds}`;
}

// Start the countdown timer
const intervalID=setInterval(updateCountdown,1000); // Update the countdown timer every second

// Call the function once immediately to avoid initial delay



