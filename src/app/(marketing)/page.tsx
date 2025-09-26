import Link from "next/link";

export default function home() {
  return (
    <>
      <main>
        <h1>Hello, Next.js!</h1>
        <div className="text-lg text-blue-500">
          <Link href="articles/breaking-news-123?lang=en">Read in English</Link>{" "}
          <br />
          <Link href="articles/breaking-news-123?lang=fr">Read in French</Link>
        </div>
      </main>
    </>
  );
}
