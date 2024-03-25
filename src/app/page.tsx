//@xt-imports

import xtConfig from "@/xt/lib/config";
import { xtSectionGap } from "@/xt/lib/styling";
import React from "react";

const Home = async () => {

  const Hero = React.lazy(() => import(`@/xt/templates/components/landing/hero/${xtConfig.components.landing.hero}.tsx`))
  const Testimonial = React.lazy(() => import(`@/xt/templates/components/landing/testimonials/${xtConfig.components.landing.testimonials}.tsx`))
  const Team = React.lazy(() => import(`@/xt/templates/components/landing/team/${xtConfig.components.landing.team}.tsx`))
  const Pricing = React.lazy(() => import(`@/xt/templates/components/landing/pricing/${xtConfig.components.landing.pricing}.tsx`))
  return (
    <main className="grid justify-center text-center items-center p-6 md:p-12 lg:p-24" style={xtSectionGap}>
      <Hero />
      <Testimonial />
      <Team />
      <Pricing />
      {/*@xt-faq*/}
      {/*@xt-pricing*/}
      {/*@xt-features*/}
      {/*@xt-contact*/}
      {/*@xt-map*/}
      {/*@xt-footer*/}
    </main>
  );
}

export default Home