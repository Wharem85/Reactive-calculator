import React, { useState } from 'react';
import aceleracion from "../Assets/img/a.png";
import auk from "../Assets/img/auk.png";
import a22 from "../Assets/img/a22.png";
import fr from "../Assets/img/fr.png";
import maza from "../Assets/img/m.png";
import p1 from "../Assets/img/p1.png";
import p2 from "../Assets/img/p2.png";
import t from "../Assets/img/t.png";
import peso from "../Assets/img/W.png";
import '../Assets/styles/segundaLey.css'

const Segunda = () => {
	const [Masa1, setMasa] = useState(0);
	const [coeficiente1, setUk] = useState(0);
	const [fuerza1, setFuerza] = useState(0);
	const [fuerzay1, setFuerzay] = useState(0);
	const [aceleracion1, setAceleracion] = useState(0);
	const [Tencion1, setTencion] = useState(0);
	const [Bloquea1, setBloquea] = useState(0);
	const [Bloqueb1, setBloqueb] = useState(0);
	const [Masa3, setMasa2] = useState(0);
	const [Masa5, setMasa3] = useState(0);
	const [coeficiente3, setUk2] = useState(0);
	const [fuerza3, setFuerza2] = useState(0);
	const [fuerzaR1, setFuerzaR] = useState(0);
	const [aceleracion3, setAceleracion2] = useState(0);

	const gravedad1 = 9.81;
	const gravedad = 9.8;
	const mult = fuerzay1*coeficiente1;
	const nt = Masa3*gravedad1;
	const w = parseFloat(Bloqueb1)-parseFloat(Bloquea1);
	const m = parseFloat(Masa3)+parseFloat(Masa5);
	const s = parseFloat(w)/parseFloat(m);

	const Masa = () => {
		const valNum = document.getElementById('masa').value;
		setMasa(valNum);
		setFuerzay(valNum*gravedad1);
	}

	const Coeficiente = () => {
		const valNum = document.getElementById('uk').value;
		setUk(valNum);
	}

	const Fuerza = () => {
		const valNum = document.getElementById('fuerza').value;
		setFuerza(valNum);
		setMasa(valNum/gravedad1);
		setAceleracion((valNum-mult)/Masa1);
	}

	const Fuerzay = () => {
		const valNum = document.getElementById('fuerzay').value;
		setFuerzay(valNum);
		setMasa(valNum/gravedad1);
	}

	const Aceleracion = () => {
		const valNum = document.getElementById('aceleracion').value;
		setAceleracion(valNum);
		setFuerza(Masa1*valNum);
	}

	// Constantes para la tencion

	const Masa2 = () => {
		const valNum = document.getElementById('masa2').value;
		setMasa2(valNum);
		setBloquea(valNum*gravedad);
	}

	const Masa4 = () => {
		const valNum = document.getElementById('masa3').value;
		setMasa3(valNum);
		setBloqueb(valNum*gravedad);
	}


	const Fuerza2 = () => {
		const valNum = document.getElementById('fuerza2').value;
		setFuerza2(valNum);
		// setBloquea(valNum*coeficiente3);
	}

	const FuerzaR = () => {
		const valNum = document.getElementById('fuerzar')
		setFuerzaR(valNum);
	}

	const Aceleracion2 = () => {
		const valNum = document.getElementById('aceleracion2').value;
		setAceleracion2(valNum);
		setTencion((Masa3*valNum)+fuerzaR1)
	}

	const Coeficiente2 = () => {
		const valNum = document.getElementById('uk2').value;
		setUk2(valNum);
		setFuerzaR(coeficiente3*Bloquea1);
		// setBloquea(nt*valNum);
	}

	const Tencion = () => {
		const valNum = document.getElementById('tencion').value;
		setTencion(valNum);
	}

	const BloqueA = () => {
		const valNum = document.getElementById('bloquea').value;
		setBloquea(valNum);
		setAceleracion2(s);
		setFuerzaR(coeficiente3*valNum)
	}

	const BloqueB = () => {
		const valNum = document.getElementById('bloqueb').value;
		setBloqueb(valNum);
	}


		return(
		<div>
			<div id="segunda-newton"><h1 className="titul8">Segunda ley de newton</h1></div>
			<label className="subtitle">Cuando un objeto esta en un lugar plano</label>
			<p className="container-small2">
  			<label className="subtitle2">Masa</label>
				<label className="subtitle2">Uk</label>
				<label className="subtitle2">Fuerza</label>
  			<input id="masa" className="inputs" type="number" onInput={Masa} onChange={Masa} value={Masa1}/>
				<input id="uk" className="inputs" type="number" onInput={Coeficiente} onChange={Coeficiente} value={coeficiente1}/>
				<input id="fuerza" className="inputs" type="number" onInput={Fuerza} onChange={Fuerza} value={fuerza1}/>
			</p>
			<p className="container-small3">
  			<label className="subtitle3">Peso</label>
				<label className="subtitle3">Aceleracion</label>
  			<input className="inputs" id="fuerzay" type="number" onInput={Fuerzay} onChange={Fuerzay} value={fuerzay1}/>
				<input className="inputs" id="aceleracion" type="number" onInput={Aceleracion} onChange={Aceleracion} value={aceleracion1}/>
			</p>
			<div className="imagenes">
				<img className="imagenes-formulas" src={aceleracion} alt="imagen-aceleracion"/>
				<img className="imagenes-formulas" src={auk} alt="uk"/>
				<img className="imagenes-formulas" src={maza} alt="maza"/>
			</div>
			<img className="imagenes-formula" src={peso} alt="peso"/>
			<p className="subtitle">Segunda ley de Newton con tencion</p>
			<p className="container-small5">
  			<label className="subtitle2">Masa</label>
				<label className="subtitle2">Masa del objeto 2</label>
				<label className="subtitle2">Uk</label>
				<label className="subtitle2">Fuerza</label>
  			<input className="inputs" id="masa2" type="number" onInput={Masa2} onChange={Masa2} value={Masa3}/>
				<input className="inputs" id="masa3" type="number" onInput={Masa4} onChange={Masa4} value={Masa5}/>
				<input className="inputs" id="uk2" type="number" onInput={Coeficiente2} onChange={Coeficiente2} value={coeficiente3}/>
				<input className="inputs" id="fuerza2" type="number" onInput={Fuerza2} onChange={Fuerza2} value={fuerza3}/>
			</p>
			<p className="container-small5">
  			<label className="subtitle2">Fuerza de rozamiento</label>
				<label className="subtitle2">Bloque u objeto A</label>
				<label className="subtitle2">Bloque u objeto B</label>
				<label className="subtitle2">Tencion</label>
  			<input className="inputs" id="fuerzar" type="number" onInput={FuerzaR} onChange={FuerzaR} value={fuerzaR1}/>
				<input className="inputs" id="bloquea" type="number" onInput={BloqueA} onChange={BloqueA} value={Bloquea1}/>
				<input className="inputs" id="bloqueb" type="number" onInput={BloqueB} onChange={BloqueB} value={Bloqueb1}/>
				<input className="inputs" id="tencion" type="number" onInput={Tencion} onChange={Tencion} value={Tencion1}/>
			</p>
			<p className="cuadros2">
				<label className="subtitle4">Aceleracion</label>
  			<input className="inputs2" id="aceleracion2" type="number" onInput={Aceleracion2} onChange={Aceleracion2} value={aceleracion3}/>
			</p>
			<div className="imagenes">
				<img className="imagenes-formulas" src={p1} alt="peso1"/>
				<img className="imagenes-formulas" src={p2} alt="peso2"/>
				<img className="imagenes-formulas" src={fr} alt="fuerza-Rozamiento"/>
				<img className="imagenes-formulas2" src={a22} alt="aceleracion"/>
				<img className="imagenes-formulas2" src={t} alt="tencion"/>
			</div>
		</div>
	);
};


export default Segunda;
