
    document.getElementById('eventForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const eventName = document.getElementById('eventName').value;
        const eventDate = new Date(document.getElementById('eventDate').value).getTime();
        
        if (!eventName || isNaN(eventDate)) return;
        
        const countdownContainer = document.getElementById('countdowns');
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

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;

            if (timeLeft <= 0) {
                timeDisplay.textContent = 'Happy Holidays!';
                clearInterval(interval);
            } else {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                timeDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }

        updateCountdown();
        const interval = setInterval(updateCountdown,1000);
    })
