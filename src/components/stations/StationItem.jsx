import React, { Component } from 'react';

class StationItem extends Component {
  render() {
    const { index, station } = this.props;
    console.log("StationItem -> render -> station", station)

    return (
      <tr className="mdc-data-table__row">
        <td className="mdc-data-table__cell">{index + 1}</td>
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{station.name}</td>
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{station.address}</td>
        <td className="mdc-data-table__cell">{station.province}</td>
        <td>
          <button>Sửa</button>
          <button>Xóa</button>
        </td>
      </tr>
    );
  }
}

export default StationItem;