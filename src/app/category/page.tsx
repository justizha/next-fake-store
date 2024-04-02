async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  return res.json();
}

export default async function Category() {
  const categories: any = await getCategories();
  return (
    <section>
      <article>
        {categories.map((category: any) => (
          <div key={category}>{category}</div>
        ))}
      </article>
    </section>
  );
}
