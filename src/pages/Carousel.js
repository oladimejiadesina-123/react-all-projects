import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Carouselist() {
    return (
        <div>
                <Carousel 
                showThumbs={false}
                showStatus={false} 
                showIndicators={false}
                 >
                <div>
                    <img src='https://storage.googleapis.com/retrac/website/hero/protecedge.jpg'/>
                    <p >Legend 1</p>
                </div>
                <div>
                    <img src ='https://storage.googleapis.com/retrac/website/hero/RETRAC_MileStone_Bumper_Guard_LED_Light_Bar_2019_Volvo_VNL_300.jpg' />
                    <p>Legend 2</p>
                </div>
                <div>
                    <img src='https://storage.googleapis.com/retrac/website/hero/kenworth3.jpg'/>
                    <p>Legend 3</p>
                </div>
                <div>
                    <img src='https://storage.googleapis.com/retrac/website/hero/RETRAC_HighRise_Banner.jpg' alt="" />
                    <p>Legend 4</p>
                </div>
                <div>
                    <img src='https://storage.googleapis.com/retrac/website/hero/groupshot1.jpg'alt="" />
                    <p>Legend 5</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carouselist;
