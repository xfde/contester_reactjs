import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RoadMapItem from "./RoadMapItem";
import CardBox from "components/CardBox/index";

class RoadMap extends Component {

  render() {

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      marginLeft: 10,
      marginRight: 10,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let arr = [0,1,2,3]
    return (
      <CardBox styleName="gx-card-full" heading={''}>
        <Slider className="gx-slick-slider" {...settings}>
          {arr.map((media, index) =>
            <RoadMapItem key={index} data={media}/>
          )
          }
        </Slider>
      </CardBox>
    );
  }
}

export default RoadMap;