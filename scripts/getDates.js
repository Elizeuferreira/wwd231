document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Update the current year in the footer
    document.getElementById("currentYear").textContent = currentYear;

    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);
    // Format the last modified date
    var formattedLastModifiedDate = lastModifiedDate.toLocaleDateString("en-US", { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        timeZoneName: 'short' 
    });
    // Update the last modified date in the second paragraph of the footer
    document.getElementById("lastModified").textContent = "Last modified: " + formattedLastModifiedDate;
});
