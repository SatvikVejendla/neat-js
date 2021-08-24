module.exports = function(oldGenomes) {

    oldGenomesCopy = oldGenomes.map(i => Math.pow(i.fitness, 2))
    let sum = oldGenomesCopy.reduce((a, b) => a + b, 0)

    for (let i = 0; i < oldGenomes.length; i++) {
        oldGenomes[i].fitness = Math.pow(oldGenomes[i].fitness, 2) / sum;
    }
    
    let index = 0;
    let r = Math.random();
    while (r > 0) {
        r -= oldGenomes[index].fitness;
        index += 1;
    }
    return oldGenomes[index-1];
}