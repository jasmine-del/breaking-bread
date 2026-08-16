import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Breaking Bread logo"
      width={1080}
      height={1080}
      className={className}
    />
  );
}
