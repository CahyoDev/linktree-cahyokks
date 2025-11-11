export class ViewCounterComponent {
  constructor() {
    this.storageKey = 'profile_views';
    this.sessionKey = 'current_session';
    this.init();
  }

  init() {
    this.incrementViews();
    this.createCounter();
    this.animateCounter();
  }

  incrementViews() {
    const currentSession = sessionStorage.getItem(this.sessionKey);
    
    if (!currentSession) {
      let views = parseInt(localStorage.getItem(this.storageKey) || '0');
      views++;
      localStorage.setItem(this.storageKey, views.toString());
      sessionStorage.setItem(this.sessionKey, 'active');
    }
  }

  getViews() {
    return parseInt(localStorage.getItem(this.storageKey) || '0');
  }

  createCounter() {
    const counter = document.createElement('div');
    counter.className = 'view-counter';
    counter.innerHTML = `
      <div class="counter-card">
        <i class="fas fa-eye counter-icon"></i>
        <div class="counter-content">
          <div class="counter-number" data-target="${this.getViews()}">0</div>
          <div class="counter-label">Profile Views</div>
        </div>
      </div>
    `;
    
    const profileHeader = document.querySelector('.profile-header');
    profileHeader.insertAdjacentElement('afterend', counter);
  }

  animateCounter() {
    const counterNumber = document.querySelector('.counter-number');
    const target = parseInt(counterNumber.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counterNumber.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counterNumber.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  }
}