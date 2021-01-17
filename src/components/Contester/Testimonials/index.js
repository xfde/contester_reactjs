import React from "react";
import {Col, Row,Icon} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Standard from "./Standard/index";
import {testimonialsData} from "./testimonialsData";
import CardBox from "components/CardBox/index";


class Testimonials extends React.Component {

  render() {
    const options2 = {
      dots: true,
      infinite: true,
      speed: 500,
      marginLeft: 10,
      marginRight: 10,
      slidesToShow: 2,
      slidesToScroll: 1, responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]

    };

    return (
      <div className="gx-main-content">
        <Row>
          <Col span={24}>
            <CardBox styleName="gx-text-center">

              <Icon style={{fontSize: 30}} type="message" />
              <h1>Testimoniale</h1>
              <Slider  {...options2}>
                <Standard testimonial={testimonialsData[0]}/>
                <Standard testimonial={testimonialsData[1]}/>
                <Standard testimonial={testimonialsData[2]}/>
                <Standard testimonial={testimonialsData[3]}/>
                <Standard testimonial={testimonialsData[4]}/>
                <Standard testimonial={testimonialsData[5]}/>
                <Standard testimonial={testimonialsData[6]}/>
              </Slider>
            </CardBox>
          </Col>
        </Row>
      </div>
    )
  };
}

export default Testimonials;
