Anime Explorer
A responsive single-page React application built to search, discover, and view detailed information about various anime series. Developed as a frontend technical assessment project.

Features
Interactive Search: Responsive search input supporting both button clicks and Enter key submissions.

Responsive Grid Layout: Dynamic CSS grid that adapts smoothly across different screen sizes with hover animations.

Detail Overlay Modal: Clickable anime cards that open an immersive overlay showing high-resolution artwork, ratings, total episodes, and full synopses.

State Management: Built using React Hooks (useState) to cleanly manage search terms, loading indicators, data arrays, and active modal states.

Reliable Architecture: Features robust error-handling and structured mock data implementation to ensure uninterrupted execution during demonstrations.

Tech Stack
Library: React (JSX)

Styling: Custom CSS3 (Flexbox, CSS Grid, custom gradients)

Build Tool: Vite

Language: JavaScript (ES6+)

Screenshots
1. Home / Search View
The main landing interface featuring the search bar and clean dark-mode design.

<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/5e7c0f7e-85eb-44f7-9a35-661b811eed71" />



2. Search Results Grid
The responsive anime grid populated after performing a search.
<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/dc26e57e-0376-4423-a98a-47c4224268ee" />


3. Detail Modal Overlay
The expanded detail view showing full synopsis, episode count, and score when an anime card is clicked.
<img width="3420" height="2214" alt="image" src="https://github.com/user-attachments/assets/de57d10d-f2fd-47ec-9d33-a939d4658fbd" />

4.MODEL VIDEO:

## Project Demo

<video src="https://github.com/sab3078-prog/anime-explorer-beginner-project/issues/1#issue-5426738476" width="100%" controls muted autoplay></video>

Getting Started Locally
Follow these steps to run the project on your local machine:

Open the project folder in your terminal (such as VS Code terminal).

Install the project dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev
Click or copy the local server URL provided in your terminal (typically http://localhost:5173) and open it in your browser.

Project Structure
src/App.jsx: Houses the core React component, state hooks, search logic, and user interface elements.

src/App.css: Contains custom dark-mode styling, responsive grid layouts, and overlay transition rules.

src/assets/: Stores project images and media assets.
