import React, { useState } from 'react';
import '../Assets/styles/conversionLon.css';

const ConversionLon = () => {
	const [pulgadas, setPulgadas] = useState(0);
	const [metros, setMetros] = useState(0);
	const [cm, setCm] = useState(0);
	const [pies, setPies] = useState(0);
	const [kilometros, setKilometros] = useState(0);
	const [millas, setMillas] = useState(0);


	const Centimetros = () => {
		const valNum = document.getElementById('inputcm').value;
		setCm(valNum);
		setPulgadas(valNum*0.39370);
		setPies(valNum*0.032808);
		setMetros(valNum/100);
		setKilometros(valNum/100000);
		setMillas(valNum*0.0000062137);
	}

	const Pulgadas = () => {
		const valNum = document.getElementById('inputPulgadas').value;
		setPulgadas(valNum);
		setCm(valNum/0.39370);
		setPies(valNum*0.083333);
		setMetros(valNum/39.370);
		setKilometros(valNum/39370);
		setMillas(valNum*0.000015783);
	}

	const Pies = () => {
		const valNum = document.getElementById('inputPies').value;
		setPies(valNum);
		setCm(valNum/0.032808);
		setPulgadas(valNum*12);
		setMetros(valNum/3.2808);
		setKilometros(valNum/3280.8);
		setMillas(valNum*0.00018939);
	}

	const Metros = () => {
		const valNum = document.getElementById('inputmetro').value;
		setMetros(valNum);
		setCm(valNum*100);
		setPulgadas(valNum*39.370);
		setPies(valNum*3.2808);
		setKilometros(valNum/1000);
		setMillas(valNum*0.00062137);
	}

	const Kilometros = () => {
		const valNum = document.getElementById('inputKilometros').value;
		setKilometros(valNum);
		setCm(valNum*100000);
		setPulgadas(valNum*39370);
		setPies(valNum*3280.8);
		setMetros(valNum*1000);
		setMillas(valNum*0.62137);
	}

	const Millas = () => {
		const valNum = document.getElementById('inputMillas').value;
		setMillas(valNum);
		setCm(valNum/0.0000062137);
		setPulgadas(valNum*63360);
		setPies(valNum*5280);
		setMetros(valNum/0.00062137);
		setKilometros(valNum/0.62137);
	}


	return (
		<div className="container">
			<div id="conversion-longitud"><p className="titul">Conversion de longitud</p></div>
			<div></div>
			<p className="cuadros">
  			<label>Centimetros</label>
  			<input id="inputcm" className="in" type="number" onInput={Centimetros} onChange={Centimetros} value={cm}/>
			</p>
			<p className="cuadros">
				<label>Pulgadas</label>
				<input id="inputPulgadas" type="number" onInput={Pulgadas} onChange={Pulgadas} value={pulgadas}/>
			</p>
			<p className="cuadros">
				<label>Pies</label>
				<input id="inputPies" type="number" onInput={Pies} onChange={Pies} value={pies}/>
			</p>
			<p className="cuadros">
				<label>Metros</label>
				<input id="inputmetro" type="number" onInput={Metros} onChange={Metros} value={metros}/>
			</p>
			<p className="cuadros">
				<label>Kilometros</label>
				<input id="inputKilometros" type="number" onInput={Kilometros} onChange={Kilometros} value={kilometros}/>
			</p>
			<p className="cuadros">
				<label>Millas</label>
				<input id="inputMillas" type="number" onInput={Millas} onChange={Millas} value={millas}/>
			</p>
		</div>
	);
};

export default ConversionLon;
