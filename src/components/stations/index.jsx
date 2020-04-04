import React, { Component } from 'react';

import { Headline3 } from '@material/react-typography';
import { MDCDataTable } from '@material/data-table';

import callApi from "../api"

import StationItem from "./StationItem";

class Station extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    }
  }

  componentDidMount() {
    callApi("/stations").getItems()
      .then(stations => {
        this.setState({
          stations
        })
      })

    if (document) {
      new MDCDataTable(document.querySelector('.mdc-data-table'));
    }
  }

  renderStations = () => {
    return this.state.stations.map((station, index) => {
      return <StationItem
        key={index}
        station={station}
        index={index}
      />
    })
  }

  render() {
    return (
      <div>
        <Headline3>QUẢN LÝ BẾN XE</Headline3>

        <div className="mdc-data-table">
          <table className="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
              <tr className="mdc-data-table__header-row">
                <th className="mdc-data-table__header-cell" role="columnheader" scope="col">STT</th>
                <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Tên</th>
                <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Địa chỉ</th>
                <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Tỉnh, thành</th>
                <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody className="mdc-data-table__content">
              {this.renderStations()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Station;