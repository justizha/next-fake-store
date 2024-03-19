import { use } from "react";

async function getProduct(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
}

export default function Page({ params }: { params: { id: number } }) {
  const product = use(getProduct(params.id));
  return (
    <section>
      <article className="lg:px-20">
        <div className="">{product.title}</div>
        <div className="">{product.description}</div>
      </article>
    </section>
  );
}
