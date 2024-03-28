//@xt-imports

import React, { Suspense } from 'react';
import xtConfig from "@/xt/lib/config";
import { xtSectionGap } from "@/xt/lib/styling";
const Home = async () => {

  const HomeComponents = () => {
    return xtConfig.components.landing.map(component => {
      const LazyComponent = React.lazy(() => import(`@/xt/templates/blocks/${component}.tsx`));
      return <LazyComponent key={component} />;
    });
  };
  return (
    <main className="grid justify-stretch text-center items-center p-6 md:p-12 lg:p-24" style={xtSectionGap}>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponents />
      </Suspense>
    </main>
  );
}

export default Home