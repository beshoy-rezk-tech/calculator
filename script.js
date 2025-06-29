// Global variables
let calculationHistory = [];
let currentExpression = '';
let isCalculating = false;

// DOM elements (will be initialized after DOM loads)
let display;
let expressionDisplay;
let historyPanel;
let historyList;
let themeToggle;

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    display = document.getElementById('display');
    expressionDisplay = document.getElementById('expressionDisplay');
    historyPanel = document.getElementById('historyPanel');
    historyList = document.getElementById('historyList');
    themeToggle = document.getElementById('themeToggle');
    
    // Check if elements exist
    if (!display) {
        console.error('Display element not found!');
        return;
    }
    
    loadTheme();
    loadHistory();
    display.focus();
    
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyboardInput);
    
    // Add click outside to close history
    document.addEventListener('click', function(e) {
        if (historyPanel && !historyPanel.contains(e.target) && !e.target.closest('.btn[onclick*="toggleHistory"]')) {
            historyPanel.classList.remove('show');
        }
    });
    
    // Ensure calculator is focused when clicking anywhere on it
    const calculator = document.querySelector('.calculator');
    if (calculator) {
        calculator.addEventListener('click', function() {
            display.focus();
        });
    }
    
    console.log('Calculator initialized with keyboard support!');
    console.log('Try pressing number keys (0-9) to test keyboard input');
});

// Keyboard input handling
function handleKeyboardInput(e) {
    const key = e.key;
    
    // Debug: Log key presses
    console.log('Key pressed:', key, 'Key code:', e.keyCode);
    
    // Prevent default for calculator keys to avoid conflicts
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Escape', 'Backspace', 'c', 'C', 'h', 'H', '%'].includes(key)) {
        e.preventDefault();
    }
    
    // Add visual feedback for key press
    addKeyPressFeedback(key);
    
    // Test: Always log when a number key is pressed
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
        console.log('Number key detected:', key);
    }
    
    switch(key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            console.log('Appending to display:', key);
            appendToDisplay(key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            console.log('Appending operator to display:', key);
            appendToDisplay(key);
            break;
        case 'Enter':
        case '=':
            console.log('Calculating result');
            calculateResult();
            break;
        case 'Escape':
            console.log('Clearing all');
            clearAll();
            break;
        case 'Backspace':
            console.log('Clearing display');
            clearDisplay();
            break;
        case 'c':
        case 'C':
            console.log('Clearing display (C key)');
            clearDisplay();
            break;
        case 'h':
        case 'H':
            console.log('Toggling history');
            toggleHistory();
            break;
        case '%':
            console.log('Calculating percentage');
            calculatePercentage();
            break;
        default:
            console.log('Key not handled:', key);
            // Ignore other keys
            break;
    }
}

// Add visual feedback for key presses
function addKeyPressFeedback(key) {
    // Find the corresponding button and add visual feedback
    let button = null;
    
    // Map keys to button selectors
    const keyMap = {
        '0': 'button[onclick*="appendToDisplay(\'0\')"]',
        '1': 'button[onclick*="appendToDisplay(\'1\')"]',
        '2': 'button[onclick*="appendToDisplay(\'2\')"]',
        '3': 'button[onclick*="appendToDisplay(\'3\')"]',
        '4': 'button[onclick*="appendToDisplay(\'4\')"]',
        '5': 'button[onclick*="appendToDisplay(\'5\')"]',
        '6': 'button[onclick*="appendToDisplay(\'6\')"]',
        '7': 'button[onclick*="appendToDisplay(\'7\')"]',
        '8': 'button[onclick*="appendToDisplay(\'8\')"]',
        '9': 'button[onclick*="appendToDisplay(\'9\')"]',
        '.': 'button[onclick*="appendToDisplay(\'.\')"]',
        '+': 'button[onclick*="appendToDisplay(\'+\')"]',
        '-': 'button[onclick*="appendToDisplay(\'-\')"]',
        '*': 'button[onclick*="appendToDisplay(\'*\')"]',
        '/': 'button[onclick*="appendToDisplay(\'/\')"]',
        'Enter': 'button[onclick*="calculateResult"]',
        'Escape': 'button[onclick*="clearAll"]',
        'Backspace': 'button[onclick*="clearDisplay"]',
        'C': 'button[onclick*="clearDisplay"]',
        'H': 'button[onclick*="toggleHistory"]',
        '%': 'button[onclick*="calculatePercentage"]'
    };
    
    if (keyMap[key]) {
        button = document.querySelector(keyMap[key]);
    }
    
    if (button) {
        // Add visual feedback
        button.style.transform = 'scale(0.95)';
        button.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        
        // Remove feedback after animation
        setTimeout(() => {
            button.style.transform = '';
            button.style.boxShadow = '';
        }, 150);
    }
}

