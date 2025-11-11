import { SocialIconsComponent } from './components/SocialIconsComponent';
import { LinksComponent } from './components/LinksComponent';
import { ThemeToggleComponent } from './components/ThemeToggleComponent';
import { ViewCounterComponent } from './components/ViewCounterComponent';
import { ShareButtonComponent } from './components/ShareButtonComponent';
import { ClickAnalyticsComponent } from './components/ClickAnalyticsComponent';
import { TiltEffectComponent } from './components/TiltEffectComponent';
import { TypingAnimationComponent } from './components/TypingAnimationComponent';
import { ParticlesComponent } from './components/ParticlesComponent';
import { SkeletonLoadingComponent } from './components/SkeletonLoadingComponent';
import config from '../config/data';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initComponents());
    } else {
      this.initComponents();
    }
  }

  initComponents() {
    // Initialize skeleton loading first
    new SkeletonLoadingComponent();
    
    // Initialize background particles
    new ParticlesComponent();
    
    // Initialize other components after skeleton
    setTimeout(() => {
      new SocialIconsComponent();
      new LinksComponent();
      new ThemeToggleComponent();
     // new ViewCounterComponent();
      new ShareButtonComponent(config);
      new ClickAnalyticsComponent();
      new TiltEffectComponent();
      new TypingAnimationComponent(config);
    }, 1500);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Performance optimization
    this.optimizePerformance();
  }

  optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    }

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--transition-fast', '0.01s');
      document.documentElement.style.setProperty('--transition-base', '0.01s');
      document.documentElement.style.setProperty('--transition-slow', '0.01s');
    }
  }
}

// Initialize app
new App();