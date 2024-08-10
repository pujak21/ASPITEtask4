function addAttendance() {
    
    const name = document.getElementById('student-name').value;
    const status = document.getElementById('attendance-status').value;

    if (name === '') {
        alert('Please enter the student name.'); 
        return; 
    }

    const attendanceList = document.getElementById('list');
    const newEntry = document.createElement('li');
    
    newEntry.textContent = `${name}: ${status}`;
    attendanceList.appendChild(newEntry);
    document.getElementById('student-name').value = ''; 
    document.getElementById('attendance-status').value = 'Present'; 
}
