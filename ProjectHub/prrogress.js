console.log('js loaded')
const tasks = [
    { name: "Task 1: Initial Planning", status: "completed" },
    { name: "Task 2: Development", status: "in-progress" },
    { name: "Task 3: Testing", status: "pending" },
    { name: "Task 4: Deployment", status: "pending" },
    { name: "Task 5: Deployment", status: "completed" },
    { name: "Task 6: Deployment", status: "pending" },
    { name: "Task 7: Deployment", status: "pending" },
    { name: "Task 4: Deployment", status: "completed" },
];

const progressFill = document.querySelector('.progress-fill');
const progressText = document.getElementById('progress-text');
const taskList = document.querySelector('.task-list');

function updateProgress() {
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    const totalTasks = tasks.length;
    const progressPercentage = (completedTasks / totalTasks) * 100;

    // Animate the progress bar
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `${progressPercentage.toFixed(0)}% Completed`;

    // Update task list
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('task-item', task.status);
        li.innerHTML = `
            <i class="fa fa-${task.status === "completed" ? "check-circle" : task.status === "in-progress" ? "clock" : "times-circle"}"></i>
            <span>${task.name}</span>
            <span class="status">${task.status.charAt(0).toUpperCase() + task.status.slice(1)}</span>
        `;
        taskList.appendChild(li);
    });
}

function renderChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                label: 'Task Status',
                data: [
                    tasks.filter(task => task.status === 'completed').length,
                    tasks.filter(task => task.status === 'in-progress').length,
                    tasks.filter(task => task.status === 'pending').length,
                ],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.6)', // Completed
                    'rgba(255, 193, 7, 0.6)', // In Progress
                    'rgba(244, 67, 54, 0.6)'  // Pending
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)', // Completed
                    'rgba(255, 193, 7, 1)', // In Progress
                    'rgba(244, 67, 54, 1)'  // Pending
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize progress and chart
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    renderChart();
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to update progress bars and text
    function updateProgress() {
        const progressBars = document.querySelectorAll('.progress-bar .progress-fill');
        const progressTexts = document.querySelectorAll('#progress-text');

        progressBars.forEach((bar, index) => {
            const progress = Math.floor(Math.random() * 100); // Replace with actual progress calculation
            bar.style.width = `${progress}%`;
            progressTexts[index].textContent = `${progress}% Completed`;
        });
    }

    // Call updateProgress on page load
    updateProgress();

    // Function to update task list progress
    function updateTaskListProgress() {
        const taskLists = document.querySelectorAll('.main-bottom .task-list');
        taskLists.forEach(taskList => {
            const tasks = taskList.querySelectorAll('.task-item');
            let completedTasks = 0;
            tasks.forEach(task => {
                if (task.classList.contains('completed')) {
                    completedTasks++;
                }
            });
            const progress = Math.floor((completedTasks / tasks.length) * 100);
            const progressBar = taskList.previousElementSibling.querySelector('.progress-bar .progress-fill');
            const progressText = taskList.previousElementSibling.querySelector('#progress-text');
            if (progressBar && progressText) {
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `${progress}% Completed`;
            }
        });
    }

    // Call updateTaskListProgress on page load
    updateTaskListProgress();
});