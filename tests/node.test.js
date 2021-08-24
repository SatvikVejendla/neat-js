test("Node Weights?", () => {
    const Node = require("../src/Node.js")

    let n = new Node();

    n.generateRandomWeights(3);

    for(let i= 0; i < n.weights; i++){
        expect(n.weights[i]).toBeLessThan(1)
        expect(n.weights[i]).toBeGreaterThan(-1);
    }
})