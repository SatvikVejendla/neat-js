let Node = require('./Node.js');
let activations = require("./activations/export.js")

class Layer {
	constructor(units, activation){
		
		this.activation = activations[activation];

		this.units = units;
		this.nodes = new Array(units)
		for (let i = 0; i < units; i++) {
			this.nodes[i] = new Node();
		}

		this.bias = new Node();
	}


	feedLayer(layer) {
	
		for (let i = 0; i < this.units; i++) {
			for (let w = 0; w < this.nodes[i].numWeights; w++) {
				layer.nodes[w].value = this.nodes[i].value * this.nodes[i].weights[w];
			}
		}

		for (let w = 0; w < this.bias.numWeights; w++) {
			layer.nodes[w].value += this.bias.weights[w];
			layer.nodes[w].value = layer.activation(layer.nodes[w].value)
		}

	}
	
	connectLayers(count) {
		this.bias.generateRandomWeights(count);
		for (let i = 0; i < this.units; i++) {
			this.nodes[i].generateRandomWeights(count);
		}

	}

	getValues() {
		let result = [];
		for (let i = 0; i < this.units; i++) {
			result.push(this.nodes[i].value);
		}
		return result;
	}

	setValues(values) {
		for (let i = 0; i < this.units; i++) {
			this.nodes[i].value = values[i];
		}
	}

	getWeights(){
		return this.nodes.map(i => i.weights)
	}

	setWeights(arr){
		arr.forEach((_, i) => {
			this.nodes[i].weights = arr[i];
		})
	}

	getBiases(){
		return this.bias.map(i => i.value);
	}

	setBiases(arr){
		this.bias.weights = arr;
	}
}

module.exports = Layer;