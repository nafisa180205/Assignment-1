{

    function formatString(input: string, toUpper?: boolean): string{
        
       if(  toUpper === undefined || toUpper === true){
        return input.toUpperCase()
       }
       else{
        return input.toLowerCase()
       }
    }

}

{

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        let books : { title: string; rating: number }[] = items.filter((item) => item.rating > 4 )
        return books
    }


    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
      
}

{
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const concatedArray = arrays.reduce((firstArray, secondArray) => firstArray.concat(secondArray))
        return concatedArray
    }

}
{
    class Vehicle{
        private make: string;
        public year: number;
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }
        
        public getInfo(){
            return (`Make: ${this.make}, Year: ${this.year}`)
        }
    } 

    class Car extends Vehicle{
        private model : string

        constructor(make: string, year: number,model: string){
            super(make,year)
            this.model = model
        }

        public getModel(){
            return (`Model: ${this.model}`)
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
}

{
    //

    function processValue(value: string | number): number{
        if(typeof value === "string"){
            return value.length
        }else{
            return value * 2
        }
    }


}

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
      

}

{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        if (day === Day.Monday || day === Day.Tuesday || day === Day.Wednesday || day === Day.Thursday  || day === Day.Friday) {
          return "Weekday";
        } 

        return "Weekend"
      }


}

{
    async function squareAsync(n: number): Promise<number>{
        if(n <0 ){
            console.error("Error: Negative number not allowed")
        }
        
        return new Promise((resolve,reject) => {
            setTimeout(() => { resolve(n * n)}, 1000);
          });
    }


}