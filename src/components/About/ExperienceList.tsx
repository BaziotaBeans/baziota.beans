import { ExperienceItem } from "./ExperienceItem";

const experiences = [
  {
    title: "SOFTWARE DEVELOPER (FULL STACK)",
    company: "Fisgar",
    location: "Brazil",
    period: "2025 - Present",
    description: [
      "Currently at Fisgar, I'm working on the platform: https://fisgar.com.br/ developing, maintaining, and adding new features.",
      "Working with frontend technologies such as Next.js, React, Jest, React Testing Library, WebSocket, among other technologies in the TypeScript and React ecosystem focused on web development.",
      "Backend development using Spring Boot, Node.js with Express framework, and Firebase Functions for serverless functions and API development.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Jest",
      "React Testing Library",
      "WebSocket",
      "Spring Boot",
      "Node.js",
      "Express",
      "Firebase Functions",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "CI/CD",
    ],
    website: "https://fisgar.com.br/",
  },
  {
    title: "SOFTWARE DEVELOPER (FRONT-END)",
    company: "Cherry IT",
    location: "Brazil",
    period: "2024 - 2025",
    description: [
      "I was responsible for the development and technical leadership of the frontend team for the public investment management system of the state of Ceará.",
      "Implementation of reusable components and custom libraries to optimize performance and consistency across projects.",
      "Collaboration with design and back-end teams to integrate APIs and ensure product functionality and usability.",
      "Following best practices and new technologies to keep projects updated and efficient.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "SOFTWARE DEVELOPER (FRONT-END)",
    company: "Sparktech",
    location: "Angola",
    period: "2021 - 2025",
    description: [
      "Participated in the development of the Ventus platform and led the frontend development team for the Cinemax platform.",
      "Implementation of features and reusable components with React and TypeScript.",
      "Creation of cross-platform mobile applications with React Native.",
      "Integration of RESTful APIs for backend communication.",
      "Performance and SEO optimization in Next.js applications.",
      "Collaboration with design and backend teams to ensure consistency and efficiency of projects.",
      "Participation in code reviews and mentoring for junior developers.",
      "Used Electron for some Desktop applications.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Electron",
      "JavaScript",
      "RESTful APIs",
      "Docker",
      "CI/CD",
      "Storybook",
      "Jest",
      "React Testing Library",
      "React Native Testing Library",
    ],
  },
  {
    title: "SOFTWARE DEVELOPER",
    company: "Ramos Soft",
    location: "Angola",
    period: "2017 - 2020",
    description: [
      "Programming logic instructor in C.",
      "Developed Desktop applications with Java (Java SE).",
      "JDBC and MySQL in corporate Desktop applications.",
      "Developed Web applications with Java (JSP), Tomcat server, and MySQL.",
      "Developed Web applications with Java (JSF + Primefaces), Wildfly server, and PostgreSQL.",
      "Developed some APIs using Spring Boot, PostgreSQL, and deployment.",
    ],
    technologies: [
      "Java",
      "Java SE",
      "JSP",
      "JSF",
      "Primefaces",
      "Spring Boot",
      "JDBC",
      "MySQL",
      "PostgreSQL",
      "Tomcat",
      "Wildfly",
      "C",
    ],
  },
];

export function ExperienceList() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-neutral-200 mb-8 font-array">
        EXPERIENCE
      </h2>
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </ol>
    </section>
  );
}
