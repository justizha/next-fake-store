async function getPorduct() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
}

export default async function Products() {
  const products: any = await getPorduct();
  return (
    <section className="px-4 md:px-8 lg:px-12">
      {products.map((product: any) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </section>
  );
}
