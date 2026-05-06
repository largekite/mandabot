// Rendered when required runtime env vars are missing or still set to the
// build-time placeholders from next.config.mjs. Surfaces a polished
// "configure these in Vercel" screen instead of crashing at module load.

interface MissingVar {
  key: string;
  label: string;
  helpUrl?: string;
}

interface Props {
  productName: string;
  missing: MissingVar[];
}

export default function SetupRequired({ productName, missing }: Props) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ede9fe 100%)',
    }}>
      <div style={{
        maxWidth: 560,
        width: '100%',
        background: 'white',
        borderRadius: 16,
        padding: '2.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        border: '1px solid #e2e8f0',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#fef3c7',
          color: '#92400e',
          fontSize: 12,
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: 999,
          marginBottom: 20,
        }}>
          ⚙️ Configuration required
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
          {productName} is almost ready
        </h1>
        <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: 24 }}>
          Your app deployed successfully, but a few environment variables still need
          to be set in your Vercel project before users can sign up or log in.
        </p>
        <div style={{ background: '#f8fafc', borderRadius: 12, padding: 20, marginBottom: 24, border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 12 }}>
            Add these to Vercel → Project Settings → Environment Variables:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {missing.map((m) => (
              <li key={m.key} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <code style={{
                  background: '#fff',
                  border: '1px solid #cbd5e1',
                  borderRadius: 6,
                  padding: '2px 8px',
                  fontSize: 12,
                  fontFamily: 'ui-monospace, monospace',
                  color: '#1e293b',
                  whiteSpace: 'nowrap',
                }}>
                  {m.key}
                </code>
                <span style={{ fontSize: 13, color: '#64748b' }}>
                  {m.label}
                  {m.helpUrl ? (
                    <>
                      {' — '}
                      <a href={m.helpUrl} target="_blank" rel="noreferrer" style={{ color: '#4f46e5' }}>
                        get key
                      </a>
                    </>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>
          Once you save the variables, redeploy from your Vercel dashboard
          (Deployments → … → Redeploy) and refresh this page. You won&apos;t see
          this screen again.
        </p>
      </div>
    </div>
  );
}
