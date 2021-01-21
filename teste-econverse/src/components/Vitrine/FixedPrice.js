import Data from "../../data/data.json";

const useFixedPrice = () => {
  let fixedPrice = "";

  if (Data) {
    Data.filter((instrumento) => {
      const productPrice = instrumento.price.toString();
      const priceArray = productPrice.split("");

      //Ultimos dois numeros
      const lastNumbers = priceArray.splice(productPrice.length - 2);
      priceArray.push(",");

      const fixedPriceArr = priceArray.concat(lastNumbers);

      return (fixedPrice = fixedPriceArr.join(""));
    });
  }
  return [fixedPrice];
};

export default useFixedPrice;
