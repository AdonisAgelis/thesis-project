import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
} from 'mdbreact';

import AttractionPowerGraph from './AttractionPowerGraph';
import RevisitingPowerGraph from './RevisitingPowerGraph';
import VisitorsDoughnutGraph from './VisitorsDoughnutGraph';

import '../styles/carouselGraph.css';

const CarouselGraphPage = props => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        interval={50000}
        showControls={true}
        showIndicators={true}
        className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <p className="h3-responsive">Attraction Power</p>
            <AttractionPowerGraph />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <p className="h3-responsive">Revisiting Power</p>
            <RevisitingPowerGraph />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <p className="h3-responsive">Type of Visitors</p>
            <VisitorsDoughnutGraph />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <p className="h3-responsive">Heatmap</p>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselGraphPage;
