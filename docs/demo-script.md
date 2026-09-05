# Demo script — Agent Desk (6 beats)

Goal: show the confirm-flow desk on Binance MCP without treating this as a full trading app.

**MCP:** `https://agent.binance.com/mcp/agentic`  
**Skills:** Research → Risk → Exec(confirm) → Positions

---

## Beat 1 — Connect
- Install MCP (see `docs/mcp-setup.md`).
- Complete OAuth; confirm agentic sub-account is linked.
- Say: “Desk online — no keys on disk.”

## Beat 2 — Research
- User: “Research BTCUSDT 1h bias.”
- Agent loads `skills/research.md`, pulls ticker/klines via MCP.
- Output: short Research Brief (bias, triggers, invalidation).
- Hand-off cue: `→ Risk`.

## Beat 3 — Risk
- Agent loads `skills/risk.md`, reads equity/exposure.
- Output: Risk Ticket (size ≤ ~1% risk, stop, TP).
- Verdict: `APPROVE → Exec` (or REJECT with reason).

## Beat 4 — Confirm place
- Agent loads `skills/exec.md`, shows Confirm Card (symbol, side, size, price).
- User must type `CONFIRM` (or UI confirm).
- Only then: place order via MCP; show order id.

## Beat 5 — Positions
- Agent loads `skills/positions.md`.
- Snapshot: position, resting TP/SL, unrealized PnL.
- Optional: alert if price nears stop.

## Beat 6 — Confirm cancel / exit
- User: “Cancel the resting order” or “Flatten.”
- New Confirm Card → user `CONFIRM` → cancel/reduce via MCP.
- Final Positions Snapshot + desk summary.

---

## Narration tips
- Emphasize **OAuth MCP only**, **no withdrawals**, **confirm every mutation**.
- Keep symbols liquid (e.g. BTCUSDT) and sizes tiny for the recording.
- Showcase UI: `cd apps/showcase && npm i && npm run build` then `npm run start`.
