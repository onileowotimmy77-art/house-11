import CommerceHeader from "@/components/commerce/CommerceHeader";

import CheckoutProgress from "@/components/checkout/CheckoutProgress";
import CheckoutSection from "@/components/checkout/CheckoutSection";

export default function CheckoutPage() {
  return (
    <main className="bg-black text-white">

      <CommerceHeader
        eyebrow="Checkout"
        title="Complete Your Order"
        description="One final step before these pieces become yours."
      />

      <CheckoutProgress />

      <CheckoutSection />

    </main>
  );
}