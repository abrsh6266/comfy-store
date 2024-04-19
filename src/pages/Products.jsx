import { Filters, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  return { products: response.data.data, meta: response.data.meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>
  );
};

export default Products;
