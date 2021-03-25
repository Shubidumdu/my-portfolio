import React from 'react';
import Provider from './providers';
import VerticalCarouselContainer from './components/carousels/verticalCarousel/VerticalCarouselContainer';
import ThemeSwitch from './components/switch/ThemeSwitch';
import HomeSection from './items/verticalCarousel/HomeSection';
import ProfileSection from './items/verticalCarousel/ProfileSection';
import CareersSection from './items/verticalCarousel/CareersSection';
import ProjectsSection from './items/verticalCarousel/ProjectsSection';
import ActivitiesSection from './items/verticalCarousel/ActivitiesSection';
import ContactSection from './items/verticalCarousel/ContactSection';
import Layout from './components/layout/Layout';
import Content from './components/layout/Content';
import HeaderContainer from './components/layout/HeaderContainer';
// import ModalContainer from './components/modal/ModalContainer';

const App = () => {
  return (
    <Provider>
      <Layout>
        <HeaderContainer />
        <Content>
          <VerticalCarouselContainer>
            <HomeSection />
            <ProfileSection />
            <CareersSection />
            <ProjectsSection />
            <ActivitiesSection />
            <ContactSection />
          </VerticalCarouselContainer>
        </Content>
        <ThemeSwitch />
        {/* <ModalContainer /> */}
      </Layout>
    </Provider>
  );
};

export default App;
