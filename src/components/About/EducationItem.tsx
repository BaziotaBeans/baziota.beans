interface EducationItemProps {
  degree: string;
  institution: string;
  period?: string;
}

export function EducationItem({
  degree,
  institution,
  period,
}: EducationItemProps) {
  return (
    <li className="relative -ms-1.5 flex items-start gap-4">
      <span className="size-3 shrink-0 rounded-full bg-green-600"></span>

      <div className="-mt-2 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {degree}
            </h3>
            <p className="text-sm font-semibold text-gray-300 mt-1">
              {institution}
            </p>
          </div>
          {period && (
            <time className="text-xs/none font-bold text-gray-500 whitespace-nowrap">
              {period}
            </time>
          )}
        </div>
      </div>
    </li>
  );
}

