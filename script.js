// Global variables
let bookings = [];
let selectedTimeBlocks = [];
let selectedSystem = 'pipe';
let currentTab = 'tracker';
let equipmentRelations = [];
let isDeleteMode = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEquipmentRows();
    setupEventListeners();
    showTab('tracker');
    loadRelationsFromJSON();
});

function loadRelationsFromJSON() {
    fetch('relations.json')
        .then(response => response.json())
        .then(data => {
            equipmentRelations = data;
            updateRelationsGrid();
            updateRelationsStats();
        })
        .catch(error => console.error('Error loading relations:', error));
}

// Rest of the JavaScript functions...