# Quote Generator

Welcome to the Quote Generator project! This application lets you discover and display random quotes from multiple categories, making it perfect for daily inspiration, motivation, or just a bit of fun.

## Features

- **Random Quotes**: Generate a new quote at the click of a button.
- **Author & Category Display**: See who said the quote and its category.
- **Clean UI**: Simple layout for easy reading and interaction.
- **API Integration**: Fetches quotes from a third-party API, so you always get fresh content.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DashFrontDev/Quote_Generator.git
   cd Quote_Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your API key:
   ```
   VITE_API_NINJAS_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage

- Click the **Generate Quote** button to fetch and display a new quote.
- Each quote includes the text, author, and category.

## Project Structure

```
public/             # Static assets
src/                # Source code
  ├── QuoteGenTemplate.jsx
  ├── QuoteGenerator.css
  └── QuoteGen.jsx
.eslint.config.js   # Linting rules
index.html          # Main HTML file
vite.config.js      # Vite configuration
package.json        # Project metadata & scripts
```

## Technologies Used

- **React** for building the user interface.
- **Vite** for fast development and bundling.
- **CSS** for styling.
- **API Ninjas** for quote data.

## Contributing

Pull requests are welcome! If you have ideas for improvements or new features, feel free to fork the repo and submit a PR.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Enjoy discovering new quotes!
