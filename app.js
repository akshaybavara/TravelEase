// TravelEase UI - Unified JS for Chat, Theme, and Mobile Menu
document.addEventListener('DOMContentLoaded', function() {

  // Elements
  const openChat = document.getElementById('openChat');
  const chatWindow = document.getElementById('chatWindow');
  const closeChat = document.getElementById('closeChat');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  const themeToggle = document.getElementById('themeToggle');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const logoClick = document.getElementById('logoClick');

  // ✅ Logo Click → Go Home
  if (logoClick) {
    logoClick.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // ✅ Mobile Menu Toggle (☰ ↔ ✖)
  if (mobileMenuBtn && mobileNav) {
    // Initialize icon state
    mobileMenuBtn.textContent = mobileNav.classList.contains('hidden') ? '☰' : '✖️';

    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      // Update icon when menu toggles
      if (mobileNav.classList.contains('hidden')) {
        mobileMenuBtn.textContent = '☰';
      } else {
        mobileMenuBtn.textContent = '✖️';
      }
    });
  }

  // ✅ Chat Open / Close
  if (openChat && chatWindow) {
    openChat.addEventListener('click', () => {
      chatWindow.classList.remove('hidden');
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }

  if (closeChat && chatWindow) {
    closeChat.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });
  }

  // ✅ Chat Message Handling
  if (chatForm && chatBody && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = chatInput.value.trim();
      if (!msg) return;

      // User message
      const userMsg = document.createElement('div');
      userMsg.className = 'text-sm text-right text-sky-600 my-1';
      userMsg.textContent = msg;
      chatBody.appendChild(userMsg);
      chatInput.value = '';

      // Auto-scroll
      chatBody.scrollTop = chatBody.scrollHeight;

      // Mock reply
      setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'text-sm text-slate-600 my-1';
        botMsg.textContent = 'Thanks! Our agent will respond soon. (Mock reply)';
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 800);
    });
  }

  // ✅ Theme Toggle (Light ↔ Dark)
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      themeToggle.textContent = isDark ? 'Light' : 'Dark';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Load stored theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      themeToggle.textContent = 'Light';
    }
  }

});
