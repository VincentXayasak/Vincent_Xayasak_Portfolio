(() => {
  const timeDisplay = document.getElementById('time-display');
  const screenTitle = document.getElementById('screen-title');
  const screenLoadingLabel = document.getElementById('screen-loading-label');
  const screenBar = document.getElementById('screen-bar');
  const screenBarFill = document.getElementById('screen-bar-fill');
  const screenBody = document.getElementById('screen-body');
  const screenCursor = document.getElementById('screen-cursor');

  let currentSection = 'code';
  let booted = false;

  const sections = {
    home: {
      label: 'Home',
      title: 'Vincent Xayasak Portfolio',
      loading: true,
      body: '',
    },
    projects: {
      label: 'Projects',
      title: 'Projects',
      body: '▸ Portfolio Website\n▸ Mobile App UI\n▸ Game Jam 2024\n▸ Open Source Tools',
    },
    art: {
      label: 'Art & Design',
      title: 'Art & Design',
      body: '▸ Illustrations\n▸ Brand Identity\n▸ UI Mockups\n▸ Sketchbook',
    },
    code: {
      label: 'Development',
      title: 'Development',
      body: '▸ React / TypeScript\n▸ Python\n▸ Creative Coding\n▸ WebGL Experiments',
    },
    settings: {
      label: 'Settings',
      title: 'Settings',
      body: '▸ Theme: Cozy Lo-Fi\n▸ Ambient: On\n▸ Volume: 72%\n▸ Night Mode: Auto',
    },
  };

  const cursorClass = {
    projects: 'on-projects',
    art: 'on-art',
    code: 'on-code',
    settings: 'on-settings',
  };

  function updateClock() {
    const now = new Date();
    timeDisplay.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  updateClock();
  setInterval(updateClock, 10000);

  function syncNavButtons(section) {
    document.querySelectorAll('.dock-btn').forEach((el) => {
      el.classList.toggle('active', el.dataset.section === section);
    });
  }

  function applyScreenState(section) {
    const data = sections[section] || sections.home;

    screenTitle.textContent = data.title;

    if (data.loading && !booted) {
      screenLoadingLabel.hidden = false;
      screenBar.hidden = false;
      screenBody.hidden = true;
      screenBody.textContent = '';
    } else {
      screenLoadingLabel.hidden = true;
      screenBar.hidden = true;
      screenBody.hidden = false;
      screenBody.textContent = data.body;
    }

    screenCursor.className = 'screen-cursor';
    if (section !== 'home') {
      screenCursor.classList.add(cursorClass[section] || 'on-code');
    }
  }

  function setSection(section) {
    if (section === 'home') return;
    currentSection = section;
    booted = true;
    syncNavButtons(section);
    applyScreenState(section);
  }

  document.querySelectorAll('.dock-btn').forEach((btn) => {
    btn.addEventListener('click', () => setSection(btn.dataset.section));
  });

  syncNavButtons('code');
  screenTitle.textContent = sections.home.title;
  screenLoadingLabel.hidden = false;
  screenBar.hidden = false;
  screenBody.hidden = true;
  screenBarFill.style.width = '72%';
  screenCursor.className = 'screen-cursor on-code';
})();
