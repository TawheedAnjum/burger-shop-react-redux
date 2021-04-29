const Price = (props) => {
  const p = props.orderPrice;
  let newitemPrice = null;
  switch (props.itemName) {
    case "salad":
      newitemPrice = p.salad * props.itemValue;
      break;
    case "chees":
      newitemPrice = p.chees* props.itemValue;
      break;
    case "meat":
      newitemPrice = p.meat* props.itemValue;
      break;
    default:
      newitemPrice = null ;
      break;
  }
  return newitemPrice;
};

export default Price;