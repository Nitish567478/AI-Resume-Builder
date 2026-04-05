# AI Resume Builder 🧠📄

[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-6.0.0-green?logo=vite)](https://vitejs.dev/) [![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)](https://nodejs.org/) [![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?logo=mongodb)](https://mongodb.com/) [![Express](https://img.shields.io/badge/Express-5.2.1-blue?logo=express)](https://expressjs.com/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-blue?logo=tailwind)](https://tailwindcss.com/) [![Google Gemini](https://img.shields.io/badge/Google%20Gemini-orange?logo=google)](https://ai.google.dev/) [![LangChain](https://img.shields.io/badge/LangChain-0.3-blue?logo=langchain)](https://langchain.com/) [![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel)](https://vercel.com/)

## 🚀 Overview

**AI Resume Builder** is a full-stack web application that uses AI (Google Gemini) to help users create ATS-optimized resumes. Build professional resumes with multiple templates, get AI suggestions, analyze job descriptions, score ATS compatibility, and export as PDF.

**Live Demo**: [Coming Soon](https://ai-resume-builder.vercel.app)

## ✨ Features

- **AI-Powered Resume Building**: Gemini-powered chat for tailoring bullets, summaries, skills to job descriptions using LangGraph agents
- **5 Professional Templates**: Classic (traditional), Creative (visual), Executive (corporate), Minimal (clean), Modern (trendy) - with matching PDF exports
- **Advanced ATS Optimization**: Keyword extraction, score calculation (0-100), skill gap identification, checklist with 20+ ATS factors
- **Smart JD Analysis**: Upload/parse job desc, extract keywords, suggest matching bullets/experience phrasing
- **Version Control**: Save unlimited versions, bullet-level diffs, one-click restore
- **PDF Export**: High-quality template-specific PDFs, customizable margins/fonts
- **Google OAuth**: Secure login, no password management
- **Fully Responsive**: Works on desktop/tablet/mobile with TailwindCSS
- **Real-time Everything**: Live preview, ATS scoring, AI chat streaming
- **Data Privacy**: Client-side preview, server stores encrypted JWTs
- **ATS Optimization**: Real-time ATS score, keyword matching, skill gap analysis
- **Job Description Analysis**: Upload JD, get tailored suggestions
- **Resume Versions**: Save multiple versions, compare changes
- **PDF Export**: Downloadable PDF resumes with react-pdf
- **User Authentication**: Google OAuth + JWT
- **Responsive Design**: TailwindCSS, mobile-friendly
- **Real-time Preview**: Live editing with diff views

## 🛠 Tech Stack

| Frontend | Backend | AI/ML | Database | Other |
|----------|---------|-------|----------|-------|
| React 19 | Express | Google Gemini | MongoDB | TailwindCSS |
| Vite | LangChain | LangGraph | Mongoose | react-pdf |
| React Router | Multer | Zod | | react-hot-toast |
| TailwindCSS | CORS | | | React OAuth |

## 📋 Prerequisites

- Node.js 20+
- MongoDB Atlas account (free tier)
- Google Cloud Console account for API keys
- Git (optional)

## 🧪 Quick Start

### 1. Clone & Install

```bash
# Already in project directory
cd client && npm install
cd ../server && npm install
```

### 2. Environment Variables

Create `.env` files:

**server/.env**:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resumebuilder
GOOGLE_AI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
PORT=5000
```

**client/.env** (optional, for prod):
```
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
VITE_API_URL=http://localhost:5000/api
```

### 3. Get API Keys

1. **Google Gemini**: [Google AI Studio](https://aistudio.google.com/app/apikey)
2. **Google OAuth**: [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
3. **MongoDB**: [MongoDB Atlas](https://www.mongodb.com/atlas)

### 4. Run Development Servers

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

**Frontend**: http://localhost:5173  
**Backend**: http://localhost:5000

### 5. Build for Production

```bash
# Client
cd client
npm run build
npm run preview

# Server
cd server
npm start
```

## 📁 Complete File Structure

```
ai-resume-builder/
├── README.md
├── client/
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── templates/
│   │       ├── classic.png
│   │       ├── creative.png
│   │       ├── executive.png
│   │       ├── minimal.png
│   │       └── modern.png
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── components/
│       │   ├── AtsChecklistItem/
│       │   │   └── index.jsx
│       │   ├── AtsScoreCircle/
│       │   │   └── index.jsx
│       │   ├── AtsScorePanel/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── BulletDiffView/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── BulletPointEditor/
│       │   │   └── index.jsx
│       │   ├── CertificationsForm/
│       │   │   └── index.jsx
│       │   ├── ChatInput/
│       │   │   └── index.jsx
│       │   ├── ChatMessage/
│       │   │   └── index.jsx
│       │   ├── ChatPanel/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── DatePicker/
│       │   │   └── index.jsx
│       │   ├── EducationForm/
│       │   │   └── index.jsx
│       │   ├── ExperienceForm/
│       │   │   └── index.jsx
│       │   ├── JobDescriptionInput/
│       │   │   └── index.jsx
│       │   ├── Navbar/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── pdf-templates/
│       │   │   ├── ClassicPdf.jsx
│       │   │   ├── CreativePdf.jsx
│       │   │   ├── ExecutivePdf.jsx
│       │   │   ├── MinimalPdf.jsx
│       │   │   └── ModernPdf.jsx
│       │   ├── PdfDocument/
│       │   │   └── index.jsx
│       │   ├── PersonalInfoForm/
│       │   │   └── index.jsx
│       │   ├── ProgressBar/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── ProjectsForm/
│       │   │   └── index.jsx
│       │   ├── ProtectedRoute/
│       │   │   └── index.jsx
│       │   ├── ResumePreview/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── SectionEditor/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── Sidebar/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── SkillGapCard/
│       │   │   └── index.jsx
│       │   ├── SkillsForm/
│       │   │   └── index.jsx
│       │   ├── SummaryForm/
│       │   │   └── index.jsx
│       │   ├── TemplateCard/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── templates/
│       │   │   ├── ClassicTemplate.jsx
│       │   │   ├── CreativeTemplate.jsx
│       │   │   ├── ExecutiveTemplate.jsx
│       │   │   ├── MinimalTemplate.jsx
│       │   │   └── ModernTemplate.jsx
│       │   ├── TemplateSelector/
│       │   │   └── index.jsx
│       │   ├── VersionCard/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── VersionList/
│       │   │   └── index.jsx
│       │   └── ...
│       ├── constants/
│       │   ├── atsMetrics.js
│       │   ├── sectionTypes.js
│       │   └── templates.js
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── ResumeContext.jsx
│       ├── pages/
│       │   ├── BuilderPage/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── DashboardPage/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── HomePage/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── LandingPage/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── LoginPage/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   ├── TemplatesPage/
│       │   │   ├── index.css
│       │   │   └── index.jsx
│       │   └── VersionsPage/
│       │       └── index.jsx
│       └── services/
│           ├── aiService.js
│           ├── api.js
│           ├── authService.js
│           └── resumeService.js
├── server/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── config/
│       │   ├── agent.tools.js
│       │   ├── db.config.js
│       │   ├── gemini.config.js
│       │   └── google.config.js
│       ├── constants/
│       │   └── prompts.js
│       ├── controllers/
│       │   ├── ai.controller.js
│       │   ├── auth.controller.js
│       │   ├── resume.controller.js
│       │   └── version.controller.js
│       ├── middleware/
│       │   ├── auth.middleware.js
│       │   ├── error.middleware.js
│       │   └── upload.middleware.js
│       ├── models/
│       │   ├── ChatHistory.model.js
│       │   ├── Resume.model.js
│       │   ├── ResumeVersion.model.js
│       │   └── User.model.js
│       ├── routes/
│       │   ├── ai.routes.js
│       │   ├── auth.routes.js
│       │   ├── index.js
│       │   ├── resume.routes.js
│       │   └── version.routes.js
│       ├── services/
│       │   ├── agent.service.js
│       │   ├── ai.service.js
│       │   ├── auth.service.js
│       │   ├── resume.service.js
│       │   └── version.service.js
│       └── utils/
│           ├── formatChecker.js
│           ├── jwt.utils.js
│           ├── keywordAnalyzer.js
│           ├── resumeParser.js
│           └── scoreCalculator.js
```


## 🌐 API Endpoints

**Base URL**: `http://localhost:5000/api`

| Method | Endpoint | Description | Auth | Body/Params |
|--------|----------|-------------|------|-------------|
| `POST` | `/auth/google` | Google OAuth login/callback | No | `{ tokenId }` |
| `POST` | `/auth/logout` | Logout user | Yes | - |
| `GET` | `/resume` | Get all user resumes | Yes | - |
| `POST` | `/resume` | Create new resume | Yes | `{ title, sections[], template }` |
| `PUT` | `/resume/:id` | Update resume | Yes | `{ sections[], template }` |
| `DELETE` | `/resume/:id` | Delete resume | Yes | - |
| `POST` | `/ai/chat` | AI chat for suggestions | Yes | `{ message, context }` |
| `POST` | `/ai/analyze-jd` | Analyze job description | Yes | `{ jdText }` |
| `POST` | `/ai/optimize-bullets` | Optimize bullet points | Yes | `{ bullets[], jdKeywords }` |
| `GET` | `/ai/ats-score/:resumeId` | Get ATS score | Yes | - |
| `POST` | `/version` | Create resume version | Yes | `{ resumeId, changes }` |
| `GET` | `/version/:resumeId` | Get versions | Yes | - |
| `POST` | `/version/:id/restore` | Restore version | Yes | - |


## 📱 Screenshots

| Landing Page | Resume Builder | ATS Score |
|--------------|----------------|-----------|
| ![Landing](client/public/templates/modern.png) | ![Builder](https://via.placeholder.com/800x400?text=Resume+Builder) | ![ATS](https://via.placeholder.com/800x400?text=ATS+Score) |

## 🎨 Templates Preview

- ![Classic](client/public/templates/classic.png)
- ![Creative](client/public/templates/creative.png)
- ![Executive](client/public/templates/executive.png)
- ![Minimal](client/public/templates/minimal.png)
- ![Modern](client/public/templates/modern.png)

## 🤝 Contributing

## ❗ Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection failed | Check MONGODB_URI format, whitelist IP 0.0.0.0/0 in Atlas Network Access |
| Gemini "API key invalid" | Regenerate key at aistudio.google.com, check billing enabled |
| CORS proxy not working | Verify vite.config.js proxy config, restart dev server |
| Google OAuth "redirect_uri_mismatch" | Add http://localhost:5173 to authorized origins in Google Console |
| PDF blank/white | Update @react-pdf/renderer to ^4.3.0, check font loading |
| "Cannot resolve module" | Delete node_modules + package-lock.json, npm install |
| Server not starting | Check port 5000 free, .env loaded (dotenv/config) |
| AI responses slow | Gemini rate limit hit, wait or upgrade quota |

## 🚀 Deployment Guide

### Frontend (Vercel/Netlify)
```
cd client
npm run build
# Deploy dist/ folder
VITE_API_URL=https://your-backend-url.com/api
VITE_GOOGLE_CLIENT_ID=prod-client-id
```

### Backend (Render Railway)
```
cd server
git push heroku main  # or Railway deploy
Build: npm install
Start: npm start
Env: MONGODB_URI (private), GOOGLE_AI_API_KEY, JWT_SECRET
```

## 🔧 Key Components & Services

**Frontend:**
- **BuilderPage**: Core editor - sidebar forms, live preview, ATS panel, chat
- **ChatPanel**: Streaming AI chat with Gemini via LangChain
- **AtsScorePanel**: Visual score circle, keyword match %, checklist
- **BulletDiffView**: Side-by-side original vs optimized bullets
- **PdfDocument**: 5 template-specific PDF renderers

**Backend:**
- **agent.service.js**: LangGraph agent with custom tools (keywordAnalyzer, scoreCalculator)
- **resumeParser.js**: Parse uploaded resumes/PDFs
- **keywordAnalyzer.js**: NLP keyword extraction from JD/resume
- **scoreCalculator.js**: ATS score based on 25+ metrics (format, keywords, length)

## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/ai-enhancements`)
3. Commit changes (`git commit -m 'Add AI feature'`)
4. Push (`git push origin feature/ai-enhancements`)
5. Open Pull Request

## 📄 License

This project is [ISC](LICENSE) licensed.

## 🙌 Acknowledgments

- [Google Gemini](https://ai.google.dev/)
- [LangChain](https://langchain.com/)
- [React PDF](https://react-pdf.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [MongoDB Atlas](https://mongodb.com/atlas)

---

**⭐ Star us on GitHub if this helps!**  
**Made with ❤️ using AI**

