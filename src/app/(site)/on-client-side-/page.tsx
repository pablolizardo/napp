'use client'

import { useEffect, useState } from 'react';


const Page = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    // Función para realizar la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llama a la función para realizar la solicitud cuando el componente se monta
    fetchData();
  }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al montar el componente

    return <div>
        <h1>on client side </h1>
        <p>
            Veniam laborum culpa ut sit est quis sint sunt sunt mollit non. Dolor anim quis elit magna. Pariatur tempor officia mollit anim velit adipisicing occaecat elit sunt adipisicing veniam irure in. Labore consectetur consequat incididunt voluptate sint. Aliquip cupidatat occaecat quis nisi duis. Aute minim ipsum dolor laboris nisi. Mollit cupidatat laboris nulla esse eu in officia occaecat consequat duis irure deserunt est.
        </p>
    </div>;
}
export default Page
