import Link from "next/link";

export default function Layout({children}) {
  return <div>
    <header className="p-2 border-b border-gray-900">
      <Link href="/"><a className="text-xl font-bold">Blog Name</a></Link>
    </header>
    <main className="">
    {children}
    </main>
    <footer>

    </footer>
  </div>
}