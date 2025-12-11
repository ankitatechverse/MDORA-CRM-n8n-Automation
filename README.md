# MDORA — Simple AI Static Website + n8n Automation

A simple AI-powered static website (vibe-coding style) built with Vite that sends inquiry payloads to an n8n workflow which: (1) drafts an email based on inquiry + company info, and (2) appends user/contact info to an Excel/Google Sheet.

---

## Features
- Static frontend (Vite + plain JS/TS or React) for product/company info + contact form  
- AI-assisted email draft generation (via an AI API or your prompt engine) inside n8n  
- Append contact rows to Google Sheets / Excel (via n8n nodes)  
- Simple webhook-based integration (frontend → n8n)  
- Minimal, copy-ready setup for quick demos

---

## Tech stack
- Frontend: Vite (fast dev server) — plain HTML/TSX or React + Vite
- Automation: n8n (self-hosted or n8n.cloud)  
- Storage: Google Sheets or Excel (via n8n integrations)  
- Email drafts: Gmail node (draft) or SMTP / Mail API via n8n HTTP request  
- AI: Any LLM endpoint (OpenAI, Anthropic, etc.) called from n8n

