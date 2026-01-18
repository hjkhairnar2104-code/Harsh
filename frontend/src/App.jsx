import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Main content grows and pushes footer down */}
      <main className="flex-1 pt-24 bg-gray-50">
        <Outlet />
      </main>

      <Footer />
    </div>

    </>
  );
}

export default App;
