module.exports = function (gx, gy) { // Randomly take genes from parentx or parenty and return newly created genes.
    let newGenes = [];

    for (let i = 0; i < gx.length; i++) {
        newGenes.push(Math.random() < 0.5 ? gx[i] : gy[i])
    }

    return newGenes;
}