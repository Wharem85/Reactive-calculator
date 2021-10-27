import React, { useState } from 'react';

const ConversionTiempo = () => {
	const [segundos, setSegundos] = useState(0);
	const [minutos, setMinutos] = useState(0);
	const [horas, setHoras] = useState(0);
	const [dias, setDias] = useState(0);
	const [years, setYears] = useState(0);

	const Segundos = () => {
		const valNum = document.getElementById('inputSegundos').value;
		setSegundos(valNum);
		setMinutos(valNum/60)
		setHoras(valNum/3600)
		setDias(valNum/86400)
		setYears(valNum/3.154e+7)
	}

	const Minutos = () => {
		const valNum = document.getElementById('inputMinutos').value;
		setMinutos(valNum)
		setSegundos(valNum*60);
		setHoras(valNum/60)
		setDias(valNum/1440)
		setYears(valNum/525600)
	}

	const Horas = () => {
		const valNum = document.getElementById('inputHoras').value;
		setHoras(valNum)
		setSegundos(valNum*3600);
		setMinutos(valNum*60)
		setDias(valNum/24)
		setYears(valNum/8760)
	}

	const Dias = () => {
		const valNum = document.getElementById('inputDias').value;
		setDias(valNum)
		setSegundos(valNum*86400);
		setMinutos(valNum*1440)
		setHoras(valNum*24)
		setYears(valNum/365)
	}

	const Years = () => {
		const valNum = document.getElementById('inputYears').value;
		setYears(valNum)
		setSegundos(valNum*3.154e+7);
		setMinutos(valNum*525600)
		setHoras(valNum*8760)
		setDias(valNum*365)
	}

	return(
		<div className="container">
			<div id="conversion-tiempo"><p className="titul">Conversion de tiempo</p></div>
			<div></div>
			<p className="cuadros">
  			<label>Segundos</label>
  			<input id="inputSegundos" type="number" onInput={Segundos} onChange={Segundos} value={segundos}/>
			</p>
			<p className="cuadros">
  			<label>Minutos</label>
  			<input id="inputMinutos" type="number" onInput={Minutos} onChange={Minutos} value={minutos}/>
			</p>
			<p className="cuadros">
  			<label>Horas</label>
  			<input id="inputHoras" type="number" onInput={Horas} onChange={Horas} value={horas}/>
			</p>
			<p className="cuadros">
  			<label>Dias</label>
  			<input id="inputDias" type="number" onInput={Dias} onChange={Dias} value={dias}/>
			</p>
			<p className="cuadros">
  			<label>años</label>
  			<input id="inputYears" type="number" onInput={Years} onChange={Years} value={years}/>
			</p>
		</div>
	);
};


export default ConversionTiempo;
