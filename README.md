# Chatterbox Fun

A simple web-based Chatterbox fortune teller game for kids.
- Pick a color.
- Pick a number.
- Reveal a random fortune or a silly joke.

Made for fun. Easy to extend. No frameworks required.  

<br>

## About This Project

This is a lightweight browser game inspired by the classic paper fortune teller.

Built using:
- HTML
- CSS
- Vanilla JavaScript

No frameworks. No backend. No build tools.

Designed to be:
- Kid friendly
- Easy to modify
- Easy to deploy anywhere

<br>

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

### File Overview

**index.html:** Contains the layout and structure of the game.

**styles.css:** Handles colors, spacing, layout, and animations.

**app.js**
Controls:
- Game state
- Random selection logic
- Loading JSON data
- Updating the interface

**data/fortunes.json:** All fortune messages are stored here.

**data/jokes.json:** All silly jokes are stored here.

<br>

## 📦 Data Source

All game content comes from the JSON files inside the /data folder.

**Example: fortunes.json**
```
{
  "fortunes": [
    "You will have a great adventure this week.",
    "Good luck will follow you today."
  ]
}
```
**Example: jokes.json**
```
{
  "jokes": [
    "Why did the cookie go to the doctor? Because it felt crummy!",
    "You are a candy cow!"
  ]
}
```

You are free to:
- Add more fortunes
- Add more jokes
- Replace them with your own content
- Translate into another language

#### Important:
- **Keep the JSON format valid**
- **Keep entries inside the array**
- **Do not remove the outer object keys**
- **There is no limit to how many entries you can add**

### How to Extend the JSON Lists

#### Adding More Fortunes

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

#### Adding More Jokes

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

<br>

## Running Locally
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

<br>

## Game Features

- **Three-step flow**: Pick a color → Pick a number → Reveal your fortune or joke
- **Weighted randomization**: 80% chance of jokes, 20% chance of fortunes (configurable in `app.js`)
- **Different results**: Same color and number combinations can produce different results each play
- **Kid-friendly design**: Large buttons, playful colors, smooth animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Responsive**: Works on desktop, tablet, and mobile devices

<br>

## Customization

- **Change the joke/fortune ratio**: Edit the `JOKE_WEIGHT` constant in `app.js` (0.8 = 80% jokes)
- **Modify colors**: Update the color values in `styles.css` for the `.color-btn` classes
- **Adjust animations**: Tweak timing and effects in the `@keyframes` sections of `styles.css`

Enjoy playing and sharing with friends!
