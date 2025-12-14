import { getTechIcon } from "@/components/TechIcons";

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  const IconComponent = getTechIcon(tech);

  if (!IconComponent) {
    return null;
  }

  return (
    <div className="relative flex items-center justify-start rounded-full border border-gray-200 bg-gray-100 p-1 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-800 -mr-3 cursor-pointer">
      <IconComponent className="h-4 w-4 shrink-0 dark:text-gray-200" />
      <span className="text-gray-500 dark:text-gray-200">{tech}</span>
    </div>
  );
}
