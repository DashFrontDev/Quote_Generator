# Quote Generator

Welcome! This is a simple web project that fetches and displays random quotes. It’s made to be fast, easy to use, and fun to tweak.

---

## What’s Inside

- **Live Quotes:** The app pulls quotes from an online API, so you always see something new.
- **Clean Interface:** Minimal design, no clutter—just the quotes.
- **Deployable:** Works well locally and can be deployed to Vercel or similar platforms.

---

## How It Works

Every time you hit the “Get Quote” button, the app asks an API for a fresh quote. The response shows up instantly. No page reloads, just the quote you wanted.

---

## Getting Started

1. **Clone the repo:**
   ```
   git clone https://github.com/DashFrontDev/Quote-Gen.git
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Run locally:**
   ```
   npm start
   ```
   Open your browser at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

The app uses an external API. You’ll need an API key. Add this to your environment:

```
REACT_APP_API_NINJAS_KEY=your-api-key-here
```

If you’re deploying to Vercel, set the environment variable in the dashboard before deploying.

---

## Deploying

After pushing your changes to GitHub:
- Go to [Vercel](https://vercel.com/)
- Import your repo
- Add the environment variable for your API key
- Hit **Deploy**

That’s it! Your site should be live in a minute or two.

---

## Customization

Feel free to change the styles or even the API source. Want to show different types of quotes? Swap the API endpoint or tweak the display logic.

---

## Credits

Thanks to [api-ninjas.com](https://api-ninjas.com/) for providing the quote API.

---

## License

Do whatever you want with this code. Attribution appreciated but not required.
