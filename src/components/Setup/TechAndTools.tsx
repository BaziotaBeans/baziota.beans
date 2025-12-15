"use client";

import Link from "next/link";
import tools from "@/data/tools.json";
import techs from "@/data/techs.json";
import { getTechIcon } from "../TechIcons";
import {
  SiFigma,
  SiAdobephotoshop,
  SiJetbrains,
  SiDocker,
  SiPostman,
  SiInsomnia,
  SiOpenai,
  SiGoogle,
  SiNotion,
  SiJira,
  SiSlack,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { PiCursorClickLight } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";

// Categorias de ferramentas
const toolCategories = {
  Design: ["Figma", "Adobe Photoshop"],
  Development: ["Cursor", "VS Code", "JetBrains IDEs", "Docker", "Postman", "Insomnia"],
  "AI & Assistive Tools": ["Cloude AI", "ChatGPT", "DeepSeek", "Gemini"],
  "Workflow & Utilities": ["Notion", "Jira", "Slack"],
};

// Mapeamento de ícones para ferramentas
const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Figma: SiFigma,
  "Adobe Photoshop": SiAdobephotoshop,
  Cursor: PiCursorClickLight,
  "VS Code": VscCode,
  "JetBrains IDEs": SiJetbrains,
  Docker: SiDocker,
  Postman: SiPostman,
  Insomnia: SiInsomnia,
  "Cloude AI": SiOpenai,
  ChatGPT: SiOpenai,
  DeepSeek: FaCode,
  Gemini: SiGoogle,
  Notion: SiNotion,
  Jira: SiJira,
  Slack: SiSlack,
};

function ToolCard({ name, url }: { name: string; url: string }) {
  const IconComponent = toolIcons[name] || FaCode;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3 border border-gray-800 rounded-lg transition-all duration-500 hover:border-green-400/20 hover:bg-gray-900"
    >
      <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 group-hover:bg-gray-700 transition-colors">
        <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors" />
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">
        {name}
      </span>
    </Link>
  );
}

function TechCard({ name, url }: { name: string; url?: string }) {
  const IconComponent = getTechIcon(name);

  const content = (
    <div className="group flex items-center gap-3 p-3 border border-gray-800 rounded-lg transition-all duration-500 hover:border-green-400/20 hover:bg-gray-900">
      <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 group-hover:bg-gray-700 transition-colors">
        {IconComponent ? (
          <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors" />
        ) : (
          <FaCode className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors" />
        )}
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">
        {name}
      </span>
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}

export function TechAndTools() {
  // Organizar ferramentas por categoria
  const categorizedTools = Object.entries(toolCategories).map(([category, toolNames]) => ({
    category,
    tools: tools.data.filter((tool) => toolNames.includes(tool.name)),
  }));

  return (
    <div className="mt-8">
      <h1 className="text-3xl text-neutral-200 mb-4 font-array text-center md:text-left">
        Tech and Tools
      </h1>

      <p className="text-neutral-400 text-center md:text-left mb-8">
        The technologies and tools I use daily to build, design, and ship products. A curated selection of frameworks, libraries, and applications that power my development workflow and help me create high-quality software.
      </p>

      {/* Ferramentas por categoria */}
      <div className="space-y-8 mb-12">
        {categorizedTools.map(({ category, tools: categoryTools }) => (
          <div key={category}>
            <h2 className="text-xl text-neutral-300 mb-4 font-semibold text-center md:text-left">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categoryTools.map((tool, index) => (
                <ToolCard key={`${tool.name}-${index}`} name={tool.name} url={tool.url} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tecnologias */}
      <div>
        <h2 className="text-xl text-neutral-300 mb-4 font-semibold text-center md:text-left">
          Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {techs.data.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} name={tech.name} url={tech.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
