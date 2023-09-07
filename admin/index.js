const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

// Simulated data structure to track event details and registration count
const eventsData = [];

eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    const eventData = {
        name: eventName,
        date: eventDate,
        registeredCount: 0, // Initial count of registered students
    };

    eventsData.push(eventData);

    // Update the UI with the new event
    updateEventList();

    // Clear the form inputs
    eventForm.reset();
});

function updateEventList() {
    eventList.innerHTML = '';

    eventsData.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <strong>Event Name:</strong> <span class="event-name">${event.name}</span><br>
            <strong>Event Date:</strong> <span class="event-date">${event.date}</span><br>
            <strong>Registered Students:</strong> <span class="registered-count">${event.registeredCount}</span>
        `;

        eventList.appendChild(eventItem);
    });
}
