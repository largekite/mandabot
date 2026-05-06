import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Structured lesson topics (greetings, numbers, animals, food) for guided learning sessions

export const dynamic = 'force-dynamic';

export default async function LessonsPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Lessons</h1>
        <p className="text-slate-500">Structured lesson topics (greetings, numbers, animals, food) for guided learning sessions</p>
      </main>
    </div>
  );
}
