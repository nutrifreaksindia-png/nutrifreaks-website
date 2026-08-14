import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">This page is not part of the NutriFreaks site replica.</p>
      <Link href="/" className="btn-gold mt-8">
        Back home
      </Link>
    </div>
  );
}
