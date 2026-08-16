import Image from "next/image";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/wordmark.png"
      alt="Breaking Bread"
      width={807}
      height={331}
      className={className}
    />
  );
}
