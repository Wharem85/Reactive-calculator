	class Vector {
		constructor(grados, magnitud, sector) {
			this.grados = grados;
			this.magnitud = magnitud;
			this.sector = sector;
		}
		degradados() {
			let deg = this.grados*Math.PI/180;
			let	seno = Math.sin(deg);
			let cos = Math.cos(deg);
			let y = seno*this.magnitud;
			let x = cos*this.magnitud;
			if (this.sector == 2) {
				x = x * -1;
			} else if (this.sector == 3) {
				x = x *-1;
				y = y * -1;
			} else if (this.sector == 4) {
				y = y *-1;
			}
			if (this.grados ==0 && this.sector ==1) {
				y = x;
				x = 0;
			} else if (this.grados == 0 && this.sector ==4) {
				y = x
				x = 0;
			}
			return {x,y}
		}
	}

 export default Vector;
