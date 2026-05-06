import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Vocabulary mastery tracker, conversation history, and weekly learning reports for parents

export const dynamic = 'force-dynamic';

export default async function ProgressPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Progress</h1>
        <p className="text-slate-500">Vocabulary mastery tracker, conversation history, and weekly learning reports for parents</p>
      </main>
    </div>
  );
}
