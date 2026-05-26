// Function to handle interactive project accordion dropdowns
function toggleProject(projectId) {
    const details = document.getElementById(projectId);
    
    // Check if the clicked project details box is currently visible
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
