import logo from './logo.svg';
import './App.css';
import CurrencyForm from './Components/CurrencyForm';


function App() {
  return (
		<div className='App'>
			<div className='Dashboard'>
				<h2>Currency Exchange Rate</h2>
				<div>
					<CurrencyForm />
				</div>
			</div>
		</div>
	);
}

export default App;
