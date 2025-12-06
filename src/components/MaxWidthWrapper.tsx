import { cn } from "@/lib/utils";

type SizeClass = "lg" | "md";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
  size?: SizeClass;
}

const SIZE_CLASSES: Record<SizeClass, string> = {
  md: "max-w-3xl",
  lg: "max-w-4xl",
};

const MaxWidthWrapper = ({
  className,
  children,
  size = "lg",
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "container h-full mx-auto w-full px-2.5 md:px-20",
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
