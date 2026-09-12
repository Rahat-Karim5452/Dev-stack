# DevStack

A responsive web app that helps developers explore popular frontend, backend, database, and tooling technologies, then build their own personalized "tech stack" by adding and removing items from a curated list — similar to a shopping cart, but for developer tools.

---

## 🚀 Technologies Used

- **React (with TypeScript)** — component structure and UI logic
- **Tailwind CSS** — styling and responsive design
- **React Toastify** — toast notifications for add/remove actions
- **React Icons** & **Lucide React** — icons (star ratings, hamburger menu, etc.)
- **Vite** — build tool/dev server
- **JSON (data.json)** — local data source for technology listings

---

## ✨ Key Features

1. **Build-Your-Stack System**
   Browse 12+ technologies across categories (Frontend, Backend, Database, Language, Styling, DevOps), and add them to a personal "Your Stack" panel with one click. Duplicate additions are blocked with a warning toast, and each added card's button updates to show `✓ Added to Stack`.

2. **Interactive Stack Management**
   The sidebar dynamically shows the count of selected technologies, lets users remove individual items, or clear the entire stack at once — all instantly reflected across the UI thanks to React state.

3. **Fully Responsive Design**
   The layout adapts smoothly from mobile to desktop, including a collapsible hamburger navigation menu on small screens, a responsive technology grid (1/2/3 columns), and a shared brand gradient theme applied consistently across buttons, headings, and highlights.

---

## ❓ Q&A / Concepts

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript or TypeScript.

### 2. What is the difference between props and state?

- Props are used to pass data from a parent component to a child component, and they are read-only.
- State is data managed inside a component. When state changes, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state in a functional component. When the state changes, React re-renders the component.

I use this in the `App.tsx` file:

```tsx
const [technologies, setTechnologies] = useState<Technology[]>([]);
const [stack, setStack] = useState<Technology[]>([]);
```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` handles side effects. I used it to fetch and load the JSON data when the component was rendered.

### 5. Why does every item in a `.map()` list need a unique key prop?

A unique key helps React identify each item uniquely in a list and efficiently update each list item.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements depending on a condition.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. The child receives the data through props.

To send something from the child back to the parent, the parent passes a callback function as a prop. Then the child calls that function.
