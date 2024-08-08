function addAttendance() {
    // Get the value of the student name input field
    const name = document.getElementById('student-name').value;
    
    // Get the value of the attendance status select field
    const status = document.getElementById('attendance-status').value;

    // Check if the name field is empty
    if (name === '') {
        alert('Please enter the student name.'); // Show an alert if the name is empty
        return; // Exit the function if the name is empty
    }

    // Get the unordered list (ul) element where attendance records will be displayed
    const attendanceList = document.getElementById('list');

    // Create a new list item (li) element
    const newEntry = document.createElement('li');
    
    // Set the text content of the new list item to include the student's name and attendance status
    newEntry.textContent = `${name}: ${status}`;

    // Append the new list item to the attendance list (ul)
    attendanceList.appendChild(newEntry);

    // Clear the input fields by setting their values to empty strings or default values
    document.getElementById('student-name').value = ''; // Clear the student name input field
    document.getElementById('attendance-status').value = 'Present'; // Reset the attendance status to 'Present'
}
