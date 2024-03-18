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
    <section className="px-4 py-20 md:px-8 lg:px-12">
      <article className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col justify-between pt-10 border  shadow dark:border-stone-500 rounded"
          >
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="mb-4 w-52"
              />
            </div>
            <div className="border-t px-2 py-1">
              <h2 className="truncate text-lg">{product.title}</h2>
              <p className="text-sm">{product.descr}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
