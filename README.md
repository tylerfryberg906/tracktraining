# TrackTraining 🏃

A comprehensive web application for managing Special Olympics Track and Field training programs.

## Features

### 🏃 Athlete Management
- Create and manage athlete profiles
- Track athlete details (name, age, event, division)
- View individual athlete profiles with performance history
- Edit and delete athlete records

### 📊 Training Session Management
- Log training sessions with detailed metrics
- Track session date, time, duration, and results
- Store session notes and observations
- View session history

### 📈 Performance Analytics
- Visual performance charts and graphs
- Personal best tracking
- Improvement trend analysis
- Event distribution statistics
- Athlete comparison metrics

### 🎯 Event Management
- Support for multiple track and field events:
  - Sprints (100m, 200m, 400m)
  - Distance (800m, 1500m)
  - Jumps (Long Jump, High Jump)
  - Throws (Shot Put, Javelin)
  - Relay races

## Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Utilities**: date-fns, Axios

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tylerfryberg906/tracktraining.git
cd tracktraining
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tracktraining/
├── pages/
│   ├── index.tsx                 # Dashboard
│   ├── _app.tsx                  # Next.js app component
│   ├── athletes/
│   │   ├── index.tsx             # Athletes list
│   │   ├── new.tsx               # Add new athlete
│   │   ├── [id].tsx              # Athlete profile
│   │   └── [id]/edit.tsx          # Edit athlete
│   ├── sessions/
│   │   ├── index.tsx             # Sessions list
│   │   ├── new.tsx               # Log new session
│   │   └── [id].tsx              # Session details
│   └── analytics/
│       └── index.tsx             # Analytics dashboard
├── styles/
│   └── globals.css               # Global styles
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind CSS config
└── next.config.js                # Next.js config
```

## Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/` | Overview and key metrics |
| Athletes | `/athletes` | List all athletes |
| Add Athlete | `/athletes/new` | Create new athlete |
| Athlete Profile | `/athletes/:id` | View athlete details and history |
| Training Sessions | `/sessions` | List all training sessions |
| Log Session | `/sessions/new` | Record new training session |
| Analytics | `/analytics` | Performance analytics and insights |

## Features Roadmap

- [ ] User authentication and role-based access (Coach, Athlete, Admin)
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time data synchronization
- [ ] Photo/video upload for form analysis
- [ ] Generate performance reports (PDF)
- [ ] Mobile app (React Native)
- [ ] Social features (athlete leaderboards)
- [ ] Integration with wearable devices
- [ ] Schedule management for events and training
- [ ] Notifications and reminders

## Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Click "Deploy"
3. Vercel will automatically build and deploy your app

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

Create a `.env.local` file for local development:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email tylerfryberg906@example.com or open an issue on GitHub.

## Acknowledgments

- Special Olympics International for the mission and inspiration
- React and Next.js communities
- All coaches and athletes who use this application

---

**Last Updated**: June 2024
