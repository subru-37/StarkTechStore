const TotalPriceDiscounted = (items: any) => {
    return items
    .map(
      (value: any) =>
        {const discprice = value.price
        Number(discprice) * value.quantity
        }
    )
    .reduce((total: any, value: any) => total + value)
}
const TotalPriceMain = (items: any) => {
  return items
  .map(
    (value: any) =>
      Number(value.price) * value.quantity
  )
  .reduce((total: any, value: any) => total + value)
}
export {TotalPriceMain};
export default TotalPriceDiscounted