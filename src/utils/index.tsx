export const skillList = [
  {
    id: 1,
    skillHeading: "Web Design",
    skillSubHeading: "Advanced design techniques",
    text: "UI/UX using Figma and another effects with Photoshop as well...",
  },
  {
    id: 2,
    skillHeading: "Javascript",
    skillSubHeading: "Main web programming language today",
    text: "There are many frameworks, like React and etc, but they all derive from a larger language, which is JS, which will be used in many websites by me.",
  },
  {
    id: 3,
    skillHeading: "HTML5 + CSS3",
    skillSubHeading: "Full use of architecture and styling",
    text: "Beautiful style, with great architecture html5 and Search Engine Optimization (SEO)...",
  },
  {
    id: 4,
    skillHeading: "React.js",
    skillSubHeading: "The most used framework today",
    text: "Best way to use components and make awesome frontend.",
  },
  {
    id: 5,
    skillHeading: "React Native",
    skillSubHeading: "Popular mobile framework",
    text: "Create native apps for Android and iOS using React, React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
  },
  {
    id: 6,
    skillHeading: "Next.js",
    skillSubHeading: "The React Framework for Production",
    text: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
  },
  {
    id: 7,
    skillHeading: "Typescript",
    skillSubHeading: "JavaScript with syntax for types.",
    text: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    id: 8,
    skillHeading: "Node.js",
    skillSubHeading: "JS runtime built on Chrome's V8 JavaScript engine.",
    text: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
  },
  {
    id: 9,
    skillHeading: "Solidy",
    skillSubHeading: "Best language for smart contract.",
    text: "Best way to implement smart contracts on various blockchain platforms, mainly Ethereum.",
  },
  {
    id: 10,
    skillHeading: "Git",
    skillSubHeading: "Best way to version control system",
    text: "Git is a version control system used for tracking changes in computer files. It is generally used for source code management in software development.",
  },
  {
    id: 11,
    skillHeading: "Styled Components",
    skillSubHeading: "Awesome way to style components in React",
    text: "Styled components are a CSS-in-JS tool that bridges the gap between components and styling, offering numerous features to get you up and running in styling components in a functional and reusable way.",
  },
  {
    id: 12,
    skillHeading: "EmotionCss",
    skillSubHeading: "Ohter way to style components in React",
    text: "Emotion is a library designed for writing css styles with JavaScript.",
  },
  {
    id: 13,
    skillHeading: "Java",
    skillSubHeading: "The mother of object orientation",
    text: "Java is an object-oriented programming language developed in the 1990s by a team of programmers led by James Gosling at Sun Microsystems.",
  },
  {
    id: 14,
    skillHeading: "C",
    skillSubHeading: "The mother of languages",
    text: "C is a general-purpose, structured, imperative, procedural, compiled programming language standardized by the International Organization for Standardization, created in 1972 by Dennis Ritchie.",
  },
  {
    id: 15,
    skillHeading: "Data Structure",
    skillSubHeading: "The foundation of computing and programming",
    text: "A data structure, in computer science, is a collection of both values ​​and operations. It is a concrete implementation of an abstract data type or a basic or primitive data type.",
  },
  {
    id: 16,
    skillHeading: "Others Skill",
    skillSubHeading: "All Basic and incremental skill",
    text: "In addition to the hard skill, I have skills in soft skills, project management, creativity, communication, teamwork, and I am open to learning with others.",
  },
];

export const MAP_INFO = {
  latitude: -8.913780239768586,
  longitude: 13.230998780986711,
  zoom: 11,
  url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.721047526959!2d13.250215239550778!3d-8.816078099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f1808cedc2a1%3A0x29023f5354a9096f!2sCoca%20Cola%20Rangel%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1653088117618!5m2!1spt-PT!2sao",
  style: {
    border: 0,
    borderRadius: "0rem",
  },
  width: "100%",
  height: "100%",
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

export const scrollDown = (ref: any) => {
  window.scrollTo({
    top: ref.current?.offsetTop,
    behavior: "smooth",
  });
};
