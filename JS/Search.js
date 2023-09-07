// List of events and their corresponding URLs
const events = [
    { name: "Photography", url: "./pages/photography.html" },
    { name: "Dancing", url: "./pages/dance.html" },
    { name: "Singing", url: "./pages/singing.html" },
    { name: "Hackathon", url: "./pages/hackthon.html" },
    { name: "Chess", url: "./pages/chess.html" },
    { name: "Quiz", url: "./pages/quiz.html" },
    { name: "Standup", url: "./pages/standup.html" },
    { name: "Sudoku", url: "./pages/sudoku.html" },
];

// Get references to the search elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const suggestionsList = document.getElementById("suggestions-list");

// Add event listener for the search button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm)
    );

    // Redirect to the first matching event's URL if found
    if (filteredEvents.length > 0) {
        window.location.href = filteredEvents[0].url;
    } else {
        // Display a message if no matching event is found
        alert("No matching event found.");
    }
});

// Add event listener for the search input
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = ""; // Clear the suggestions list

    if (searchTerm.length > 0) {
        const matchingEvents = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm)
        );

        matchingEvents.forEach(event => {
            const listItem = document.createElement("li");
            listItem.textContent = event.name;
            listItem.addEventListener("click", () => {
                window.location.href = event.url;
            });
            suggestionsList.appendChild(listItem);
        });
    } else {
        suggestionsList.innerHTML = ""; // Clear the suggestions list if input is empty
    }
});
