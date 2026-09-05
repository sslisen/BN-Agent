#!/usr/bin/env bash
# Print Binance MCP install one-liners for Agent Desk
set -euo pipefail

ENDPOINT="https://agent.binance.com/mcp/agentic"

cat <<EOF
=== Agent Desk — Binance MCP install ===
Endpoint: ${ENDPOINT}
Transport: remote Streamable HTTP / HTTP MCP (not stdio; OAuth, no API keys)
(OAuth · agentic sub-account · confirm every trade/cancel/transfer)

Official docs: https://developers.binance.com/en/docs/agent-native/mcp-server

Claude Code:
  claude mcp add --transport http binance-agentic ${ENDPOINT}

Cursor (.cursor/mcp.json or ~/.cursor/mcp.json):
  {
    "mcpServers": {
      "binance-agentic": {
        "url": "${ENDPOINT}"
      }
    }
  }
  Then reload Cursor and complete OAuth.

Codex:
  codex mcp add binance-agentic --url ${ENDPOINT}

VS Code mcp.json fragment:
  {
    "servers": {
      "binance-agentic": {
        "type": "http",
        "url": "${ENDPOINT}"
      }
    }
  }

Grok Bot:
  Add HTTP MCP server "binance-agentic" → ${ENDPOINT}
  Complete OAuth when prompted.

Docs: docs/mcp-setup.md
Skills: skills/orchestrator.md
EOF
