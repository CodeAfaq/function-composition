// funcion composition

const breadSlicing = (bread) => `${bread} is sliced`

const spreadMayonnise = (bread) => `Mayonnaise is spreaded on ${bread}`

const addFilling = (bread) => `Chicken Fillets are added to ${bread}`

const makeSandwich = (bread) => addFilling(spreadMayonnise(breadSlicing(bread)))

console.log(makeSandwich('whole wheat'))