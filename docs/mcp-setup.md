# Binance MCP setup — Agent Desk

**Endpoint (only):** `https://agent.binance.com/mcp/agentic`

- Transport: **remote Streamable HTTP / HTTP MCP** (not local stdio; not API keys)
- OAuth sign-in (no local API keys)
- Agentic sub-account (no external withdrawals)
- Confirm every trade / cancel / transfer

Official docs: [Binance Agent Native · MCP Server](https://developers.binance.com/en/docs/agent-native/mcp-server)

## One-liners

### Claude Code
```bash
claude mcp add --transport http binance-agentic https://agent.binance.com/mcp/agentic
```

### Cursor
Add to `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):
```json
{
  "mcpServers": {
    "binance-agentic": {
      "url": "https://agent.binance.com/mcp/agentic"
    }
  }
}
```
Reload Cursor, then complete OAuth when prompted. Remote HTTP MCP — no stdio command, no API keys.

### Codex
```bash
codex mcp add binance-agentic --url https://agent.binance.com/mcp/agentic
```

### VS Code (MCP)
Add to MCP settings / `mcp.json`:
```json
{
  "servers": {
    "binance-agentic": {
      "type": "http",
      "url": "https://agent.binance.com/mcp/agentic"
    }
  }
}
```

### Grok Bot
Connect an HTTP MCP server named `binance-agentic` pointing at:
`https://agent.binance.com/mcp/agentic` — complete OAuth when prompted.

## Helper script
```bash
chmod +x scripts/print-mcp-install.sh
./scripts/print-mcp-install.sh
```

## After connect
1. Complete OAuth in the browser / client prompt.
2. Load `skills/orchestrator.md` (or the individual skills).
3. Run the 6-beat demo in `docs/demo-script.md`.

## Safety / eligibility
Product access may be restricted in SG, US, UK, EEA, HK and other regions. This is not legal advice — follow Binance terms and local regulations.
