// You'd fetch the event data from the server and populate the select options
// For simplicity, let's assume event data is hard-coded here
const eventData = [
    { id: 1, name: "Event 1", date: "2023-08-25" },
    { id: 2, name: "Event 2", date: "2023-08-28" },
    // ...
];

const registrationForm = document.getElementById('registrationForm');
const selectedEvent = document.getElementById('selectedEvent');

// Populate the select options with event data
eventData.forEach(event => {
    const option = document.createElement('option');
    option.value = event.id;
    option.textContent = `${event.name} - ${event.date}`;
    selectedEvent.appendChild(option);
});

registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const selectedEventId = document.getElementById('selectedEvent').value;

    // Simulate sending registration data to the server
    // In a real scenario, you'd use AJAX/fetch to send this data to the server

    // Clear the form inputs
    registrationForm.reset();
    alert('Registration successful!');
});
