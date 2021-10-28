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
import AccessPointChart from './AccessPointChart';
import Heatmap from './Heatmap';

import '../styles/carouselGraph.css';

const CarouselGraphPage = props => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        interval={60000}
        showControls={true}
        showIndicators={true}
        className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <p className="h3-responsive">Attraction Power</p>
            <p className="desc">Total Visitors: {props.totalVisitors}</p>
            <AttractionPowerGraph
              totalExhibits={props.totalExhibits}
              totalExhibitsVisited={props.totalExhibitsVisited}
              attractionPower={props.attractionPower}
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <p className="h3-responsive">Revisiting Power</p>
            <RevisitingPowerGraph
              totalExhibits={props.totalExhibits}
              totalExhibitsVisited={props.totalExhibitsVisited}
              revisitingPower={props.revisitingPower}
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <p className="h3-responsive">Types of Visitors</p>
            <VisitorsDoughnutGraph
              schoolCounter={props.schoolCounter}
              familyCounter={props.familyCounter}
              otherCounter={props.otherCounter}
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <p className="h3-responsive">Users Connected per Access Point</p>
            <AccessPointChart
              totalAccessPoints={props.totalAccessPoints}
              userPerAccessPointConnection={props.userPerAccessPointConnection}
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <p className="h3-responsive">Heatmap</p>
            <p className="desc">Visitors' movement is displayed</p>
            <Heatmap
              rangeX={props.rangeX}
              rangeY={props.rangeY}
              finalGroupMovementCoords={props.finalGroupMovementCoords}
              numberOfVisitorsPerGroup={props.numberOfVisitorsPerGroup}
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselGraphPage;
