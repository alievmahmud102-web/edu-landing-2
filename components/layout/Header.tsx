import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          EduCenter Pro
        </Link>
        <Button variant="outline" size="sm" href="/#catalog">
          $150
        </Button>
      </div>
    </header>
  );
}
