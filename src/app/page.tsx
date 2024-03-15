"use client";
import { useState } from "react";
import { Store } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <section className="px-4 md:px-16 lg:px-24">
        <article className="flex flex-col justify-between py-32 md:flex-row items-center">
          <div>
            <h1 className="mb-5 text-2xl font-bold  md:text-3xl lg:text-5xl">
              Fake Store
            </h1>
            <p className="max-w-lg text-base tracking-wide md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              corporis quos, consectetur nisi mollitia autem, deserunt facere
              deleniti quo harum distinctio numquam temporibus, repudiandae
              repellendus.
            </p>
          </div>
          <div className="">
            <Store size={200} />
          </div>
        </article>
      </section>
    </main>
  );
}
