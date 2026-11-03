# ⚡ Kunal Khapre — AI × Cloud Builder

> **Building My Tech Superpower with AI & Cloud.**

A modern, interactive personal portfolio built for the **AWS Student Builder Challenge 2026 — Build Your Tech Superpower**.

The portfolio showcases my journey as a **B.Tech Computer Technology (Artificial Intelligence) student**, my AWS and AI skills, projects, achievements, and an interactive creative feature called **Tech Superpower Scanner**.

---

## 🌐 Live Portfolio

**Live Website:**  
`https://YOUR-AMPLIFY-DOMAIN`

> Replace the URL above with the final AWS Amplify URL after successful deployment.

---

## ✨ What Makes This Portfolio Different?

This isn't designed as a traditional static resume website.

The portfolio is built around the idea of discovering my **"Tech Superpower."**

### ⚡ Tech Superpower Scanner

Visitors can click:

> **⚡ Discover my hidden superpower**

The interactive scanner performs a visual "Tech DNA" scan and reveals:

### 🚀 BUILDING WITH AI + CLOUD

It then explains the core areas behind my technical identity:

- ☁️ AWS Cloud
- 🧠 Artificial Intelligence
- 🤖 Machine Learning
- ⚡ Generative AI
- 🛠️ Building Projects
- 🎓 Continuous Learning

The feature is designed to be:

- Interactive
- Discoverable
- Responsive
- Lightweight
- Keyboard accessible
- Independent from the main navigation

This creative feature is the signature experience of the portfolio.

---

# 👨‍💻 About Me

I'm **Kunal Khapre**, a B.Tech Computer Technology (Artificial Intelligence) student at **SAGE University Indore**.

My focus is on combining **Artificial Intelligence and Cloud Computing** to build useful real-world solutions.

My learning journey revolves around:

- AWS
- Artificial Intelligence
- Machine Learning
- Generative AI
- Cloud Computing
- Data Science
- Modern developer tools

I believe in:

> **Learning by building.**

As an **AWS Student Builder Group Leader**, I also work toward creating opportunities for students to learn, build and explore cloud technologies.

---

# 🎓 Education

| Detail | Information |
|---|---|
| Degree | B.Tech Computer Technology |
| Specialization | Artificial Intelligence |
| University | SAGE University Indore |
| Expected Graduation | 2028 |
| Current CGPA | 7.9 / 10 |
| Location | Indore, Madhya Pradesh, India |

---

# ☁️ Tech Superpowers

## Cloud

- AWS
- AWS Amplify
- Cloud Fundamentals

## AI / ML

- Artificial Intelligence
- Machine Learning
- Generative AI

## Development

- Python
- Java
- Scala
- Git
- GitHub

## Data

- Data Science
- Data Analysis
- Image Processing

Skill levels are intentionally represented using learning states such as:

- **Building**
- **Working With**
- **Learning**
- **Exploring**

No arbitrary percentage-based skill claims are used.

---

# 🚀 Featured Projects

## 1. SkillForge AI

**AI-powered career roadmap concept**

A concept focused on helping users understand:

- Skills
- Learning paths
- Career direction

### Technologies

- Python
- Machine Learning
- Generative AI
- AWS Cloud Concepts
- Data Science

---

## 2. Personal Portfolio

This portfolio itself is a project focused on:

- AI × Cloud developer identity
- Interactive web experience
- AWS deployment
- Responsive design
- Creative storytelling

### Technologies

- React
- TypeScript
- Tailwind CSS
- AWS Amplify Hosting
- Amazon CloudFront

---

## 3. Machine Learning Internship Projects

Projects developed during my Machine Learning internship at **Auspify Technologies**.

Areas include:

- Python
- Machine Learning
- Data Analysis
- Predictive Modeling

> Detailed project documentation will be added as individual projects are published.

---

## 4. AWS Student Builder Projects

Projects and activities connected with learning, building and AWS community initiatives at **SAGE University Indore**.

Areas include:

- AWS
- AWS Amplify
- Cloud Architecture
- Student Leadership
- Community Building

---

# 🏆 Achievements

### ☁️ AWS Certified AI Practitioner

**Amazon Web Services**

AWS industry certification covering foundational AI, machine learning and AWS AI concepts.

---

### 👥 AWS Student Builder Group Leader

**SAGE University Indore**

Student leadership role focused on encouraging cloud learning, hands-on AWS sessions and builder activities.

---

### 🏅 SAGE Academic Excellence Award 2025–26

Recognition for academic achievement at SAGE University Indore.

---

### 🧠 Advanced Computing Specialization — AI

Specialized academic focus covering modern artificial intelligence and computing concepts.

---

### 💻 SAGE Hackathon Experience

Hands-on hackathon experience involving rapid prototyping and solving practical problems.

---

### 🤖 Machine Learning Internship

**Auspify Technologies**

Industry internship experience focused on machine learning, data preparation and practical ML workflows.

---

# 🛣️ AWS Journey

