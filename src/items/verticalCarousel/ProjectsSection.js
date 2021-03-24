import React from 'react';
import { Card as Container } from '../../components/carousels/verticalCarousel/VerticalCarousel';
import ProjectsCarousel from '../contentCarousel/ProjectsCarousel';

const ProjectsSection = () => {
  return (
    <Container>
      <ProjectsCarousel />
    </Container>
  );
};

export default ProjectsSection;
