"use client";

import ProductCard from "./ProductCard";
import { featuredProducts } from "@/src/data/products";

export default function FeaturedProducts() {
  const [hero, ...products] = featuredProducts;

  return (
    <section className="mt-20">

      <div className="mb-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/40">
          Featured Pieces
        </p>
      </div>

      {/* Hero */}
      <ProductCard {...hero} featured />

      {/* Supporting */}
      <div className="mt-20 grid gap-12 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>

    </section>
  );
}