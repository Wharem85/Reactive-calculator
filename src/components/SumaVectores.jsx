import React, { useState } from 'react';
import Vector from './Vector';
import '../Assets/styles/sumaVectores.css';

const SumaVectores = () => {
	const [sumX, setSumX] = useState(0);
	const [sumY, setSumy] = useState(0);
	const [result, setResultante] = useState(0);
	const [tangente, setTangente] = useState(0);
	const [resultFinal, setResultfinal] = useState(0);
	const [resultFinalRes, setResultFinalRes] = useState(0);

	const vectores = () => {
		const vector1 = new Vector(
		document.getElementById('grad1').value,
		document.getElementById('magnitud1').value,
		document.getElementById('secv1').value,
		);

		const vector2 = new Vector(
		document.getElementById('grad2').value,
		document.getElementById('magnitud2').value,
		document.getElementById('secv2').value,
		);

		const vector3 = new Vector(
		document.getElementById('grad3').value,
		document.getElementById('magnitud3').value,
		document.getElementById('secv3').value,
		);

		const vector4 = new Vector(
		document.getElementById('grad4').value,
		document.getElementById('magnitud4').value,
		document.getElementById('secv4').value,
		);

		const sx = vector1.degradados().x + vector2.degradados().x + vector3.degradados().x + vector4.degradados().x;
		const sy = vector1.degradados().y + vector2.degradados().y + vector3.degradados().y + vector4.degradados().y;
		console.log('asdasdad',vector2.degradados());
		console.log('zxczxcasd',vector2.degradados());
		setSumX(sx);
		setSumy(sy);
		Resultante(sx, sy)
		Tangente(sx,sy)
	}


	const Resultante = (sx, sy) => {
		let cuadradoX = Math.pow(sx, 2);
		let cuadradoY = Math.pow(sy, 2);
		let res = Math.sqrt(cuadradoX + cuadradoY);
		setResultante(res);
		setResultFinalRes(res);
		ResultanteFinal(res);
	}

	const Tangente = (sx, sy) => {
		let div = sy / 	sx
		let tan = Math.atan(div)*(180/Math.PI);
		setTangente(tan);
		ResultanteFinal(tan);
	}

	const ResultanteFinal = (tan, res) => {
		let gra = 180-(tan);
		console.log('resultante final', res, gra);
		setResultfinal(gra);
	}

	const handleClick = () => {
		vectores()
	}



	return(
		<div className="container2">
			<div id="suma-vectores"><p className="titul3">Suma de vectores</p></div>
  		<label className="subtitle">Vector 1</label>
			<p className="container-small">
				<p className="subtitle2">Grados</p>
				<p className="subtitle2">Magnitud</p>
				<p className="subtitle2">Sector Vector1</p>
				<input className="inputs" placeholder="Grados" id="grad1" type="number"/>
				<input className="inputs" placeholder="Magnitud" id="magnitud1" type="number"/>
				<input className="inputs" id="secv1" placeholder="Sector 1" type="number"/>
			</p>
  		<label className="subtitle">Vector 2</label>
			<p className="container-small">
				<p className="subtitle2">Grados</p>
				<p className="subtitle2">Magnitud</p>
				<p className="subtitle2">Sector Vector2</p>
				<input className="inputs" placeholder="Grados" id="grad2" type="number"/>
				<input className="inputs" placeholder="Magnitud" id="magnitud2" type="number"/>
				<input className="inputs" id="secv2" placeholder="Sector 2" type="number"/>
			</p>
  		<label className="subtitle">Vector 3</label>
			<p className="container-small">
				<p className="subtitle2">Grados</p>
				<p className="subtitle2">Magnitud</p>
				<p className="subtitle2">Sector Vector3</p>
				<input className="inputs" placeholder="Grados" id="grad3" type="number"/>
				<input className="inputs" placeholder="Magnitud" id="magnitud3" type="number"/>
				<input className="inputs" id="secv3" placeholder="Sector 3" type="number"/>
			</p>
  		<label className="subtitle">Vector 4</label>
			<p className="container-small">
				<p className="subtitle2">Grados</p>
				<p className="subtitle2">Magnitud</p>
				<p className="subtitle2">Sector Vector4</p>
				<input className="inputs" placeholder="Grados" id="grad4" type="number"/>
				<input className="inputs" placeholder="Magnitud" id="magnitud4" type="number"/>
				<input className="inputs" id="secv4" placeholder="Sector 4" type="number"/>
			</p>
			<label className="subtitle">Suma de los vectores</label>
			<p className="container-small">
				<p className="subtitle2">Suma X</p>
				<p className="subtitle2">Suma Y</p>
				<p className="subtitle2">Tangente</p>
				<input className="inputs" placeholder="Suma X" id="sumax" type="number" value={sumX} readOnly/>
				<input className="inputs" placeholder="Suma Y" id="sumay" type="number" value={sumY} readOnly/>
				<input className="inputs" placeholder="Tangente" id="tangente" type="number" value={tangente} readOnly/>
			</p>
			<label className="subtitle">Resultante Final </label>
			<p className="container-small3">
				<p className="subtitle3">Grados</p>
				<p className="subtitle3">Resultante</p>
  			<input className="inputs" id="resultFinal" type="number" value={resultFinal} readOnly/>
				<input className="inputs" placeholder="Resultante Cuadrado" id="resultanteC" type="number" value={result} readOnly/>
			</p>
			<div className="boton">
				<button className="calcu" onClick={handleClick}>Calcular</button>
			</div>
		</div>
	);
};


export default SumaVectores;
