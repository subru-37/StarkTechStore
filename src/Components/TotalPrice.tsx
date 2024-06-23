const TotalPriceDiscounted = (items: any) => {
    return items
    .map(
      (value: any) =>
        Number(value.discprice.substring(2)) * value.quantity
    )
    .reduce((total: any, value: any) => total + value)
}
const TotalPriceMain = (items: any) => {
  return items
  .map(
    (value: any) =>
      Number(value.price.substring(2)) * value.quantity
  )
  .reduce((total: any, value: any) => total + value)
}
export {TotalPriceMain};
export default TotalPriceDiscounted