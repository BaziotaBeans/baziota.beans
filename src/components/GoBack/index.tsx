import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

interface Props {
  className?: string;
}

export function GoBack({ className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link href="/" className="flex items-center gap-2 text-sm">
        <HiArrowLongLeft className="size-6" /> Go back to home
      </Link>
    </div>
  );
}
