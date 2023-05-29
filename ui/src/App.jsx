import { ExclamationCircleIcon, QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Boop from "./components/Boop";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <main className="min-h-screen flex-col gap-2 bg-slate-950 text-slate-50 flex items-center justify-center">
      <Button />
      <Dropdown />
			<div className='flex space-x-2'>
			<Boop rotation={20} timing={200}>
				<QuestionMarkCircleIcon className='h-10 w-10' />
				</Boop>

			<Boop rotation={20} timing={200}>
				<XMarkIcon className='h-10 w-10' />
				</Boop>

			<Boop timing={200} scale={1.1}>
				<ExclamationCircleIcon className='h-10 w-10' />
				</Boop>
				</div>
    </main>
  );
}

export default App;
