type TagBuildingThingProps = {
  label: string;
};

export function TagBuildingThing({ label }: TagBuildingThingProps) {
  return (
    <div className="bg-neutral-800 px-2 py-1 relative w-auto self-start text-neutral-400 font-medium">
      {label}

      <div className="absolute -top-px -right-px w-1 h-1 bg-neutral-600 rounded-full animate-pulse" />
      <div className="absolute -top-px -left-px w-1 h-1 bg-neutral-600 rounded-full animate-pulse" />
      <div className="absolute -bottom-px -right-px w-1 h-1 bg-neutral-600 rounded-full animate-pulse" />
      <div className="absolute -bottom-px -left-px w-1 h-1 bg-neutral-600 rounded-full animate-pulse" />
    </div>
  );
}
