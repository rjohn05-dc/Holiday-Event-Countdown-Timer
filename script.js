document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Able to get the event name and date from the form
    const eventName = document.getElementById('eventName').value;
    const eventDate = new Date(document.getElementById('eventDate').value).getTime();
    // Makes  sure the event name and date are valid
    if (!eventName || isNaN(eventDate)) {
        alert('Please enter a valid event name and date.');
        return;
    }
    
    const countdownContainer = document.getElementById('countdowns');
    if (!countdownContainer) {
        console.log('Countdown container not found.');
        return;
    }
// Creates a new div element with the class countdown-item
// Creates  a new strong element with the text content of the event name
// Creates a new span element with the text content of "Calculating..."
// Creates a new button element with the text content of "Delete"
// Appends the event title, time display, and delete button to the countdown item
    const countdownItem = document.createElement('div');
    countdownItem.classList.add('countdown-item');
    
    const eventTitle = document.createElement('strong');
    eventTitle.textContent = `${eventName} - `;

    const timeDisplay = document.createElement('span');
    timeDisplay.textContent = "Calculating...";
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        clearInterval(interval);
        countdownItem.remove();
    });

    countdownItem.appendChild(eventTitle);
    countdownItem.appendChild(timeDisplay);
    countdownItem.appendChild(deleteButton);
    countdownContainer.appendChild(countdownItem);


    setInterval(updateCountdown, 1000);
    // This function updates the countdown timer  by calculating the time left for the event to happen
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            clearInterval(interval);
            timeDisplay.textContent = 'Event has passed.';
            return;
        }

// This calculates the days, hours, minutes and seconds left for the event to happen
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// The above code is for the countdown timer to display the days, hours, minutes and seconds left for the event to happen
        timeDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
// this code is for the countdown timer to display the days, hours, minutes and seconds left for the event to happen
        const daysLeft = days;
        const hoursLeft = hours- (days * 24);
        const minutesLeft = minutes - (days * 24 * 60) - (hours * 60);
        const secondsLeft = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
     console.log(`${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds`);

    //  Finds the HTML element with the ID days and sets its text content to the value of the daysLeft variable.
    //  The same is done for the hours, minutes, and seconds
        document.getElementById('days').textContent = daysLeft;
        document.getElementById('hours').textContent = hoursLeft;
        document.getElementById('minutes').textContent = minutesLeft;
        document.getElementById('seconds').textContent = secondsLeft;


    }
    updateCountdown();
});
