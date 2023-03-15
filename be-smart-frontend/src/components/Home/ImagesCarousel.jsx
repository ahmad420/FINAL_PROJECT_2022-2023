import React from 'react'
import {
      MDBCarousel,
      MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function ImagesCarousel() {
      return (
            <div className='ImagesCarousel'>
                  <MDBCarousel showControls dealy={2000}>
                        <MDBCarouselItem
                              className='w-100 d-block'
                              itemId={1}
                              src='https://www.clickpost.ai/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/176%29-warehouse-management.webp'
                              alt='...'
                        />
                        <MDBCarouselItem
                              className='w-100 d-block'
                              itemId={2}
                              src='https://ithinklogistics.com/blog/wp-content/uploads/2019/12/functions-of-wms-1.jpg'

                              alt='...'
                        />
                        <MDBCarouselItem
                              className='w-100 d-block'
                              itemId={3}
                              src={require("../../Images/jpeg.jpeg")}
                              alt='...'
                        />
                  </MDBCarousel>
            </div>
      );
}
