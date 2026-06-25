# CE&A | Adoption Office BTP - Search Bar

Interactive search bar component for navigating BTP Adoption Office topics.

## Structure

```
cea-adoption-office-btp-search/
├── index.html    — Entry point
├── style.css     — Scoped styles (all under .sap-search-wrapper)
├── script.js     — Search logic (self-contained IIFE, no dependencies)
└── README.md
```

## Usage

### Standalone

Open `index.html` in a browser. No build step or server required.

### Embed in an existing site

1. Include `style.css` in your `<head>` or paste its contents into your stylesheet.
2. Copy the `<div class="sap-search-wrapper">...</div>` block from `index.html` into your page where you want the component.
3. Include `script.js` at the end of the `<body>` or load it after the DOM is ready.

## Features

- Real-time filtering with highlighted matches
- Keyboard navigation (Arrow keys, Enter, Escape)
- Click-outside to close dropdown
- No external dependencies
- Scoped CSS — does not interfere with host page styles

## Customization

- **Width**: adjust `max-width` on `.sap-search-wrapper`
- **Links**: edit the `links` array in `script.js`
- **Colors**: all colors use SAP brand tokens and are defined in `style.css`

## License

Internal use only.
