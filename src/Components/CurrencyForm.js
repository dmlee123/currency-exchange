import React from 'react';
import currency from "../list.json"
import { useState } from 'react';

function CurrencyForm() {
	const [firstSymbol, setFirstSymbol] = useState(currency[0].currency);
	const [secondSymbol, setSecondSymbol] = useState(currency[0].currency);
	const [odds, setOdds] = useState();

	const grabFirstSymbol = (data) => {
		setFirstSymbol(data.target.value);
	};

	const grabSecondSymbol = (data) => {
		setSecondSymbol(data.target.value);
	};

	console.log(firstSymbol);
	console.log(secondSymbol);

	let currencyList1 = currency.map((data) => {
		return (
			<option key={data.currency} value={data.currency}>
				{data.country} &nbsp; {data.currency}
			</option>
		);
	});

	let currencyList2 = currency.map((data) => {
		return (
			<option key={data.currency} value={data.currency}>
				{data.country} &nbsp; {data.currency}
			</option>
		);
	});

	const getOdds = () => {
		fetch(
			`https://currency-exchange.p.rapidapi.com/exchange?from=${firstSymbol}&to=${secondSymbol}&q=1.0`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
					'x-rapidapi-key':
						'a213037575msh37e0b6269d89facp1c0113jsn73c2e9fb8f03',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => setOdds(data))
			.catch((err) => {
				console.error(err);
			});
	};

	console.log(odds);

	return (
		<>
			<div>
				<select onChange={grabFirstSymbol}>{currencyList1}</select>
				<select onChange={grabSecondSymbol}>{currencyList2}</select>
				<div>
					<button onClick={getOdds}>get odds</button> &nbsp;
					{odds ? odds : 'input your currencies'}
				</div>
			</div>
		</>
	);
}

export default CurrencyForm;
