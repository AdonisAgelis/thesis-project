import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact';

import '../styles/carouselGraph.css';

const CarouselGraphPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        interval={10000}
        showControls={true}
        showIndicators={true}
        className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            {/* <MDBView>
              <MDBMask overlay="black-light" />
            </MDBView> */}
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Attraction Power</h3>
              <p>This graph displays the number of visitors per exhibit</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            {/* <MDBView>
              <MDBMask overlay="black-strong" />
            </MDBView> */}
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Revisiting Power</h3>
              <p>This graph displays the number of revisits per exhibit</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            {/* <MDBView>
              <MDBMask overlay="black-slight" />
            </MDBView> */}
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Heatmap</h3>
              <p>
                This heatmap portrays the visitors' movement throughout the
                museum
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselGraphPage;
