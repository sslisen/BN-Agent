const beats = [
  "Connect OAuth MCP",
  "Research brief",
  "Risk ticket",
  "Confirm place",
  "Positions snapshot",
  "Confirm cancel / exit",
];

const pipeline = [
  { id: "01", name: "Research", blurb: "Thesis from live MCP market reads" },
  { id: "02", name: "Risk", blurb: "Size, stops, APPROVE / REJECT" },
  { id: "03", name: "Exec", blurb: "Confirm Card → then mutate" },
  { id: "04", name: "Positions", blurb: "Monitor; loop amendments" },
];

const mcpSteps = [
  {
    n: "1",
    title: "Add the endpoint",
    body: "Point your client at https://agent.binance.com/mcp/agentic (Claude Code, Codex, VS Code, or Grok Bot).",
  },
  {
    n: "2",
    title: "Complete OAuth",
    body: "Sign in — no local API keys. Agentic sub-account only; no external withdrawals.",
  },
  {
    n: "3",
    title: "Load desk skills",
    body: "Start with skills/orchestrator.md, then run the 6-beat confirm-flow demo.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-desk-gold/15 ring-1 ring-desk-gold/40">
            <span className="font-mono text-sm font-bold text-desk-gold">AD</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">Agent Desk</p>
            <p className="text-xs text-desk-muted">Binance Agent OS · Track A</p>
          </div>
        </div>
        <a
          href="https://github.com/sslisen/BN-Agent"
          className="rounded-full border border-desk-border bg-desk-panel/80 px-4 py-2 text-xs font-medium text-desk-muted transition hover:border-desk-gold/50 hover:text-white"
        >
          GitHub
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-desk-border bg-desk-panel/60 px-3 py-1 text-xs text-desk-mint">
          <span className="h-1.5 w-1.5 rounded-full bg-desk-mint" />
          OAuth MCP · confirm every mutation
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Multi-agent trading desk
          <span className="block bg-gradient-to-r from-desk-gold via-amber-200 to-desk-mint bg-clip-text text-transparent">
            on Binance MCP
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-desk-muted sm:text-lg">
          Research → Risk → Exec (user confirm) → Positions. Not a full trading app — a
          skill-driven desk that keeps humans in the loop on every place, cancel, and
          transfer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#architecture"
            className="rounded-lg bg-desk-gold px-5 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:brightness-110"
          >
            View architecture
          </a>
          <a
            href="#connect"
            className="rounded-lg border border-desk-border bg-desk-panel px-5 py-2.5 text-sm font-medium text-white transition hover:border-desk-gold/40"
          >
            Connect MCP
          </a>
        </div>
      </section>

      <section id="architecture" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Architecture</h2>
        <p className="mt-2 text-sm text-desk-muted">
          Four skills, one orchestrator, one agentic MCP endpoint.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((step, i) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-desk-border bg-desk-panel/80 p-5"
            >
              <span className="font-mono text-xs text-desk-gold">{step.id}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.name}</h3>
              <p className="mt-1 text-sm text-desk-muted">{step.blurb}</p>
              {i < pipeline.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden translate-x-1/2 -translate-y-1/2 text-desk-gold lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-dashed border-desk-border bg-black/30 p-4 font-mono text-xs text-desk-muted">
          MCP · https://agent.binance.com/mcp/agentic
        </div>
      </section>

      <section id="connect" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Connect in 3 steps
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {mcpSteps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-desk-border bg-desk-panel/80 p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-desk-gold/20 font-mono text-sm font-bold text-desk-gold">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-desk-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-desk-danger/40 bg-desk-danger/10 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-desk-danger">Safety callout</h2>
          <ul className="mt-4 space-y-2 text-sm text-desk-muted">
            <li>· OAuth only — never store exchange API keys in this project.</li>
            <li>· Every trade, cancel, and transfer requires explicit user confirmation.</li>
            <li>· Agentic sub-account cannot withdraw externally.</li>
            <li>
              · Access may be restricted in SG / US / UK / EEA / HK (and elsewhere).{" "}
              <strong className="text-white">Not legal advice.</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Demo video</h2>
        <p className="mt-2 text-sm text-desk-muted">Placeholder for the 6-beat confirm-flow recording.</p>
        <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl border border-desk-border bg-gradient-to-br from-desk-panel to-black shadow-glow">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-desk-gold/40 bg-desk-gold/10">
              <span className="ml-1 text-2xl text-desk-gold">▶</span>
            </div>
            <p className="text-sm font-medium">Demo coming soon</p>
            <p className="mt-1 font-mono text-xs text-desk-muted">docs/demo-script.md</p>
          </div>
        </div>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {beats.map((b, i) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-lg border border-desk-border/80 bg-desk-panel/50 px-3 py-2 text-sm"
            >
              <span className="font-mono text-xs text-desk-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              {b}
            </li>
          ))}
        </ol>
      </section>

      <footer className="relative z-10 border-t border-desk-border/80 py-10 text-center text-xs text-desk-muted">
        <p>Agent Desk · Track A · Deadline 2026-09-09 07:59 UTC+8</p>
        <p className="mt-1">MIT · sslisen · Not financial or legal advice</p>
      </footer>
    </main>
  );
}
