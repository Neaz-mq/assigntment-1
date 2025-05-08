{
    
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === undefined || toUpper === true) {
          return input.toUpperCase();
        } else {
          return input.toLowerCase();
        }
      }



      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
      }



      function concatenateArrays<T>(...arrays: T[][]): T[] {
        return ([] as T[]).concat(...arrays);
      }



      class Vehicle {
        private make: string;
        private year: number;
      
        constructor(make: string, year: number) {
          this.make = make;
          this.year = year;
        }
      
        getInfo(): string {
          return `Make: ${this.make}, Year: ${this.year}`;
        }
      }
      
      class Car extends Vehicle {
        private model: string;
      
        constructor(make: string, year: number, model: string) {
          super(make, year);
          this.model = model;
        }
      
        getModel(): string {
          return `Model: ${this.model}`;
        }
      }



      function processValue(value: string | number): number {
        if (typeof value === "string") {
          return value.length;
        } else {
          return value * 2;
        }
      }



      interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
          return null;
        }
      
        let mostExpensive: Product = products[0];
        for (let i = 1; i < products.length; i++) {
          if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
          }
        }
        return mostExpensive;
      }
      
      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      const mostExpensive = getMostExpensiveProduct(products);
      console.log(mostExpensive);
    
      
      const emptyProducts: Product[] = [];
      const mostExpensiveEmpty = getMostExpensiveProduct(emptyProducts);
      console.log(mostExpensiveEmpty);




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
        if (day >= Day.Monday && day <= Day.Friday) {
          return "Weekday";
        } else if (day === Day.Saturday || day === Day.Sunday) {
          return "Weekend";
        } else {
          return "Unknown";
        }
      }
      
      console.log(getDayType(Day.Monday));
      console.log(getDayType(Day.Friday));
      console.log(getDayType(Day.Saturday));
      console.log(getDayType(Day.Sunday));




      async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
          return Promise.reject(new Error("Negative number not allowed"));
        }
      
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(n * n);
          }, 1000);
        });
      }
      
      
    
}