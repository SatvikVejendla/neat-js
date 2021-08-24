
class Node {
	constructor(){
		this.value = 0;
		this.weights = [];
		this.numWeights = 0
	}

	generateRandomWeights(count) {
		this.numWeights = count;
		for (let i = 0; i < count; i++) {
			this.weights.push((Math.random() * 2) - 1);
		}
	}
}

module.exports = Node;