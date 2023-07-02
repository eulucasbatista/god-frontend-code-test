import React, { useEffect, useState } from "react";
import { CardCar } from "../src/components/CardCar";

interface IardCar{
  bodyType: string
  modelName: string
  modelType: string
  imageUrl: string
  id: string
}


function HomePage() {

  const [car, setCar] =useState<IardCar[]>([])

  useEffect(() => {
    const loadAPI = async () => {
      try {
        const response = await fetch('/api/cars.json');
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error('erro ao carregar api', error);
      }
    }
    loadAPI()
  },[])

  return (
    <React.StrictMode>
      {car.map((car) => {
        return(
          <CardCar 
            bodyType={car.bodyType}
            imageUrl={car.imageUrl} 
            modelName={car.modelName} 
            modelType={car.modelType} 
            key={car.id}
          />
        )
      })}
    </React.StrictMode>
  );
}

export default HomePage;
