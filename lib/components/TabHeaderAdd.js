import React, {Component} from 'react';


/**
 * A tab header that controls the "Add Tab" functionality
 */

class TabHeaderAdd extends Component {
  render() {
    const {
      rowIndex,
      columnIndex,
      visibilityStyle,
      onAddTab,
    } = this.props;
    return (
      /* <li style={visibilityStyle}>
        <a href={'#'} onClick={() => onAddTab(rowIndex, columnIndex)}>{'Add +'}</a>
      </li> */
      <li style={visibilityStyle} className="">
        <a href="#" onClick={() => onAddTab(rowIndex, columnIndex)}>
          <span className="round-tabs two">
            <i className="glyphicon glyphicon-plus" />
          </span>
        </a>
      </li>
    );
  }
}

export default TabHeaderAdd;
