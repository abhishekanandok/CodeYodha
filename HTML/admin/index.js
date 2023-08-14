// Get sidebar links and main content
const sidebarLinks = document.querySelectorAll('.admin-sidebar a');
const mainContent = document.querySelector('.admin-main');

// Function to update main content
function updateMainContent(content) {
    mainContent.innerHTML = content;
}

// Event listener for sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = this.getAttribute('href').substring(1); // Remove '#' from href
        if (section === 'dashboard') {
            updateMainContent(`
                <h2>Dashboard</h2>
                <p>Welcome to the admin panel. Here, you can manage events and registrations.</p>
            `);
        } else if (section === 'events') {
            updateMainContent(`
                <h2>Events</h2>
                <p>Manage your events here.</p>
            `);
        } else if (section === 'registrations') {
            updateMainContent(`
                <h2>Registrations</h2>
                <p>View and manage event registrations.</p>
            `);
        } else if (section === 'settings') {
            updateMainContent(`
                <h2>Settings</h2>
                <p>Configure admin panel settings.</p>
            `);
        }
    });
});
