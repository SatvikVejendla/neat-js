

test("Network Calculations?", () => {

    const Network = require("../src/network.js")

    model_shape = [
        {
            units: 2,
            activation: "sigmoid"
        },
        {
            units: 3,
            activation: "sigmoid"
        }
    ]

    nn = new Network(model_shape)

    weights = [
        [ -0.7015780738051629, -0.9549247358687585, 0.6943056538317225 ],
        [ -0.19104701786391587, -0.5713990837939757, -0.5473510244339925 ]
    ];
    biases = [ -0.8570844853273574, -0.5311522262917223, 0.19068234239390325 ];

    nn.layers[0].setWeights(weights);
    nn.layers[0].setBiases(biases);


    nn.feedforward();

    let expected = [0.29794883992075805, 0.37024818966100465, 0.5475266679530045]

    expect(nn.layers.slice().pop().nodes.map(i => i.value)).toStrictEqual(expected)

});