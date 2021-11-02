export const customCountLength = (array) => {
    return array.map(product => product.quantity).reduce((accum, current) => accum + current, 0)
}


export const countTotal = (array) => {
    return array.map((product) => product.quantity * product.price)
        .reduce((current, accum) => current + accum, 0)
}


export const subTotal = (quantity, price) => {
    return quantity * price
}