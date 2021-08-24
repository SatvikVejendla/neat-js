
test("Layer Values?", () => {
    const Layer = require("../src/Layer.js")

    let layer = new Layer(2, "input", "sigmoid")

    values = [1, -1]

    layer.setValues(values)

    expect(layer.getValues()).toStrictEqual(values)
})
