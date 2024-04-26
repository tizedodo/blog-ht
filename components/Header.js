import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="flex justify-between items-center pt-20 pb-12">
      <div>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full bg-gradient-conic from-gradient-3 to-gradient-4" />
          </a>
        </Link>
      </div>
      <div className="text-2xl dark:text-white">
        <Link href="/">
          <a className="mr-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="mr-4">About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </header>
  );
}