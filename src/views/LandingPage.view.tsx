import React, { ReactElement } from 'react';

import {
   Details,
   Features,
   Footer,
   Hero,
   LetsTry,
   SectionContainer,
   Stats,
} from '../components/landing-page';
import { BaseLayout } from '../components/layouts/BaseLayout/Base.layout';

const LandingPage = (): ReactElement => {
   return (
      <BaseLayout>
         <SectionContainer sectionId='hero'>
            <Hero />
         </SectionContainer>
         <SectionContainer>
            <Stats />
         </SectionContainer>
         <SectionContainer sectionId='features'>
            <Features />
         </SectionContainer>
         <SectionContainer sectionId='about'>
            <Details />
         </SectionContainer>
         <SectionContainer>
            <LetsTry />
         </SectionContainer>
         <SectionContainer>
            <Footer />
         </SectionContainer>
      </BaseLayout>
   );
};

export { LandingPage };
