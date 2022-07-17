import useLocalStorage from "use-local-storage";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/navbar";

function App() {
  const [ theme, setTheme ] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark')
    return;
  }
 
  return (
    <main className={`font-nunito ${theme} h-screen`}>
      <BrowserRouter>
        <div className="bg-gray-light dark:bg-bgcolor-dark">
          <Navbar theme={theme} toggleTheme={() => toggleTheme()}/> 
          <Routes />
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
