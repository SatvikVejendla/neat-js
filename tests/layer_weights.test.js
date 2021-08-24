
test("Layer Weights?", () => {
    const Layer = require("../src/Layer.js")

    let layer = new Layer(2, "input", "sigmoid")
    
    weights = [[ 0.9179561501434805, 0.5577457235561223, 0.13717475867190432 ], [ -0.4687001528971275, 0.27024542456046197, 0.9153633301469815 ]]

    layer.setWeights(weights)

    expect(layer.getWeights()).toStrictEqual(weights)

})
