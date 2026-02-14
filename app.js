// State management
let step = "loading";
let selectedColor = null;
let selectedNumber = null;
let fortunes = [];
let jokes = [];
const JOKE_WEIGHT = 0.6; // 60% jokes, 40% fortunes

// DOM element references
let statusEl, retryBtn;
let stepPickColor, stepPickNumber, stepReveal;
let colorButtons;
let numberButtonsContainer;
let revealTitle, revealText, revealSelection, playAgainBtn, revealCard;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    initializeElements();
    loadData();
});

function initializeElements() {
    // Status area
    statusEl = document.getElementById("status");
    
    // Step sections
    stepPickColor = document.getElementById("step-pick-color");
    stepPickNumber = document.getElementById("step-pick-number");
    stepReveal = document.getElementById("step-reveal");
    
    // Buttons
    colorButtons = document.querySelectorAll(".color-btn");
    numberButtonsContainer = document.getElementById("number-buttons-container");
    playAgainBtn = document.getElementById("play-again-btn");
    
    // Reveal elements
    revealTitle = document.getElementById("reveal-title");
    revealText = document.getElementById("reveal-text");
    revealSelection = document.getElementById("reveal-selection");
    revealCard = document.querySelector(".reveal-card");
    
    // Attach event listeners
    colorButtons.forEach(btn => {
        btn.addEventListener("click", handleColorClick);
    });
    
    playAgainBtn.addEventListener("click", handleReset);
}

async function loadData() {
    step = "loading";
    statusEl.textContent = "Loading fun stuff...";
    statusEl.className = "";
    
    try {
        const [fortunesResponse, jokesResponse] = await Promise.all([
            fetch("./data/fortunes.json"),
            fetch("./data/jokes.json")
        ]);
        
        if (!fortunesResponse.ok || !jokesResponse.ok) {
            throw new Error("Failed to load data files");
        }
        
        const fortunesData = await fortunesResponse.json();
        const jokesData = await jokesResponse.json();
        
        fortunes = fortunesData.fortunes || [];
        jokes = jokesData.jokes || [];
        
        if (fortunes.length === 0 || jokes.length === 0) {
            throw new Error("Data files are empty");
        }
        
        // Clear status and show color picker
        statusEl.textContent = "";
        statusEl.className = "";
        setStep("pickColor");
        
    } catch (error) {
        console.error("Error loading data:", error);
        showError();
    }
}

function showError() {
    statusEl.className = "error";
    statusEl.innerHTML = "Could not load the fun messages. Please try again.<br>";
    
    // Create retry button if it doesn't exist
    if (!retryBtn) {
        retryBtn = document.createElement("button");
        retryBtn.textContent = "Retry";
        retryBtn.addEventListener("click", loadData);
        statusEl.appendChild(retryBtn);
    } else {
        statusEl.appendChild(retryBtn);
    }
}

function setStep(newStep) {
    step = newStep;
    
    // Hide all steps
    stepPickColor.classList.add("hidden");
    stepPickNumber.classList.add("hidden");
    stepReveal.classList.add("hidden");
    
    // Remove fade-in class from all
    stepPickColor.classList.remove("fade-in");
    stepPickNumber.classList.remove("fade-in");
    stepReveal.classList.remove("fade-in");
    
    // Show the active step
    switch (newStep) {
        case "pickColor":
            stepPickColor.classList.remove("hidden");
            stepPickColor.classList.add("fade-in");
            break;
        case "pickNumber":
            stepPickNumber.classList.remove("hidden");
            stepPickNumber.classList.add("fade-in");
            break;
        case "reveal":
            stepReveal.classList.remove("hidden");
            stepReveal.classList.add("fade-in");
            // Focus on reveal title for screen readers
            revealTitle.focus();
            break;
    }
}

function generateRandomNumbers(count, min, max) {
    // Generate an array of unique random numbers
    const numbers = [];
    const available = [];
    
    // Create array of all possible numbers
    for (let i = min; i <= max; i++) {
        available.push(i);
    }
    
    // Randomly select count numbers
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        numbers.push(available[randomIndex]);
        available.splice(randomIndex, 1);
    }
    
    // Sort for better UX
    return numbers.sort((a, b) => a - b);
}

function createNumberButtons(numbers) {
    // Clear existing buttons
    numberButtonsContainer.innerHTML = "";
    
    // Create buttons for each number
    numbers.forEach(num => {
        const button = document.createElement("button");
        button.className = "number-btn";
        button.setAttribute("data-number", num);
        button.setAttribute("aria-label", `Pick number ${num}`);
        button.textContent = num;
        button.addEventListener("click", handleNumberClick);
        numberButtonsContainer.appendChild(button);
    });
}

function handleColorClick(event) {
    const color = event.target.getAttribute("data-color");
    const validColors = ["red", "green", "yellow", "blue"];
    
    if (!validColors.includes(color)) {
        return;
    }
    
    selectedColor = color;
    selectedNumber = null;
    
    // Generate 4 random numbers from 1-8
    const randomNumbers = generateRandomNumbers(4, 1, 8);
    
    // Create and display the number buttons
    createNumberButtons(randomNumbers);
    
    setStep("pickNumber");
}

function handleNumberClick(event) {
    const numberStr = event.target.getAttribute("data-number");
    const number = parseInt(numberStr, 10);
    
    if (isNaN(number) || number < 1 || number > 8) {
        return;
    }
    
    selectedNumber = number;
    handleReveal();
}

function handleReveal() {
    if (!selectedColor || !selectedNumber || fortunes.length === 0 || jokes.length === 0) {
        return;
    }
    
    // Weighted random selection
    const roll = Math.random();
    let type, message, list;
    
    if (roll < JOKE_WEIGHT) {
        type = "Silly joke";
        list = jokes;
    } else {
        type = "Fortune";
        list = fortunes;
    }
    
    // Pick random item from chosen list
    const randomIndex = Math.floor(Math.random() * list.length);
    message = list[randomIndex];
    
    // Update reveal UI
    revealTitle.textContent = type;
    revealText.textContent = message;
    revealSelection.textContent = `You picked ${selectedColor} and number ${selectedNumber}`;
    
    // Update card border color based on selected color
    revealCard.className = "reveal-card";
    revealCard.classList.add(`${selectedColor}-border`);
    
    setStep("reveal");
}

function handleReset() {
    selectedColor = null;
    selectedNumber = null;
    revealCard.className = "reveal-card";
    setStep("pickColor");
}
