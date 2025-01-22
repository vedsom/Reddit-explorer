# Reddit App

A modern Reddit client built with React and Redux, featuring a responsive design and real-time content updates.

## System Requirements

- Node.js (version 14.0.0 or higher)
- npm (version 6.0.0 or higher)
- Windows/macOS/Linux operating system

## Tech Stack

- React 18
- Redux Toolkit
- React Router DOM
- Axios
- Styled Components
- Lucide React (for icons)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vedsom/Reddit-explorer
cd reddit-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will run on `http://localhost:3000`

## Available Scripts

- `npm start`: Runs development server
- `npm build`: Creates production build in `build` folder
- `npm test`: Runs test suite
- `npm eject`: Ejects from Create React App

## Browser Support

### Production
- Browsers with >0.2% market share
- Modern browsers
- No Opera Mini support

### Development
- Latest Chrome
- Latest Firefox
- Latest Safari

## Project Structure

```
reddit-app
├── build
├── node_modules
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── ContentPanel.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── styled.js
|   |   |   └── MobileNav.jsx
│   │   ├── post
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostList.jsx
│   │   │   └── styled.js
│   │   ├── search
│   │   │   ├── SearchResults.jsx
│   │   │   └── styled.js
│   │   ├── subreddit
│   │   │   ├── SubredditCard.jsx
│   │   │   ├── SubredditList.jsx
│   │   │   └── styled.js
│   │   └── ui
│   │       ├── ErrorMessage.jsx
│   │       ├── LoadingSpinner.jsx
│   │       ├── Pagination.jsx
│   │       └── SearchBar.jsx
│   ├── hooks
│   │   ├── useInfiniteScroll.js
│   │   ├── usePosts.js
│   │   ├── useSearch.js
│   │   └── useSubreddits.js
│   ├── pages
│   │   ├── HomePage.jsx
│   │   ├── PostPage.jsx
│   │   └── SubredditPage.jsx
│   ├── store
│   │   ├── favoritesSlice.js
│   │   ├── store.js
│   │   └── subredditSlice.js
│   ├── styles
│   │   └── GlobalStyles.js
│   ├── utils
│   │   ├── api.js
│   │   └── helpers.js
│   ├── App.js
│   ├── index.js
│   ├── .gitignore
│   ├── package-lock.json
|   ├── package.json
|   ├── README.md
```

## Dependencies

### Core
- react: ^18.0.0
- react-dom: ^18.0.0
- @reduxjs/toolkit: ^2.5.0
- react-redux: ^9.2.0
- react-router-dom: ^7.1.3

### Styling
- styled-components: ^6.1.14
- lucide-react: ^0.473.0

### Utilities
- axios: ^1.7.9
- web-vitals: ^4.2.4
- ajv: ^6.12.6
- ajv-keywords: ^3.5.2

## Troubleshooting

1. If installation fails:
```bash
npm clean-install
```

2. If build fails:
```bash
rm -rf node_modules
npm install
```

3. For Windows-specific issues:
```bash
npm install --legacy-peer-deps
```

## License

MIT License
