import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-[#4640DE]">404</h1>
      <h2 className="text-2xl font-semibold text-[#2e3a59] mt-4">
        Page Not Found
      </h2>
      <p className="text-[#6b7280] mt-2 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}
