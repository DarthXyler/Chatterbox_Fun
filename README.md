# Chatterbox Fortune Teller

A simple, kid-friendly web-based Chatterbox (paper fortune teller) game built with plain HTML, CSS, and JavaScript. Pick a color, pick a number, and discover your fortune or a silly joke!

## How to Run Locally

Since this game loads JSON data files, you'll need to run it through a local web server (browsers block local file access for security reasons).

### Using Python (Recommended)

1. Open a terminal in the project directory
2. Run one of these commands:
   - **Python 3**: `python -m http.server 8000`
   - **Python 2**: `python -m SimpleHTTPServer 8000`
3. Open your browser and visit: `http://localhost:8000`
4. The game should load and be ready to play!

### Using Node.js

If you have Node.js installed, you can use `npx`:

```bash
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

### Using PHP

If you have PHP installed:

```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── app.js              # Game logic and state management
├── README.md           # This file
└── data/
    ├── fortunes.json   # Collection of fortunes (50+ entries)
    └── jokes.json      # Collection of silly jokes (100+ entries)
```

## How to Extend the JSON Lists

### Adding More Fortunes

1. Open `data/fortunes.json`
2. Find the `"fortunes"` array
3. Add new fortune strings inside the array, separated by commas
4. Make sure each fortune is wrapped in double quotes
5. Keep fortunes kid-friendly, positive, and short

Example:
```json
{
  "fortunes": [
    "You will have a great adventure this week.",
    "A surprise friend will visit you soon.",
    "Your new fortune here!"
  ]
}
```

### Adding More Jokes

1. Open `data/jokes.json`
2. Find the `"jokes"` array
3. Add new joke strings inside the array, separated by commas
4. Make sure each joke is wrapped in double quotes
5. Keep jokes clean, silly, and appropriate for kids

Example:
```json
{
  "jokes": [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Your new joke here!"
  ]
}
```

### Important Notes

- Always keep valid JSON syntax (commas between items, proper quotes)
- Don't forget the closing bracket `]` and brace `}`
- Test your changes by refreshing the page after saving
- The game randomly selects from these lists, so more entries mean more variety!

## Game Features

- **Three-step flow**: Pick a color → Pick a number → Reveal your fortune or joke
- **Weighted randomization**: 60% chance of jokes, 40% chance of fortunes (configurable in `app.js`)
- **Different results**: Same color and number combinations can produce different results each play
- **Kid-friendly design**: Large buttons, playful colors, smooth animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Responsive**: Works on desktop, tablet, and mobile devices

## Customization

- **Change the joke/fortune ratio**: Edit the `JOKE_WEIGHT` constant in `app.js` (0.6 = 60% jokes)
- **Modify colors**: Update the color values in `styles.css` for the `.color-btn` classes
- **Adjust animations**: Tweak timing and effects in the `@keyframes` sections of `styles.css`

Enjoy playing and sharing with friends!
