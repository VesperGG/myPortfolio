import { useState } from "react";
import Header from "./cmp/Header";
import Hero from "./cmp/Hero";
import Services from "./cmp/Services";
import Portfolio from "./cmp/Portfolio";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
   <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
   <main className="bg-white dark:bg-gray-900 to-gray-900 dark:text-white">
    <Hero/>
    <Services/>
    <Portfolio/>
   </main>
    </div>
  );
}

export default App;
