const log = document.getElementById("log");
const state = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    log.textContent = "";
    state.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function handleDown(e) {
    log.textContent = `Key ${e.key} pressed down`;
    state.textContent = `Key is down`;
}

function handleUp(e) {
    log.textContent = `Key ${e.key} pressed up`;
    state.textContent = `Key is up`;
}
