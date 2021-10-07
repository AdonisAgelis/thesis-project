import React from 'react';
import {
  MDBCarousel,
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
        interval={30000}
        showControls={true}
        showIndicators={true}
        className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <p className="h3-responsive">Attraction Power</p>
            <AttractionPowerGraph
              totalExhibitsVisited={props.totalExhibitsVisited}
              attractionPower={props.attractionPower}
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <p className="h3-responsive">Revisiting Power</p>
            <RevisitingPowerGraph />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <p className="h3-responsive">Type of Visitors</p>
            <VisitorsDoughnutGraph
              schoolCounter={props.schoolCounter}
              familyCounter={props.familyCounter}
              otherCounter={props.otherCounter}
            />
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
