let crossovers = require('./crossovers/export.js');
let mutations = require('./mutations/export.js');
let selections = require("./selections/export.js")
let Genome = require('./Genome.js');

class NEAT {
	constructor(config){
		this.oldGenomes = [];
		this.model = config.model;
		this.populationSize = config.populationSize || 500;
		this.mutationRate = config.mutationRate || 0.05;

		let c_method = config.crossoverMethod || crossover['random'];
		let m_method = config.mutationMethod || mutate['random'];
		let s_method = config.selectionMethod || selections['roulette']
		this.crossoverMethod = crossovers[c_method];
		this.mutationMethod = mutations[m_method];
		this.selectionMethod = selections[s_method];


		this.generation = 0;
		this.population = new Array(this.populationSize);

		for (let i = 0; i < this.populationSize; i++) {
			this.population[i] = new Genome(this.model);
		}
	}

	bestGenome() {
		return this.oldGenomes[this.oldGenomes.map(i => i.fitness).indexOf(Math.max(...this.oldGenomes.map(i => i.fitness)))]
	}

	setInputs(array, index) {
		this.population[index].setInputs(array);
	}
	
	mutate() {
		for (let i = 0; i < this.populationSize; i++) {
			let genes = this.population[i].vectorizeGenes();
			genes = this.mutationMethod(genes, this.mutationRate);
			this.population[i].setGenes(genes);
		}
	}

	crossover() {
		for (let i = 0; i < this.populationSize; i++) {
			this.oldGenomes = Object.assign([], this.population);
			let parentx = this.selectGenome();
			let parenty = this.selectGenome();
			let genes = this.crossoverMethod(parentx.vectorizeGenes(), parenty.vectorizeGenes());
			this.population[i].setGenes(genes);
		}
	}

	selectGenome() {
		return this.selectionMethod(this.oldGenomes)
	}

	run_generation() {
		this.generation++;
		this.crossover();
		this.mutate();
	}

	

}

module.exports = NEAT;