// Theme management
function toggleTheme() {
    console.log('Theme toggle clicked!');
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    console.log('Current theme:', currentTheme);
    
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('New theme:', newTheme);
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('calculator-theme', newTheme);
    
    // Update theme toggle icon
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
            console.log('Icon updated to:', icon.className);
        } else {
            console.error('Icon element not found in theme toggle');
        }
    } else {
        console.error('Theme toggle element not found');
    }
    
    console.log('Theme changed to:', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('calculator-theme') || 'dark';
    console.log('Loading saved theme:', savedTheme);
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
            console.log('Loaded theme icon:', icon.className);
        }
    }
}

// History management
function addToHistory(expression, result) {
    const historyItem = {
        expression: expression,
        result: result,
        timestamp: new Date().toLocaleTimeString()
    };
    
    calculationHistory.unshift(historyItem);
    
    // Keep only last 10 calculations
    if (calculationHistory.length > 10) {
        calculationHistory = calculationHistory.slice(0, 10);
    }
    
    saveHistory();
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyList.innerHTML = '';
    
    calculationHistory.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div style="font-weight: 500;">${item.expression} = ${item.result}</div>
            <div style="font-size: 12px; color: var(--text-secondary);">${item.timestamp}</div>
        `;
        
        historyItem.addEventListener('click', () => {
            display.value = item.result;
            currentExpression = item.result;
            updateExpressionDisplay();
            historyPanel.classList.remove('show');
        });
        
        historyList.appendChild(historyItem);
    });
}

function clearHistory() {
    calculationHistory = [];
    saveHistory();
    updateHistoryDisplay();
    historyPanel.classList.remove('show');
}

function toggleHistory() {
    historyPanel.classList.toggle('show');
    updateHistoryDisplay();
}

function saveHistory() {
    localStorage.setItem('calculator-history', JSON.stringify(calculationHistory));
}

function loadHistory() {
    const saved = localStorage.getItem('calculator-history');
    if (saved) {
        calculationHistory = JSON.parse(saved);
        updateHistoryDisplay();
    }
}

// Calculator functions
function appendToDisplay(value) {
    if (isCalculating) return;
    
    const currentValue = display.value;
    const operators = ['+', '-', '*', '/'];
    
    // Handle leading zeros properly
    if (value === '0' && currentValue === '') {
        // Allow single zero
        display.value = '0';
    } else if (value === '0' && currentValue === '0') {
        // Don't add multiple leading zeros
        return;
    } else if (value === '.' && currentValue === '0') {
        // Allow decimal after zero
        display.value = '0.';
    } else if (value === '.' && currentValue === '') {
        // Allow decimal at start
        display.value = '0.';
    } else if (operators.includes(value)) {
        // Handle operators
        const lastChar = currentValue.slice(-1);
        if (operators.includes(lastChar)) {
            // Replace last operator
            display.value = currentValue.slice(0, -1) + value;
        } else if (currentValue === '' || currentValue === '0') {
            // Don't allow operator at start (except minus for negative numbers)
            if (value === '-') {
                display.value = '-';
            }
        } else {
            // Add operator
            display.value = currentValue + value;
        }
    } else {
        // Handle numbers and decimal
        if (value === '.' && currentValue.includes('.')) {
            // Don't allow multiple decimals in same number
            return;
        }
        
        // Check if we're starting a new number after an operator
        const lastChar = currentValue.slice(-1);
        if (operators.includes(lastChar) && value === '0') {
            // Allow leading zero after operator
            display.value = currentValue + value;
        } else {
            // Normal number input
            display.value = currentValue + value;
        }
    }
    
    currentExpression = display.value;
    updateExpressionDisplay();
    
    // Add visual feedback
    display.classList.add('calculating');
    setTimeout(() => display.classList.remove('calculating'), 100);
}

function clearDisplay() {
    display.value = '';
    currentExpression = '';
    updateExpressionDisplay();
    isCalculating = false;
}

function clearAll() {
    clearDisplay();
    expressionDisplay.textContent = '';
}

function updateExpressionDisplay() {
    if (currentExpression) {
        expressionDisplay.textContent = currentExpression;
    } else {
        expressionDisplay.textContent = '';
    }
}

function calculateResult() {
    if (isCalculating || !display.value) return;
    
    isCalculating = true;
    const expression = display.value;
    
    try {
        // Add calculating animation
        display.classList.add('calculating');
        
        // Validate expression
        if (!isValidExpression(expression)) {
            throw new Error('Invalid expression');
        }
        
        const result = evaluateExpression(expression);
        
        // Add to history
        addToHistory(expression, result);
        
        // Update display
        display.value = result;
        currentExpression = result;
        updateExpressionDisplay();
        
        // Success animation
        display.style.background = 'rgba(40, 167, 69, 0.2)';
        setTimeout(() => {
            display.style.background = '';
        }, 500);
        
    } catch (error) {
        display.value = 'Error';
        display.style.background = 'rgba(220, 53, 69, 0.2)';
        setTimeout(() => {
            display.style.background = '';
        }, 1000);
    } finally {
        isCalculating = false;
        display.classList.remove('calculating');
    }
}

function calculatePercentage() {
    if (!display.value) return;
    
    try {
        const value = parseFloat(display.value);
        const percentage = value / 100;
        display.value = percentage;
        currentExpression = percentage.toString();
        updateExpressionDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

// Expression validation and evaluation
function isValidExpression(expression) {
    // Check for valid characters
    const validChars = /^[0-9+\-*/.() ]+$/;
    if (!validChars.test(expression)) return false;
    
    // Check for balanced parentheses
    let parentheses = 0;
    for (let char of expression) {
        if (char === '(') parentheses++;
        if (char === ')') parentheses--;
        if (parentheses < 0) return false;
    }
    if (parentheses !== 0) return false;
    
    // Check for consecutive operators (but allow minus for negative numbers)
    const consecutiveOperators = /[+\-*/]{2,}/;
    if (consecutiveOperators.test(expression)) return false;
    
    // Check for operator at start (except minus)
    if (/^[+*/]/.test(expression)) return false;
    
    // Check for operator at end
    if (/[+\-*/]$/.test(expression)) return false;
    
    // Check for valid number formats (including leading zeros)
    const numberPattern = /^-?\d*\.?\d+$/;
    const parts = expression.split(/[+\-*/]/);
    
    for (let part of parts) {
        if (part.trim() === '') continue;
        if (!numberPattern.test(part.trim())) return false;
    }
    
    return true;
}

function evaluateExpression(expression) {
    // Clean up the expression
    let cleanExpression = expression.trim();
    
    // Replace display symbols with JavaScript operators
    cleanExpression = cleanExpression
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');
    
    // Handle leading zeros by converting to proper numbers
    cleanExpression = cleanExpression.replace(/\b0+(\d+)/g, '$1');
    
    console.log('Evaluating expression:', cleanExpression);
    
    try {
        // Evaluate the expression
        const result = Function('"use strict"; return (' + cleanExpression + ')')();
        
        // Handle special cases
        if (!isFinite(result)) {
            throw new Error('Invalid result');
        }
        
        // Format result
        if (Number.isInteger(result)) {
            return result.toString();
        } else {
            return parseFloat(result.toFixed(8)).toString();
        }
    } catch (error) {
        console.error('Evaluation error:', error);
        throw error;
    }
}

// Utility functions
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

// Add some visual feedback for button presses
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add tooltip functionality
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('btn') && e.target.title) {
        // You could add a custom tooltip here if needed
    }
});

// Export functions for global access
window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.clearAll = clearAll;
window.calculateResult = calculateResult;
window.calculatePercentage = calculatePercentage;
window.toggleHistory = toggleHistory;
window.clearHistory = clearHistory;
window.toggleTheme = toggleTheme;

// Test function for debugging
window.testKeyboard = function() {
    console.log('=== KEYBOARD TEST ===');
    console.log('Display element:', display);
    console.log('Display value:', display ? display.value : 'N/A');
    console.log('Current expression:', currentExpression);
    console.log('Is calculating:', isCalculating);
    
    // Test if we can append to display
    if (display) {
        appendToDisplay('5');
        console.log('Test: Appended 5 to display');
        console.log('New display value:', display.value);
    } else {
        console.error('Display element not found!');
    }
    
    // Test if event listener is working
    console.log('Event listeners should be active. Try pressing number keys now.');
    alert('Check the browser console (F12) for debug information. Try pressing number keys (0-9) to test keyboard input.');
}; 