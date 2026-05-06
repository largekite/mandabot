import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Layout reads auth at request time — opt out of prerendering so missing env
// vars don't crash the build.
export const dynamic = 'force-dynamic';

const NAV_LINKS = [
      { href: '/onboarding', label: 'Onboarding' },
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/chat', label: 'Chat' },
      { href: '/lessons', label: 'Lessons' },
      { href: '/progress', label: 'Progress' },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-100 px-6 h-14 flex items-center justify-between shrink-0">
        <Link href="/dashboard" className="font-bold text-slate-900">MandaBot</Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="flex-1 bg-slate-50">{children}</div>
    </div>
  );
}
