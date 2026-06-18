(() => {
  const timeDisplay = document.getElementById('time-display');
  if (!timeDisplay) return;

  function updateClock() {
    const now = new Date();
    timeDisplay.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  updateClock();
  setInterval(updateClock, 10000);
})();
