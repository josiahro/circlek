export const productList: Product[] = [
    {
        imageSrc: "/product_images/arizona.png",
        title: "FREE",
        subTitle: "Arizona",
        description: "680 ml. Any variety.",
        id: "arizona",
        location: "FOR USE IN ONTARIO",
        plu: "6455",
      },
      {
        imageSrc: "/product_images/guru-energy-drink.png",
        title: "FREE",
        subTitle: "Guru Energy Drink",
        description: "355ml. Any variety.",
        id: "guru-energy-drink",
        location: "FOR USE IN ONTARIO",
        plu: "6418",
      },
      {
        imageSrc: "/product_images/small-hot-beverage.png",
        title: "FREE",
        subTitle: "Small Hot Beverage",
        description: "Coffee, specialty cofee, hot chocolate, or tea.",
        id: "small-hot-beverage",
        location: "FOR USE IN ONTARIO",
        plu: "6391",
      },
      {
        imageSrc: "/product_images/small-froster.png",
        title: "FREE",
        subTitle: "Small Froster",
        description: "",
        id: "small-froster",
        location: "FOR USE IN ONTARIO",
        plu: "6390",
      },
      {
        imageSrc: "/product_images/medium-polar-pop.png",
        title: "FREE",
        subTitle: "Medium Polar Pop",
        description: "",
        id: "medium-polar-pop",
        location: "FOR USE IN ONTARIO",
        plu: "6394",
      },
      {
          imageSrc: "/product_images/powerade.png",
          title: "FREE",
          subTitle: "Powerade",
          description: "710ml. Any variety.",
          id: "powerade",
          location: "FOR USE IN ONTARIO",
          plu: "6419",
      }
    // Add more product/item objects as needed
  ];
  
  interface Product {
    imageSrc: string;
    title: string;
    subTitle: string;
    description: string;
    id: string;
    location: string;
    plu: string;
  }
  