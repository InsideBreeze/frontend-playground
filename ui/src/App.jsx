import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <main className="min-h-screen flex-col gap-2 bg-slate-950 text-slate-50 flex items-center justify-center">
      <Button />
      <Dropdown />
    </main>
  );
}

export default App;
