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
      <article className="grid grid-cols-6 gap-6">
        {products.map((product: any) => (
          <div key={product.id}>
            <h2 className="hover: truncate">{product.title}</h2>
          </div>
        ))}
      </article>
    </section>
  );
}
