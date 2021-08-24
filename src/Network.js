let Layer = require('./Layer.js');

class Network {
	constructor(structure){
		this.layers = [];

		for (let i = 0; i < structure.length; i++) {
			this.layers.push(new Layer(structure[i].units, structure[i].activation));
		}

		for (let i = 0; i < this.layers.length - 1; i++) {
			this.layers[i].connectLayers(this.layers[i + 1].units);
		}
	}

	feedforward() {
		for (let i = 0; i < this.layers.length - 1; i++) {
			this.layers[i].feedLayer(this.layers[i + 1]);
		}
	}
}

module.exports = Network;