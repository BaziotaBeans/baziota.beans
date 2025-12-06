import Image from "next/image";

export function Me() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/images/avatar.avif" alt="Avatar" width={70} height={70} />
    </div>
  );
}
