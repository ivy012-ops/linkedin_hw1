# Robin Hsu - Professional Portfolio

A high-performance, responsive, and dynamic personal portfolio website built with modern React technologies. This project showcases professional experience, skills, and leadership achievements with a focus on clean design and user experience.

## 🚀 Key Features

*   **Dynamic Content Management**: Includes a built-in "Admin Panel" allowing real-time editing of resume data (simulated backend via LocalStorage).
*   **Dark & Light Mode**: Seamless theme switching with persistent user preference.
*   **Bi-Lingual Support**: Infrastructure for English and Chinese language toggling.
*   **Responsive Design**: Mobile-first approach using Tailwind CSS.
*   **Data Visualization**: Interactive charts for skill proficiency using Recharts.
*   **Professional Typography & Layout**: Designed for readability and executive presence.

## 🛠 Tech Stack

*   **Core**: React 18, TypeScript
*   **Styling**: Tailwind CSS
*   **State Management**: React Context API
*   **Icons**: Lucide React
*   **Charts**: Recharts
*   **Build Tool**: Parcel (implied by environment)

## 📂 Project Structure

```
├── components/       # Reusable UI components
│   ├── AdminPanel.tsx  # JSON-based content editor
│   ├── Experience.tsx  # Timeline view of work history
│   ├── Hero.tsx        # Landing section with bio
│   ├── Layout.tsx      # Shell (Nav, Footer)
│   └── Skills.tsx      # Charts and badge lists
├── context/          # (Merged into store.tsx) State logic
├── data.ts           # Initial Resume Data (OCR source)
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main entry and routing logic
└── index.tsx         # DOM mounting
```

## 📖 Usage Guide

### Editing Content
1. Navigate to the **Admin** tab via the navigation bar.
2. The editor displays the raw JSON data representing the portfolio.
3. Modify text, add experience items, or adjust skill levels.
4. Click **Save Changes**. The site will instantly reflect your updates.
5. Click **Reset** to revert to the original resume data.

### Customization
*   **Images**: The profile image uses `picsum.photos` as a placeholder. In a production environment, replace the `img src` in `Hero.tsx` with a real asset.
*   **Translations**: Extend the `dict` object in `store.tsx` to add more Chinese translations for dynamic content.

## 📄 License
This project is for demonstration purposes based on the resume of Robin Hsu.