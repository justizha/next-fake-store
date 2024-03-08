import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <section className="px-6">
        <div className="py-32">
          <h1 className="mb-5 text-2xl font-bold  md:text-3xl lg:text-5xl">
            Fake Store
          </h1>
          <p className="max-w-lg text-sm tracking-wide md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corporis quos, consectetur nisi mollitia autem, deserunt facere
            deleniti quo harum distinctio numquam temporibus, repudiandae
            repellendus.
          </p>
        </div>
      </section>
    </main>
  );
}
