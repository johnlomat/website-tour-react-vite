import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    startTour();
  }, []);

  const startTour = () => {
    const config = {
      steps: [
        {
          element: "#vite",
          popover: {
            title: "Vite",
            description: "Vite is a next-generation frontend tool that enables fast builds and optimized development. Click on the Vite logo to explore its documentation and learn more.",
          },
        },
        {
          element: "#react",
          popover: {
            title: "React",
            description: "React is a popular JavaScript library for building user interfaces. Click on the React logo to dive into its official documentation and start creating interactive UIs.",
          },
        },
        {
          element: ".card button",
          popover: {
            title: "Count Button",
            description: "This button increases the count each time you click it. The count state is managed using React's useState hook, allowing the UI to re-render whenever the count changes.",
          },
        },
        {
          element: ".card p",
          popover: {
            title: "Hot Module Replacement (HMR)",
            description: "Edit the `src/App.tsx` file and save it to see how Vite's Hot Module Replacement (HMR) works. HMR allows you to see the changes in your application instantly without refreshing the page.",
          },
        },
        // Add more steps as needed
      ],
      allowClose: true,
      // Add other configuration options as needed
    };

    const tourInstance = driver(config);

    // Start the tour directly
    tourInstance.drive();
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" id="vite" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" id="react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
