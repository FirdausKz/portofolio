# Modern Portfolio Landing Page

A stunning, modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion, featuring a dark theme with smooth animations and responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Discord Integration**: Live Discord status display using Lanyard API
- **Interactive Timeline**: Animated timeline showing your journey
- **Skills Showcase**: Beautiful grid layout for your technical skills
- **Project Portfolio**: Card-based project showcase with hover effects
- **Social Links**: Modern contact section with social media integration
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment Ready**: Vercel optimized

## 📁 Project Structure

```
portofolio/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   └── ui/
│       ├── dither.tsx       # Animated background component
│       ├── lanyard.tsx      # Discord status component
│       ├── rotating-text.tsx # Text rotation animation
│       └── timeline.tsx     # Interactive timeline component
├── lib/
│   └── utils.ts             # Utility functions
└── [config files]
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following in `app/page.tsx`:

```tsx
// Replace with your information
<h1>Your Name</h1>
<p>I'm a passionate developer</p>

// Update the rotating text array
<RotatingText
  texts={["Machine Learning Enthusiast", "Web Developer"]}
/>
```

### 2. Discord Integration

Replace the Discord user ID in the Lanyard component:

```tsx
<Lanyard 
  userId="your-discord-user-id" 
  className="max-w-sm w-full"
/>
```

To get your Discord user ID:
1. Enable Developer Mode in Discord Settings > Advanced
2. Right-click your profile and select "Copy User ID"

### 3. Timeline Content

Customize the `timelineData` array with your own journey:

```tsx
const timelineData: TimelineEntry[] = [
  {
    title: 'Your Milestone',
    content: <p>Description of your achievement</p>,
    date: '2024',
    icon: <YourIcon className="w-6 h-6 text-white" />
  },
  // Add more entries...
]
```

### 4. Skills Section

Update the `skills` array with your technologies:

```tsx
const skills = [
  { 
    name: 'Your Skill', 
    icon: <YourIcon className="w-8 h-8" />, 
    color: 'from-blue-500 to-purple-500' 
  },
  // Add more skills...
]
```

### 5. Projects

Modify the `projects` array:

```tsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://your-project.com',
    image: '/path/to/image.jpg'
  },
  // Add more projects...
]
```

### 6. Social Links

Update the `socialLinks` array with your profiles:

```tsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    href: 'https://github.com/yourusername',
    color: 'hover:bg-gray-700'
  },
  // Update other links...
]
```

### 7. Colors and Styling

The design uses a purple-to-pink gradient theme. To change colors, update the Tailwind classes throughout the components:

- Primary gradient: `from-purple-600 to-pink-600`
- Text gradient: `from-purple-400 to-pink-400`
- Accent colors: `text-purple-400`, `border-purple-500`

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: `sm:` (640px)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large Desktop: `xl:` (1280px)

## 🎭 Animation Details

- **Page Load**: Staggered animations for hero section elements
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover states on cards and buttons
- **Background**: Animated dither pattern with floating gradients
- **Text**: Rotating text animation with smooth transitions

## 🔧 Performance Optimizations

- **Next.js 14**: Latest features for optimal performance
- **Tree Shaking**: Only necessary code is bundled
- **Lazy Loading**: Components load as needed
- **Optimized Images**: Next.js Image component for performance
- **CSS-in-JS**: Tailwind for minimal CSS bundle

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js and Tailwind CSS**
