import BuyAgain from "@/components/buyAgain";
import Category from "@/components/category";
import DeliveryOption from "@/components/deliveryOption";
import FeaturedProducts from "@/components/featuredProducts";
import Hero from "@/components/hero";
import Promotions from "@/components/promotions";
import Recipes from "@/components/recipes";
import Testimonial from "@/components/testimonial";


export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Category />
      <Promotions />
      <DeliveryOption />
      <BuyAgain />
      <Recipes />
      <Testimonial />
    </main>
  );
}
