import { useEffect, useState } from 'react';
import type Product from '../models/product';
import { Catalog } from '../../features/catalog/Catalog';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => {
      const product: Product = {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        description: 'test',
        pictureUrl: 'https://picsum.photo/200',
        type: 'test',
        brand: 'test',
        quantityInStock: 100,
      };

      return [...prevState, product];
    });
  };

  return (
    <Container maxWidth='xl'>
      <Box display='flex' justifyContent='center' gap={3} marginY={3}>
        <Typography variant='h4'>Re-Store</Typography>
        <Button variant='contained' onClick={() => addProduct()}>
          Add product
        </Button>
      </Box>
      <Catalog products={products} addProduct={addProduct} />
    </Container>
  );
}

export default App;
