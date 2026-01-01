# 🎓 Campus Hero

**Your Ultimate College Companion**

Campus Hero is a mobile-first progressive web application designed to help college students discover campus clubs, connect with mentors, explore career roadmaps, and enhance their professional profiles. Built with modern design principles and a focus on user experience.

---

## ✨ Features

### 🏛️ Club Explorer
- Search and filter through all campus clubs
- Category-based browsing (Technical, Sports, Cultural, Business)
- Detailed club information with join processes
- Direct links to club websites
- Member count visibility

### 🧭 Mentor Connect
- Browse profiles of seniors, alumni, and club leads
- Filter by expertise (Web Dev, AI/ML, Design, etc.)
- Direct LinkedIn and email contact
- Real-time availability indicators
- Rich mentor bios and expertise tags

### 📈 Roadmap Hub
- Year-wise career paths (1st-4th year)
- Domain-specific guidance
- Detailed milestones with timelines
- Curated learning resources
- Interactive progress tracking

### 💻 Coding Resources
- Learning paths for DSA, Web Dev, Mobile, AI/ML
- Practice platform links (LeetCode, Codeforces, HackerRank)
- Categorized resources by difficulty
- External resource integration

### 🌟 Profile Builder
- LinkedIn optimization tips
- GitHub best practices
- Priority-based action items
- Professional development guidance
- Portfolio building strategies

### 🔐 Authentication System
- Firebase-powered authentication
- Role-based access control (Student, Senior/Alumni, Faculty, Admin)
- Protected routes and pages
- Secure user profile management
- Email/password authentication

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Firebase project (for authentication features)

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd campus_nova
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Add your Firebase configuration keys
   - See `FIREBASE_SETUP.md` for detailed instructions

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 Mobile-First Design

Campus Hero is optimized for mobile devices with:
- **Thumb-friendly navigation** - Fixed bottom navigation bar
- **Touch targets** - Minimum 48px for all interactive elements
- **Responsive layouts** - Graceful scaling from mobile to desktop
- **Smooth animations** - Micro-interactions for better UX
- **Modern UI patterns** - Rounded corners, depth shadows, subtle transitions

### Design Highlights
- **Custom animated logo** with gradient shimmer effects
- **Modern button designs** with depth shadows and hover states
- **Premium card components** with glassmorphism effects
- **Staggered entrance animations** for smooth page loads
- **Professional color gradients** using primary and secondary palettes

### Test on Mobile
1. Open DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Select a mobile device (iPhone 12 Pro, Galaxy S20)
4. Navigate through the app

---

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#4f46e5) - Main brand color
- **Secondary**: Purple (#9333ea) - Accent and highlights
- **Accent**: Pink (#ec4899) - Special actions
- **Success**: Emerald (#10b981) - Positive feedback

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Extrabold (800), tight letter-spacing
- **Body**: Regular (400), optimized for readability
- **Gradient text** for emphasis on hero elements

### UI Components

**Buttons:**
- `rounded-xl` corners for modern feel
- Solid colors with depth shadows
- Subtle lift effect on hover (`-translate-y-0.5`)
- Focus rings for accessibility
- Built-in icon spacing with `gap-2`

**Cards:**
- Glassmorphism backgrounds
- Subtle border highlights
- Hover state transformations
- Consistent padding and spacing

**Animations:**
- `slideDown` - Entrance animation for hero text
- `shimmer` - Gradient animation effect
- `fadeIn` - Smooth content reveals
- `slideUp` - Bottom-up entrance animations

---

## 📂 Project Structure

```
campus_nova/
├── app/
│   ├── layout.js              # Root layout with AuthProvider
│   ├── page.js                # Home dashboard with animated hero
│   ├── clubs/page.js          # Club explorer
│   ├── mentors/page.js        # Mentor connect
│   ├── roadmaps/page.js       # Roadmap hub
│   ├── coding/page.js         # Coding resources
│   ├── linkedin-github/page.js# Profile builder
│   ├── profile/page.js        # User profile
│   ├── admin/page.js          # Admin dashboard
│   └── auth/
│       ├── login/page.js      # Login page
│       ├── signup/page.js     # Signup page
│       └── forgot-password/   # Password recovery
├── components/
│   ├── ui/
│   │   ├── Button.jsx         # Modern button component
│   │   ├── Card.jsx           # Reusable card
│   │   └── LoadingSpinner.jsx # Loading states
│   ├── layout/
│   │   └── BottomNav.jsx      # Bottom navigation with auth state
│   ├── clubs/
│   │   └── ClubCard.jsx       # Club card component
│   ├── mentors/
│   │   └── MentorCard.jsx     # Mentor card component
│   └── roadmaps/
│       └── RoadmapCard.jsx    # Roadmap card component
├── lib/
│   ├── firebase.js            # Firebase configuration
│   ├── context/
│   │   └── AuthContext.js     # Authentication context
│   ├── services/
│   │   ├── authService.js     # Auth operations
│   │   └── userService.js     # User data management
│   └── data/
│       ├── clubs.js           # Club data
│       ├── mentors.js         # Mentor data
│       └── roadmaps.js        # Roadmap data
├── public/                    # Static assets
└── scripts/
    └── check-firebase-setup.js# Firebase validation
```

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **State Management**: React Context API
- **Deployment**: Vercel-ready

---

## 🎯 Customization

### Add Your College Data

1. **Clubs**: Edit `lib/data/clubs.js`
   - Update club names, descriptions, categories
   - Add your college's actual clubs with real contact info

2. **Mentors**: Edit `lib/data/mentors.js`
   - Add real mentor profiles from your college
   - Update LinkedIn/email contacts

3. **Roadmaps**: Edit `lib/data/roadmaps.js`
   - Customize based on your college curriculum
   - Add domain-specific paths relevant to your programs

### Branding
- Update colors in `tailwind.config.js`
- Change app name in `app/layout.js` metadata
- Customize animations in `app/globals.css`
- Update Firebase project settings

---

## 🔐 Firebase Setup

See [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md) for detailed setup instructions including:
- Creating a Firebase project
- Enabling authentication
- Setting up Firestore
- Configuring security rules
- Environment variables

---

## 📦 Build for Production

```bash
npm run build
npm start
```

### Deployment
The app is optimized for deployment on:
- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Simple static hosting
- **Firebase Hosting** - Integrated with Firebase services

---

## 🤝 Contributing

This is a college project. Feel free to:
- Add new features
- Improve UI/UX with modern design patterns
- Fix bugs and enhance performance
- Enhance mobile experience
- Add more animations and micro-interactions

---

## 📄 License

MIT License - Feel free to use this for your own college!

---

## 💡 Recent Improvements

- ✅ Modern button redesign with depth shadows and smooth transitions
- ✅ Custom animated hero section with gradient shimmer effects
- ✅ Removed AI-generated template feel with intentional design
- ✅ Improved accessibility with focus states and keyboard navigation
- ✅ Enhanced mobile-first responsive design
- ✅ Firebase authentication integration
- ✅ Role-based access control

## 🔜 Future Enhancements

- [ ] Real-time chat with mentors
- [ ] Event calendar for club activities
- [ ] Push notifications for updates
- [ ] PWA installation support with offline mode
- [ ] Dark mode toggle
- [ ] Multilingual support
- [ ] Advanced search and filtering
- [ ] Analytics dashboard for admins
- [ ] In-app notifications system

---

**Built with ❤️ for college students**

