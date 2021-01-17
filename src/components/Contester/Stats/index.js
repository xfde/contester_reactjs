import React from "react";
import CardBox from "components/CardBox/index";
import { Row,Col,Card,Icon} from 'antd';
import IconWithTextCard from "components/Metrics/IconWithTextCard";
import TwoSimplePieChart from "./Components/Components/TwoSimplePieChart";
import SimpleRadarChar from "./Components/Components/SimpleRadarChart";

const pannelStyle ={
  backgroundColor: 'rgba(51, 51, 51, 1)',
};

const Stats = () => (
  <Row>
    <Col span={24}>
      <CardBox styleName="gx-text-center">
      <Icon style={{fontSize: 30}} type="line-chart" />
      <h1>Statistici</h1>
      <Row>
        <Col xl={8} lg={8} md={8} sm={12} xs={24} className="gx-col-full">
          <Card style={pannelStyle}>
        <TwoSimplePieChart/>
        <p className="gx-mb-0 gx-text-primary">Raport privind gradul de informare al elevilor despre concursuri</p>
        </Card>
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={24} className="gx-col-full">
        <Card style={pannelStyle}>
        <SimpleRadarChar/>
        <p className="gx-mb-0 gx-text-primary">Principalele surse de informare despre concursurile ale elevilor</p>
        </Card>
        </Col>
       
        <Col xl={8} lg={8} md={8} sm={12} xs={24} className="gx-col-full">
        <IconWithTextCard icon="usergroup-add"  iconColor="primary" title="238" subTitle="Elevi au participat la chestionar"/>
        <IconWithTextCard icon="like" iconColor="primary" title="89%" subTitle="Elevi ce cosideră inițiativa Contester benefică"/>
        </Col>
      </Row>
      </CardBox>
    </Col>
  </Row>
);
export default Stats;
