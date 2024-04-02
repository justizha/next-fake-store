import { use } from "react";

async function getProduct(id: number) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);

	return res.json();
}

export default function Page({ params }: { params: { id: number } }) {
	const product = use(getProduct(params.id));
	return (
		<section>
			<article className="lg:px-20 py-24">
				<h2 className="text-2xl font-semibold">{product.title}</h2>
				<p className="text-base">{product.description}</p>
			</article>
		</section>
	);
}
