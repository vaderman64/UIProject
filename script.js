window.onload = function() {
    // Show only the layout on load
    showSection('dashboard');
  };
  
function showSection(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function toggleDropdown(dropdownId) {
    // Toggle display of the dropdown menu
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
