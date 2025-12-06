interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  website?: string;
}

export function ExperienceItem({
  title,
  company,
  location,
  period,
  description,
  technologies,
  website,
}: ExperienceItemProps) {
  return (
    <li className="relative -ms-1.5 flex items-start gap-4">
      <span className="size-3 shrink-0 rounded-full bg-green-600"></span>

      <div className="-mt-2 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-1">
              <span className="text-sm font-semibold text-gray-300">
                {company}
              </span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="text-sm text-gray-500">{location}</span>
            </div>
          </div>
          <time className="text-xs/none font-bold text-gray-500 whitespace-nowrap">
            {period}
          </time>
        </div>

        <ul className="mt-2 space-y-2">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-sm text-gray-400 font-medium leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>

        {technologies && technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-green-400/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-green-400 hover:text-green-300 transition-colors"
          >
            {website}
          </a>
        )}
      </div>
    </li>
  );
}

