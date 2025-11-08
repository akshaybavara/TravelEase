// Minimal JS for chat toggle, theme, and mobile menu
document.addEventListener('DOMContentLoaded', function(){
  const openChat = document.getElementById('openChat');
  const chatWindow = document.getElementById('chatWindow');
  const closeChat = document.getElementById('closeChat');
  const chatToggle = document.getElementById('chatToggle');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  const themeToggle = document.getElementById('themeToggle');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const logoClick = document.getElementById('logoClick');
  mobileMenuBtn.textContent = mobileNav.classList.contains('hidden') ? '☰' : '✖️';

if (logoClick) {
  logoClick.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

  if(openChat && chatWindow){
    openChat.addEventListener('click', ()=> chatWindow.classList.remove('hidden'));
  }
  if(closeChat && chatWindow){
    closeChat.addEventListener('click', ()=> chatWindow.classList.add('hidden'));
  }
  if(chatForm){
    chatForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const v = chatInput.value.trim();
      if(!v) return;
      const usr = document.createElement('div');
      usr.className = 'text-sm text-right text-sky-600';
      usr.textContent = v;
      chatBody.appendChild(usr);
      chatInput.value = '';
      // Mock assistant reply
      setTimeout(()=>{
        const bot = document.createElement('div');
        bot.className = 'text-sm text-slate-600';
        bot.textContent = 'Thanks! Our agent will respond soon. (This is a mock reply)';
        chatBody.appendChild(bot);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 700);
    });
  }

  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const html = document.documentElement;
      if(html.classList.contains('dark')){
        html.classList.remove('dark');
        themeToggle.textContent = 'Dark';
      } else {
        html.classList.add('dark');
        themeToggle.textContent = 'Light';
      }
    });
  }
});
