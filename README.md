# Full Stack Engineer — React Tech Challenge

Welcome to our **React Challenge** — designed to evaluate your front-end architecture, performance, and component design skills using React.

This 1-hour technical interview simulates a realistic task you'd encounter as a Senior Full Stack Engineer. We value thoughtful structure, clarity, and clean code as much as feature completeness.

---

## 🔹 Challenge Title: Product Dashboard with Filters, Tabs & Virtualization

### 📄 Project Goal

Build a product dashboard that:
- Displays a large list of products
- Supports multi-field filtering
- Includes tabbed views (e.g. All vs Favorites)
- Uses performance optimizations like virtualization
- Demonstrates modular and reusable component structure

---

## 📂 What You’ll Receive

This repo comes with:
- React + Vite + TypeScript/JavaScript scaffold (supports both TS & JS files)
- A mock `products.json` with ~500 sample products
- Simple starter layout and optional component folders

---

## 🔹 Requirements

### 1. Product List View
- Render products with: name, category, price, favorite toggle (star icon)

### 2. Filtering Panel
- Search by product name (with debounce)
- Filter by category (multi-select dropdown)
- Filter by price range (min + max fields)

### 3. Tabbed Navigation
- Tab: "All Products"
- Tab: "Favorites"
- Filtering should apply independently per tab

### 4. Performance
- Use `react-window` or similar to implement list virtualization for smooth scrolling

### 5. Component Architecture
- Break logic/UI into reusable components:
  - `ProductList`
  - `ProductRow`
  - `FilterPanel`
  - `Tabs`

### 6. Unit Test
- Write at least one unit test (e.g. filter behavior or favorite toggle)

---

## 📆 Bonus Features (Optional)

- Persist favorites to `localStorage`
- Add sorting (by name or price)
- Use `React.memo` / `useMemo` to improve performance
- Show loading skeletons
- Use `Context` or global state (e.g. Zustand)

---

## 🔹 Submission Instructions

1. Clone the repo and create a new branch:
```bash
git checkout -b your-name
```

2. Commit your changes and push to your forked repo:
```bash
git add .
git commit -m "Challenge submission"
git push origin your-name
```

3. Share the link to your GitHub branch.

Optionally include a `NOTES.md` explaining your architecture, tradeoffs, or unfinished features.

---

## 🔹 Evaluation Criteria

| Area               | What We’re Looking For                          |
| ------------------ | ----------------------------------------------- |
| 🧠 Architecture     | Modular, clean, reusable component design       |
| ⏳ Performance      | Handles large data efficiently (virtualization) |
| 📊 State Management | Clean handling of filters, tabs, favorites      |
| ✏️ Code Quality     | Readable, type-safe, maintainable code          |
| 🚪 UX Polish        | Debounced inputs, skeletons, interactivity      |
| 🔍 Debuggability    | Error-resilience, clear logic separation        |
| 💡 Bonus            | Persistence, sorting, global state, testing     |

---

## 🌟 Sample Product JSON Format

`src/data/products.json`
```json
[
  {
    "id": "p001",
    "name": "Wireless Keyboard",
    "category": "Electronics",
    "price": 39.99,
    "isFavorite": false
  },
  {
    "id": "p002",
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "price": 59.99,
    "isFavorite": true
  }
]
```

The full dataset includes ~500 diverse products with varying categories and prices.

---

## 🚀 Getting Started

To run the starter project locally:
```bash
npm install
npm run dev
```

Supports both `.ts/.tsx` and `.js/.jsx` files. You're free to use either or mix both.

---

## 🙌 Good Luck!

We’re excited to see how you approach building real-world front-end interfaces.
If anything is unclear, feel free to ask during the interview.
