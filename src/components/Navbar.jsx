import React, { Component } from 'react';

import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import { Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <div>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon='menu' />
              </TopAppBarIcon>
              <TopAppBarTitle>vexere</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <Link to="/stations" style={{ marginRight: "20px" }} >Bến xe</Link>
              <Link to="/trips" style={{ marginRight: "20px" }} >Chuyến đi</Link>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
}

export default Navbar;