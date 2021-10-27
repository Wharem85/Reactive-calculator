import React, { useState } from 'react';

const ConversionPeso = () => {
	const [gramos, setGramos] = useState(0);
	const [onzas, setOnzas] = useState(0);
	const [kilogramos, setKilogramos] = useState(0);
	const [libras, setLibras] = useState(0);

	const Gramos = () => {
		const valNum = document.getElementById('inputGramo').value;
		setGramos(valNum);
		setOnzas(valNum*0.035274)
		setKilogramos(valNum/1000)
		setLibras(valNum*0.0022046)
	}

	const Onzas = () => {
		const valNum = document.getElementById('inputOnza').value;
		setOnzas(valNum);
		setGramos(valNum/0.035274)
		setKilogramos(valNum/35.274)
		setLibras(valNum*0.0625)
	}

	const Kilogramos = () => {
		const valNum = document.getElementById('inputKilogramo').value;
		setKilogramos(valNum);
		setOnzas(valNum*35.274)
		setGramos(valNum*1000)
		setLibras(valNum*2.2046)
	}

	const Libras = () => {
		const valNum = document.getElementById('inputLibra').value;
		setLibras(valNum);
		setOnzas(valNum*16)
		setGramos(valNum/0.0022046)
		setKilogramos(valNum/2.2046)
	}

	return (
		<div className="container">
			<div id="conversion-peso"><p className="titul">Conversion de peso</p></div>
			<div></div>
			<p className="cuadros">
  			<label>Gramos</label>
  			<input id="inputGramo" type="number" onInput={Gramos} onChange={Gramos} value={gramos}/>
			</p>
			<p className="cuadros">
  			<label>Onzas</label>
  			<input id="inputOnza" type="number" onInput={Onzas} onChange={Onzas} value={onzas}/>
			</p>
			<p className="cuadros">
  			<label>Kilogramos</label>
  			<input id="inputKilogramo" type="number" onInput={Kilogramos} onChange={Kilogramos} value={kilogramos}/>
			</p>
			<p className="cuadros">
  			<label>Libras</label>
  			<input id="inputLibra" type="number" onInput={Libras} onChange={Libras} value={libras}/>
			</p>
		</div>
	);
};


export default ConversionPeso;
