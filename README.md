# HONO Brand Website

HONO modest fashion brand showcase website for Saudi Arabia and the Middle East.

## Local Development

PowerShell on this machine may block direct `npm` scripts, so use `npm.cmd`:

```powershell
npm.cmd install
npm.cmd run dev
```

Open:

```text
http://localhost:5173/
```

## Build

```powershell
npm.cmd run build
```

The static output is generated in `dist/`.

## Netlify

`netlify.toml` is already configured:

```toml
[build]
command = "npm run build"
publish = "dist"
```

## Edit Links, Text, and Images

Main content is centralized in:

```text
src/App.jsx
```

Update the `config` object to change:

- WhatsApp, Noon, TikTok, Instagram links
- English and Arabic copy
- product names and descriptions
- image paths

Replace placeholder images in:

```text
public/images/
```
