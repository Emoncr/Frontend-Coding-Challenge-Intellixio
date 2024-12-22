import dynamic from "next/dynamic";

const Products = dynamic(() => import("@/views/products"), { ssr: false }); // To escape pre-rendering issue

export default function ProductsRoot() {
  return <Products />;
}
