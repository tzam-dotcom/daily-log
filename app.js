document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const jobDescription = document.getElementById('jobDescription').value;
    const jobDate = document.getElementById('jobDate').value;
    
    if (jobDescription && jobDate) {
        const jobList = document.getElementById('jobList');
        const listItem = document.createElement('li');
        
        listItem.textContent = `${jobDescription} - ${jobDate}`;
        jobList.appendChild(listItem);
        
        // Clear the input fields
        document.getElementById('jobDescription').value = '';
        document.getElementById('jobDate').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});