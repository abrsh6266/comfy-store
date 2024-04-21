import { Filters, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });
  return { products: response.data.data, meta: response.data.meta, params };
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
