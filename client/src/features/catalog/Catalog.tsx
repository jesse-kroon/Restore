import type Product from '../../app/models/product';
import ProductList from './ProductList';

type Props = {
  products: Product[];
};

export const Catalog = ({ products }: Props) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