```text
2025–26
│
├── SAGE Academic Excellence Award
│
2026
│
├── AWS Certified AI Practitioner
│
├── AWS Student Builder Group Leader
│
├── AWS Future Builders Connect
│
└── Building AI + Cloud Projects
│
2028
│
└── Expected B.Tech Graduation
```

---

# ☁️ Built on AWS

The portfolio is deployed using **AWS Amplify Hosting** with Git-connected continuous deployment.

## Architecture

```text
                    ┌──────────────────┐
                    │     GitHub       │
                    │  Source Code     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ AWS Amplify      │
                    │     Hosting      │
                    │   CI/CD + Build  │
                    └────────┬─────────┘
                             │
                             ▼
                 ┌──────────────────────┐
                 │ AWS Managed          │
                 │ Infrastructure       │
                 │                      │
                 │ S3 + CloudFront      │
                 └──────────┬───────────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │ Global Visitors   │
                  │     HTTPS         │
                  └───────────────────┘
```

---

# 🔧 AWS Services

## AWS Amplify Hosting

**Primary hosting and CI/CD service**

The GitHub repository is connected to AWS Amplify.

A push to the configured branch can trigger:

```text
Source Update
     ↓
Dependency Installation
     ↓
Production Build
     ↓
Deployment
     ↓
Live Website
```

---

## Amazon CloudFront

CloudFront is part of the managed global content delivery architecture associated with the Amplify deployment.

It helps deliver static content through AWS edge infrastructure.

---

## Amazon S3

Amplify-managed infrastructure uses S3-backed storage for deployment artifacts.

The portfolio does **not** directly expose or manage AWS credentials from the frontend.

---

# ⚙️ Build Configuration

The project uses a Vite + React production build.

Example Amplify build configuration:

```yaml
version: 1

frontend:
  phases:
    preBuild:
      commands:
        - npm ci

    build:
      commands:
        - npm run build

  artifacts:
    baseDirectory: dist
    files:
      - '**/*'

  cache:
    paths:
      - node_modules/**/*
```

Production build output:

```text
dist/
```

---

# 🧩 Project Structure

```text
portfolio/
│
├── public/
│   ├── images/
│   └── assets/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── assets/
│   └── ...
│
├── amplify.yml
├── package.json
├── README.md
└── ...
```

> The exact structure may vary depending on the current implementation.

---

# 📱 Responsive Design

The portfolio is designed for:

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop

The core navigation and **Tech Superpower Scanner** are designed to remain usable across screen sizes.

---

# ♿ Accessibility

The project aims to provide:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible interactive controls
- Appropriate contrast
- Reduced-motion support
- Responsive layouts

---

# ⚡ Performance Philosophy

The portfolio prioritizes:

- Fast initial loading
- Lightweight animations
- Optimized assets
- Minimal unnecessary dependencies
- No exposed AWS credentials
- No unnecessary API calls
- Responsive performance

---

# 🎯 AWS Student Builder Challenge 2026

This portfolio was created for:

**AWS Student Builder Challenge: Build Your Tech Superpower**

The challenge focuses on building and deploying an AWS-hosted personal portfolio with:

- About Me
- Skills / Tech Superpowers
- Projects / Achievements
- One working creative feature
- GitHub repository
- AWS implementation documentation

The **Tech Superpower Scanner** is the portfolio's main creative feature.

---

# 📊 Challenge Focus

| Judging Area | Portfolio Focus |
|---|---|
| Creativity & Memorability | ⚡ Tech Superpower Scanner |
| AWS Implementation | ☁️ AWS Amplify deployment |
| Communication | 📖 Clear project & AWS documentation |
| Completeness & Usability | 📱 Responsive portfolio + navigation |

---

# 🔐 Security

No AWS access keys, secret keys or credentials are stored in the frontend source code.

AWS deployment is handled through the AWS hosting/deployment environment.

Never commit:

```text
.env
.env.local
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
credentials
API secrets
private keys
```

---

# 📈 Future Improvements

Potential future improvements include:

- More interactive AI experiences
- Additional project case studies
- AWS architecture visualizations
- AI-powered portfolio assistant
- More detailed project demonstrations
- Additional accessibility improvements
- Performance optimization

---

# 🔗 Connect With Me

### GitHub
https://github.com/kunalkhapre0

### Kaggle
https://www.kaggle.com/kunalkhapre02

### LeetCode
https://leetcode.com/u/kunal_khapre/

### LinkedIn
Search for **Kunal Khapre — AI & Cloud Builder**

---

# 💡 Philosophy

> **Don't just learn technology. Build with it.**

My goal is to continuously explore the intersection of:

```text
Artificial Intelligence
        +
Cloud Computing
        +
Software Development
        ↓
Practical Solutions
```

---

# 👨‍💻 Author

**Kunal Khapre**

B.Tech Computer Technology — Artificial Intelligence  
SAGE University Indore  
AWS Certified AI Practitioner  
AWS Student Builder Group Leader

📍 Indore, Madhya Pradesh, India

---

## ⭐ If you find this project interesting

Feel free to explore the portfolio, check out the repository and follow my journey as I continue building with **AI + Cloud**.

**Built with curiosity. Powered by AWS. Driven by learning.**

© 2026 Kunal Khapre
