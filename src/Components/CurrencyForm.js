import React from 'react';
import currency from '../list.json';
import { useState } from 'react';

function CurrencyForm() {
	const [firstSymbol, setFirstSymbol] = useState(currency[0].currency);
	const [secondSymbol, setSecondSymbol] = useState(currency[0].currency);

	const [odds, setOdds] = useState();

	const grabFirstSymbol = (data) => {
		setFirstSymbol(data.target.value);
		setOdds(null);
	};

	const grabSecondSymbol = (data) => {
		setSecondSymbol(data.target.value);
		setOdds(null);
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

	const date = new Date();
	const daylist = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday ',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const literalDay = daylist[date.getDay()];
	const monthList = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const literalMonth = monthList[date.getMonth()];

	const todaysDate =
		literalDay + literalMonth + ' ' + date.getDay() + ', ' + date.getFullYear();
	console.log(todaysDate);

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
			<div id='box'>
				<div id='rate'>
					<div>{todaysDate}</div>

					<h2 id='data'>
						<strong>1</strong> {firstSymbol}
					</h2>
				</div>
				<div>
					<select id='select' onChange={grabFirstSymbol}>
						{currencyList1}
					</select>
				</div>

				<h2 id='data'>equals</h2>

				<select id='select' onChange={grabSecondSymbol}>
					{currencyList2}
				</select>
				<div>
					<h2 id='data'>
						<strong>{odds ? odds : ''}</strong> {odds ? secondSymbol : ''}
					</h2>
				</div>
				<div>
					<button id='button-24' onClick={getOdds}>
						Get Odds
					</button>{' '}
					&nbsp;
				</div>
			</div>
		</>
	);
}

export default CurrencyForm;
