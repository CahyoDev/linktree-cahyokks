# 🚀 Simple Linktree 

elegant Linktree alternative built with Webpack and vanilla JavaScript.

## ✨ Features

### 🎨 **Core Features**
- ✅ Fully responsive design
- ✅ Dark/Light mode with system preference support
- ✅ Smooth animations and transitions
- ✅ Modular component architecture
- ✅ Optimized with Webpack

### 🔥 **Premium Features**

#### 1. **Theme Toggle** 🌓
- Manual theme switcher (Light/Dark/Auto)
- Smooth theme transitions
- Persistent theme selection (localStorage)
- Elegant toggle UI with indicator

#### 2. **View Counter** 📊
- Real-time profile view tracking
- Animated counter with smooth number transitions
- Session-based tracking (one count per visit)
- Beautiful card design with pulse animation

#### 3. **Share Profile** 🔗
- One-click share to WhatsApp, Twitter, Telegram
- Copy link to clipboard with toast notification
- QR Code generator for easy mobile sharing
- Beautiful modal with smooth animations

#### 4. **Click Analytics** 📈
- Track clicks on each link
- Visual progress bars showing click distribution
- Real-time updates with smooth animations
- Persistent data storage (localStorage)

#### 5. **3D Tilt Effect** 🎭
- Interactive 3D card tilting on hover
- Smooth parallax effect
- Dynamic shine overlay
- Premium feel and depth

#### 6. **Typing Animation** ⌨️
- Animated typing effect for bio text
- Multiple text rotation
- Realistic typing/deleting simulation
- Eye-catching entrance

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Watch mode for development
npm run watch
```

## 📁 Project Structure

```
linktree-modern/
├── src/
│   ├── assets/
│   ├── config/
│   │   └── data.js              # Your profile configuration
│   ├── js/
│   │   ├── components/
│   │   │   ├── SocialIconsComponent.js
│   │   │   ├── LinksComponent.js
│   │   │   ├── ThemeToggleComponent.js
│   │   │   ├── ViewCounterComponent.js
│   │   │   ├── ShareButtonComponent.js
│   │   │   ├── ClickAnalyticsComponent.js
│   │   │   ├── TiltEffectComponent.js
│   │   │   └── TypingAnimationComponent.js
│   │   ├── utils/
│   │   │   ├── animations.js
│   │   │   └── theme.js
│   │   └── index.js
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _variables.css
│   │   │   └── _reset.css
│   │   ├── components/
│   │   │   ├── _profile.css
│   │   │   ├── _social.css
│   │   │   ├── _links.css
│   │   │   ├── _spotify.css
│   │   │   └── _features.css
│   │   ├── layout/
│   │   │   ├── _container.css
│   │   │   └── _footer.css
│   │   └── main.css
│   ├── templates/
│   │   └── index.html
│   └── index.js
├── dist/                         # Build output
├── webpack.config.js
├── package.json
└── README.md
```

## ⚙️ Configuration

Edit `src/config/data.js` to customize your profile:

```javascript
module.exports = {
  profile: {
    name: "Your Name",
    username: "username",
    bio: "Your bio",
    avatar: "https://your-avatar-url.png",
    verified: true
  },
  // ... more configuration
};
```

## 🎨 Customization

### Colors
Edit `src/styles/base/_variables.css` to change colors:

```css
:root {
  --accent: #0066ff;  /* Primary accent color */
  --bg-card: #ffffff; /* Card background */
  /* ... more variables */
}
```

### Typing Animation Texts
Edit `src/js/components/TypingAnimationComponent.js`:

```javascript
this.texts = [
  "Your main bio",
  "Second text 💻",
  "Third text 🎥",
  "Fourth text 🚀"
];
```

## 🚀 Deployment

After running `npm run build`, upload the `dist/` folder contents to your hosting:

- **Netlify**: Drag & drop the `dist` folder
- **Vercel**: Connect your repo and set build command to `npm run build`
- **GitHub Pages**: Upload `dist` contents to `gh-pages` branch
- **Any static host**: Upload `dist` folder contents

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Optimized bundle size with Webpack
- Code splitting for better loading
- CSS optimization and minification
- Lazy loading for images
- Smooth 60fps animations

## 📊 Analytics & Tracking

All analytics data is stored locally in `localStorage`:
- View counts are tracked per session
- Click analytics persist across visits
- No external tracking services
- Privacy-friendly

## 🔧 Tech Stack

- **Build Tool**: Webpack 5
- **Languages**: Vanilla JavaScript (ES6+), CSS3, HTML5
- **Icons**: Font Awesome 6
- **Fonts**: System fonts (SF Pro, Segoe UI, Inter)

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 💡 Credits

Created by Caliph
- Website: https://caliph.id
- GitHub: https://github.com/cabrata

---