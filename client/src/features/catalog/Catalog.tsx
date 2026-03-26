import type Product from '../../app/models/product';
import ProductList from './ProductList';

type Props = {
  products: Product[];
  addProduct: () => void;
};

export const Catalog = ({ products, addProduct }: Props) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
