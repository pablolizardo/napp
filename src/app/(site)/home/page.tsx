'use client'
import { useEffect, useState } from 'react';


import xtConfig from "@/xt";
import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";

const Page = () => {
  const [data, setData] = useState(null);

    useEffect(() => {
      // Función para realizar la solicitud a la API
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      // Llama a la función para realizar la solicitud cuando el componente se monta
      fetchData();
    }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al montar el componente

  return (
    <div>
      <header>
        <TypographyH1>Pricing</TypographyH1>
        <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>
      </header>

      <section>
        {xtConfig.content.pricing.map((plan) => {
          return (
            <div key={plan.title} className="pricing-plan">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <p>
                Precio: ${plan.price}/${plan.subscription}
              </p>
              <Button>Seleccionar</Button>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Page;
