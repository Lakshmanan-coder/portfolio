import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "JR. M.E.R.N stack developer",
    location: "Nyx Wolves - Chennai, India",
    description:
      "Learned HTML, CSS, JS, and React in 6 months, landed a job as a MERN stack developer. Confidence soared working on real projects, kept up with colleagues despite being self-taught.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Sr.Full stack developer",
    location: "Softlets PVT LTD - Chennai, India (Remote)",
    description:
      "Leveled up on backend with Node.js, GraphQL, and MongoDB. Focused on optimizing existing React websites in the firm.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Software Development Engineer -Level II",
    location: "Vacayoo Solution - Kuala Terengganu,Malaysia (Remote and Onsite)",
    description:
      "Evolved from leading small teams to handling client discussions, framing timelines, and collaborating with the team to deliver quality results on schedule.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express", 
  "MongoDB",
  "Git",
  "Tailwind", 
  "Redux",
  "GraphQL",
  "Apollo",   
  "PostgreSQL",
  "Prisma",
  "Framer Motion",
] as const;
