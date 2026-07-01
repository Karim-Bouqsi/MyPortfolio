import { placeicon, logoBK, logoArimayi, profilePhoto } from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFlask,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiOpenai,
  SiTailwindcss,
  SiDocker,
  SiPytorch,
  SiTensorflow,
  SiJupyter,
  SiFastapi,
  SiNodedotjs,
  SiLinux,
  SiAngular,
  SiSqlite,
} from "react-icons/si";

import { DiCss3 } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink = "";
export const repoLink = "https://github.com/Karim-Bouqsi/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/karim-bouqsi/";

export const navLinks = [
  {
    id: "skills",
    title: "Compétences & Expérience",
  },
  {
    id: "education",
    title: "Formation",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contactMe",
    title: "Contact",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: placeicon,
    title: "I.U.T de Montreuil",
    degree: "BUT Informatique",
    duration: "Septembre 2023 - Juillet 2026",
    content1: "Parcours Réalisation d'applications : conception, développement, validation",
    content2: "",
  },
  {
    id: "education-2",
    icon: placeicon,
    title: "Université Paris 13",
    degree: "Licence de remise à niveau en Informatique",
    duration: "Septembre 2022 - Juillet 2023",
    content1: "Remise à niveau en informatique fondamentale et algorithmique",
  },
  {
    id: "education-3",
    icon: placeicon,
    title: "Lycée Voillaume",
    degree: "Baccalauréat — Mention Bien",
    duration: "Septembre 2018 - Juillet 2021",
    content1: "Spécialités : Mathématiques, Numérique et Sciences de l'Informatique",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Langages de programmation",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-3",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-4",
        icon: SiMysql,
        name: "SQL",
      },
      {
        id: "pl-5",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "pl-6",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-7",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks & IA",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "f-2",
        icon: SiFastapi,
        name: "FastAPI",
      },
      {
        id: "f-3",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiPytorch,
        name: "PyTorch",
      },
      {
        id: "f-7",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
      {
        id: "f-8",
        icon: SiOpenai,
        name: "LangChain",
      },
      {
        id: "f-9",
        icon: SiOpenai,
        name: "LangGraph",
      },
      {
        id: "f-10",
        icon: SiOpenai,
        name: "N8N",
      },
    ],
  },
  {
    title: "Outils & DevOps",
    items: [
      {
        id: "t-1",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-2",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-3",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-4",
        icon: SiLinux,
        name: "Linux",
      },
      {
        id: "t-5",
        icon: SiJupyter,
        name: "Jupyter",
      },
      {
        id: "t-6",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-7",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "BK Consulting",
    logo: logoBK,
    link: "",
    positions: [
      {
        title: "Stagiaire — Automatisation des processus internes",
        duration: "Mars 2026 - Août 2026",
        content: [
          {
            text: "Développement de scripts Python pour automatiser des tâches internes et améliorer l'efficacité opérationnelle.",
            link: "",
          },
          {
            text: "Conception de reportings automatisés et optimisation de workflows pour réduire les tâches répétitives.",
            link: "",
          },
          {
            text: "Documentation des outils développés et formalisation de bonnes pratiques techniques.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "AriMayi",
    logo: logoArimayi,
    link: "",
    positions: [
      {
        title: "Stagiaire — Développement IA, API & Automatisation",
        duration: "Avril 2025 - Juillet 2025",
        content: [
          {
            text: "Développement d'API pour un système de matching entre CV et offres d'emploi.",
            link: "",
          },
          {
            text: "Amélioration d'un modèle IA pour analyser la pertinence entre profils candidats et offres.",
            link: "",
          },
          {
            text: "Analyse automatique de textes pour extraire et structurer les données issues de CV et d'offres.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "ClipAI — Découpage intelligent de vidéos",
    github: "",
    link: "",
    image: placeicon,
    content:
      "Analyse audio d'une vidéo pour détecter les changements de sujet et générer automatiquement des extraits courts. Intégration de modèles de transcription et de segmentation pour automatiser le pipeline de traitement.",
    stack: [
      {
        id: "proj1-icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj1-icon-2",
        icon: SiOpenai,
        name: "LLM",
      },
    ],
  },
  {
    id: "project-2",
    title: "TeacherAI — Tuteur Mathématiques Socratique",
    github: "",
    link: "",
    image: placeicon,
    content:
      "Tuteur IA en mathématiques qui guide l'élève par questions plutôt que par réponses directes, inspiré de la méthode Socratique. Fonctionne entièrement en local, sans connexion ni coût d'API.",
    stack: [
      {
        id: "proj2-icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj2-icon-2",
        icon: SiOpenai,
        name: "LangChain",
      },
      {
        id: "proj2-icon-3",
        icon: SiOpenai,
        name: "Ollama",
      },
    ],
  },
  {
    id: "project-5",
    title: "Stage Manager — Gestion des stages IUT Montreuil",
    github: "",
    link: "",
    image: placeicon,
    content:
      "Application métier développée pour l'IUT de Montreuil pour digitaliser la gestion des stages étudiants. Tableau de bord centralisé, gestion des conventions, notifications automatisées, authentification multi-rôles (étudiant, tuteur, admin), export PDF et conformité RGPD.",
    stack: [
      {
        id: "proj5-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj5-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj5-icon-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj5-icon-4",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
    ],
  },
  {
    id: "project-4",
    title: "IUT Café — Application de gestion de café",
    github: "",
    link: "",
    image: placeicon,
    content:
      "Site web permettant aux étudiants de l'IUT de Montreuil de commander et réserver des produits en ligne pour les récupérer directement à la cafétéria.",
    stack: [
      {
        id: "proj4-icon-1",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "proj4-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj4-icon-3",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "proj4-icon-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj4-icon-5",
        icon: SiSqlite,
        name: "SQLite",
      },
      {
        id: "proj4-icon-6",
        icon: SiDocker,
        name: "Docker",
      },
    ],
  },
  {
    id: "project-3",
    title: "Bot d'automatisation — Recherche d'emploi",
    github: "",
    link: "",
    image: placeicon,
    content:
      "Bot capable de récupérer automatiquement de nouvelles offres d'emploi selon des critères définis, avec alertes en temps réel. Automatisation de la veille, du filtrage et de la transmission d'informations.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 02",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 02",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 02",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Projets",
    value: "3+",
  },
  {
    id: "stats-2",
    title: "Issues ouvertes",
    value: "1+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "1+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/karim-bouqsi/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Karim-Bouqsi",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:pro.karimb@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Karim BOUQSI",
  githubUsername: "Karim-Bouqsi",
  tagLine:
    "BUT Informatique @ IUT Montreuil | IA & Data | Futur Master INSA",
  intro:
    "Étudiant en 3e année de BUT Informatique, passionné par l'IA, la data et l'automatisation. Je cherche une alternance pour contribuer à des projets concrets mêlant intelligence artificielle et résolution de problèmes.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// GitHub repos to show open source contributions from.
// Each entry is either "owner/repo" or ["owner/repo", "public-display-name"].
export const includedRepos = [];
