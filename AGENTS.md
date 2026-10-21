> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- The tenant is a **shop** — never "workspace," "organization," "store," or "location."
- A repair order is a **repair order** — never "RO."
- The workflow column is a **status** — never "stage" or "pipeline."
- The second factor is an **authenticator app code** — never "TOTP."
- The product is **Kinetic**, Collision Partners' collision repair management OS.

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

- Document only what the app actually does — verify against `src/features` in the Kinetic codebase before writing. Never invent features, metrics, or controls.
- "CCC ONE" is the only permitted user-facing provider name. Do not name Linq, Resend, Documenso, ElevenLabs, Gemini, Anthropic, or other providers in docs copy.
- Keep AI descriptions honest: the Agent and Rivet retrieve, summarize, classify, draft, and recommend — they never decide coverage, liability, or delivery commitments.
- Cover every screen, tab, view, filter, and control. This is a reference manual, not a marketing overview.
