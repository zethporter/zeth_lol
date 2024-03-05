import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-900 via-blue-900 to-violet-900 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          zeth{" "}
          <span className="to bg-cyan-300 bg-gradient-to-r from-pink-300 bg-clip-text text-transparent">
            lol
          </span>
        </h1>
        <div className="grid grid-cols-1">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/jeopardy"
            target=""
          >
            <h3 className="text-2xl font-bold">Jeopardy</h3>
            <div className="text-lg">
              Yeah, its just jeopardy. Not too cool tbh...
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
