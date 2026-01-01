# 🎓 Campus Hero

**Your Ultimate College Companion**

Campus Hero is a mobile-first progressive web application designed to help college students discover campus clubs, connect with mentors, explore career roadmaps, and enhance their professional profiles.

---

## ✨ Features

### 🏛️ Club Explorer
- Search and filter through all campus clubs
- Category-based browsing (Technical, Sports, Cultural, Business)
- Detailed club information with join processes
- Direct links to club websites

### 🧭 Mentor Connect
- Browse profiles of seniors, alumni, and club leads
- Filter by expertise (Web Dev, AI/ML, Design, etc.)
- Direct LinkedIn and email contact
- Availability indicators

### 📈 Roadmap Hub
- Year-wise career paths (1st-4th year)
- Domain-specific guidance
- Detailed milestones with timelines
- Curated learning resources

### 💻 Coding Resources
- Learning paths for DSA, Web Dev, Mobile, AI/ML
- Practice platform links (LeetCode, Codeforces, etc.)
- Categorized resources

### 🌟 Profile Builder
- LinkedIn optimization tips
- GitHub best practices
- Priority-based action items
- Professional development guidance

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd campus_nova
   ```

2. **Install dependencies** (Already done!)
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 Mobile-First Design

Campus Hero is optimized for mobile devices with:
- **Thumb-friendly navigation** - Fixed bottom navigation bar
- **Touch targets** - Minimum 48px for all interactive elements
- **Responsive layouts** - Graceful scaling from mobile to desktop
- **Smooth animations** - Micro-interactions for better UX

### Test on Mobile
1. Open DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Select a mobile device (iPhone 12 Pro, Galaxy S20)
4. Navigate through the app

---

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#4f46e5)
- **Secondary**: Purple (#9333ea)
- **Accent**: Amber (#f59e0b)
- **Success**: Emerald (#10b981)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight letter-spacing
- **Body**: Regular, optimized for readability

### Components
- Neumorphic shadow effects
- Glassmorphism backgrounds
- Gradient accents
- Smooth transitions

---

## 📂 Project Structure

```
campus_nova/
├── app/
│   ├── layout.js              # Root layout with navigation
│   ├── page.js                # Home dashboard
│   ├── clubs/page.js          # Club explorer
│   ├── mentors/page.js        # Mentor connect
│   ├── roadmaps/page.js       # Roadmap hub
│   ├── coding/page.js         # Coding resources
│   ├── linkedin-github/page.js# Profile builder
│   └── profile/page.js        # User profile
├── components/
│   ├── ui/
│   │   ├── Button.jsx         # Reusable button
│   │   └── Card.jsx           # Reusable card
│   ├── layout/
│   │   └── BottomNav.jsx      # Bottom navigation
│   ├── clubs/
│   │   └── ClubCard.jsx       # Club card component
│   ├── mentors/
│   │   └── MentorCard.jsx     # Mentor card component
│   └── roadmaps/
│       └── RoadmapCard.jsx    # Roadmap card component
├── lib/
│   └── data/
│       ├── clubs.js           # Club data
│       ├── mentors.js         # Mentor data
│       └── roadmaps.js        # Roadmap data
└── public/                    # Static assets
```

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand (optional)
- **Database**: Firebase (for future integration)

---

## 🎯 Customization

### Add Your College Data

1. **Clubs**: Edit `lib/data/clubs.js`
   - Update club names, descriptions, categories
   - Add your college's actual clubs

2. **Mentors**: Edit `lib/data/mentors.js`
   - Add real mentor profiles
   - Update LinkedIn/email contacts

3. **Roadmaps**: Edit `lib/data/roadmaps.js`
   - Customize based on your college curriculum
   - Add domain-specific paths

### Branding
- Update colors in `tailwind.config.js`
- Change app name in `app/layout.js` metadata
- Update logo/icons in `public/` folder

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🤝 Contributing

This is a college project. Feel free to:
- Add new features
- Improve UI/UX
- Fix bugs
- Enhance mobile experience

---

## 📄 License

MIT License - Feel free to use this for your own college!

---

## 💡 Future Enhancements

- [ ] User authentication with Firebase
- [ ] Real-time chat with mentors
- [ ] Event calendar for club activities
- [ ] Push notifications
- [ ] PWA installation support
- [ ] Dark mode toggle
- [ ] Multilingual support

---

**Built with ❤️ for college students**
