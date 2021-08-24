let Network = require('./Network.js');

class Genome {
	constructor(model){
		this.network = new Network(model);

		this.fitness = 0;
	}

	activate(inputs) {
		this.network.layers[0].setValues(inputs)
		this.network.feedforward();

		return this.network.layers[this.network.layers.length - 1].nodes.map(i => i.value);
	}

	vectorizeGenes() {
		let genes = [];

		this.network.layers.forEach(i => {
			i.nodes.forEach(w => {
				w.weights.forEach(e => {
					genes.push(e)
				})
			})
			i.bias.weights.forEach(w => {
				genes.push(w)
			})
		})

		return genes;
	}

	setGenes(genes) {
		for (let i = 0; i < this.network.layers.length - 1; i++) {
			for (let w = 0; w < this.network.layers[i].units; w++) {
				for (let e = 0; e < this.network.layers[i].nodes[w].numWeights; e++) {
					this.network.layers[i].nodes[w].weights[e] = genes[0];
					genes.splice(0, 1);
				}
			}

			for (let w = 0; w < this.network.layers[i].bias.numWeights; w++) {
				this.network.layers[i].bias.weights[w] = genes[0];
				genes.splice(0, 1);
			}
		}
	}


}

module.exports = Genome;