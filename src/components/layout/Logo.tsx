import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5a56e9] text-white font-bold text-lg shrink-0">
        O
      </span>
      <span className="font-bold text-[#2e3a59] text-xl tracking-tight">
        QuickHire
      </span>
    </Link>
  );
}
