import { useState } from "react";
import Header from "./cmp/Header";
import Hero from "./cmp/Hero";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
   <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
   <main className="bg-white dark:bg-gray-900 to-gray-900 dark:text-white">
    <Hero/>

   </main>
    </div>
  );
}

export default App;
