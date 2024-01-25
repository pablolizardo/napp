
const fetchClientImports = `import { useEffect, useState } from 'react';`

const fetchClientFunctionSign = 'const Page = () => {'

const fetchClientInsidePage = `const [data, setData] = useState(null);

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
`

module.exports = {
  fetchClientImports,
  fetchClientFunctionSign,
  fetchClientInsidePage
}