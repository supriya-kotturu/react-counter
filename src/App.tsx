import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [enableUpdate, setEnableUpdate] = useState(false);
	const [status, setStatus] = useState<'start' | 'reset' | 'stop'>('stop');

	useEffect(() => {
		let timer: number = 0;
		if (status === 'start') {
			timer = enableUpdate
				? setInterval(() => setCount((prev) => prev + 1), 1000)
				: 0;
		} else if (status === 'stop') {
			clearInterval(timer);
		} else {
			clearInterval(timer);
			setCount(0);
		}
	}, [status]);

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>{count}</h1>
			<div className='card'>
				<button
					onClick={() => {
						setStatus('start');
						setEnableUpdate(true);
					}}
				>
					Start
				</button>
				<button onClick={() => setStatus('reset')}>Reset</button>
				<button onClick={() => setStatus('stop')}>Stop</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
