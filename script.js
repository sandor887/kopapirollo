let winStreak = 0;
let playerChoice = '';
let robotChoice = '';

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

function choose(choice) {
    playerChoice = choice;
    robotChoice = ['kő', 'papír', 'olló'][Math.floor(Math.random() * 3)];
    playGame();
}

function playGame() {
    if (!playerChoice) return;
    
    let result = '';
    if (
        (playerChoice === 'kő' && robotChoice === 'olló') ||
        (playerChoice === 'papír' && robotChoice === 'kő') ||
        (playerChoice === 'olló' && robotChoice === 'papír')
    ) {
        result = 'Nyertél!';
        winStreak++;
        document.getElementById('gameResult').style.color = 'green';
    } else if (playerChoice === robotChoice) {
        result = 'Döntetlen!';
        document.getElementById('gameResult').style.color = 'orange';
    } else {
        result = 'Vesztettél!';
        winStreak = 0;
        document.getElementById('gameResult').style.color = 'red';
    }
    document.getElementById('gameResult').innerText = `${result} Te választottál: ${playerChoice}, a robot választott: ${robotChoice}`;
    document.getElementById('winStreak').innerText = `Win Streak: ${winStreak}`;
}

function startGame() {
    const playerName = document.getElementById('playerName').value;
    if (playerName && document.getElementById('accept').checked) {
        document.getElementById('disclaimer').style.color = '#333';
        document.getElementById('disclaimer').innerText = '';
        document.getElementById('playerName').disabled = true;
        document.getElementById('choices').style.display = 'block';
    } else {
        alert('Kérlek, add meg a játékos neved és fogadd el a feltételeket.');
    }
}

function redirectToSource() {
    window.location.href = 'https://github.com/sandor887/kopapirollo.git';
}
