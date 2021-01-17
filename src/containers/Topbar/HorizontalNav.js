import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu,Icon} from "antd";
import {Link} from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";


{/*const SubMenu = Menu.SubMenu;*/}

class HorizontalNav extends Component {

  getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";

    }
  };

  render() {
    const {pathname, navStyle} = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (

      <Menu
        defaultOpenKeys={[defaultOpenKeys]}
        selectedKeys={[selectedKeys]}
        mode="horizontal">
          <Menu.Item key="home">
            <Link to="/acasa">
              <IntlMessages id="Acasă"/>
            </Link>
          </Menu.Item> 
          <Menu.Item key="concursuri">
            <Link to="/concursuri">
              <IntlMessages id="Concursuri"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/despre">
              <IntlMessages id="Despre"/>
            </Link>
          </Menu.Item>
          
          <Menu.Item key="form">
            <Link to="/form">
            <Icon theme="filled" style={{color:"#F44336",fontSize: 16}} type="plus-square" />
            </Link>
          </Menu.Item> 
      </Menu>

    );
  }
}

HorizontalNav.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {themeType, navStyle, pathname, locale} = settings;
  return {themeType, navStyle, pathname, locale}
};
export default connect(mapStateToProps)(HorizontalNav);

