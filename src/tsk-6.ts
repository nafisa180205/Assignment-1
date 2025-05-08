{
    interface Product {
        name: string;
        price: number;
      }
      
    function getMostExpensiveProduct(products: Product[]): Product | null{
        if (products.length === 0) {
            return null;
        }
        else{
            const expensivePoroduct =  products.reduce((maxPriceProduct, currentProduct) => (currentProduct.price > maxPriceProduct.price ? currentProduct : maxPriceProduct))
            return expensivePoroduct;
        }
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
    console.log(getMostExpensiveProduct(products));  
}