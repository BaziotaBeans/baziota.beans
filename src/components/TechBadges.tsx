import React from "react";
import { getTechIcon } from "./TechIcons";

interface TechBadgesProps {
  tags: string[];
}

const TechBadges: React.FC<TechBadgesProps> = ({ tags }) => {

  return (
    <div className="mt-2 flex max-w-56 flex-wrap gap-1">
      {tags.map((tag, index) => {
        const IconComponent = getTechIcon(tag);
        
        if (!IconComponent) {
          return null;
        }

        return (
          <div
            key={index}
            className="group relative flex items-center justify-start rounded-full border border-gray-200 bg-gray-100 p-1 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-800 -mr-3 hover:z-10 transition-all duration-300 cursor-pointer"
            tabIndex={0}
          >
            <span className="pr-0 group-hover:pr-2 transition-all duration-300 shrink-0">
              <IconComponent className="h-4 w-4 shrink-0 dark:text-gray-200" />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-gray-500 dark:text-gray-200 transition-all duration-300 group-hover:max-w-[200px]">
              {tag}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TechBadges;
