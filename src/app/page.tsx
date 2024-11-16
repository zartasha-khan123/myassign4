import Brands from "@/components/brands";
import Browse from "@/components/Browse";
import Footer from "@/components/Footer";
import HappyCustomers from "@/components/happycostumer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import NewArrivals from "@/components/newarrivals";
import TopSelling from "@/components/topselling";

export default function Home() {
  return (
   <>

   <Header/>
   <Hero/>
   <Brands/>
   <NewArrivals/>
   <TopSelling/>
   <Browse/>
   <HappyCustomers/>
   <Footer/>
   </>
  );
}
