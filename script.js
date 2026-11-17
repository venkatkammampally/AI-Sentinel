function startProcessing() {
    const fileInput = document.getElementById("videoUpload");
    if (!fileInput.files.length) {
        alert("Please upload a video first!");
        return;
    }

    addAlert("Video uploaded. AI processing started...");
    
    // Simulated AI outputs (replace with backend data later)
    setTimeout(() => {
        updateStats(23, 1, 2);
        addAlert("⚠ Overcrowding detected in Zone A");
        addAlert("🚨 Suspicious activity detected");
    }, 3000);
}

function updateStats(people, threats, violations) {
    document.getElementById("peopleCount").innerText = people;
    document.getElementById("threatCount").innerText = threats;
    document.getElementById("violationCount").innerText = violations;
}

function addAlert(message) {
    const alertList = document.getElementById("alertList");
    const li = document.createElement("li");
    li.textContent = message;
    alertList.appendChild(li);
}
