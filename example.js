const NEAT = require("./index.js")


let config = {
    model: [
        { units: 2},
        { units: 1, activation: "relu"}
    ],
    populationSize: 500,
    mutationRate: 0.05,
	crossoverMethod: "uniform",
	mutationMethod: "random",
    selectionMethod: "roulette"
}

let nn = new NEAT(config)


let data = [
    {
        input: [0,0],
        output: [1]
    }
]

for(let z = 0; z < 100; z++){
    for(genome of nn.population){

        let fitness = 1;

        for(let v of data){
            let output = genome.activate(v.input)
            fitness -= Math.abs(v.output[0] - output)
        }

        genome.fitness = fitness;
    }
    nn.run_generation()
}


//let c = nn.population[nn.bestGenome()]

let c = nn.bestGenome()

let output = c.activate([0,0])

console.log(output)