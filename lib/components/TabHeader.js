import React, {Component} from 'react';


/**
 * A tab header in a Tab Container which relies in a grid column.
 */

class TabHeader extends Component {
  render() {
    const {
      rowIndex,
      columnIndex,
      tabIndex,
      active,
      visibilityStyle,
    } = this.props;
    const activeTab = (active ? 'active' : null);
    return (
      <li className={activeTab} style={visibilityStyle}>
        <a data-toggle="tab"
          href={'#tab' + rowIndex.toString() + columnIndex.toString() + tabIndex.toString()}>{'Tab ' + (tabIndex + 1).toString()}</a>
      </li>
    );
  }
}

export default TabHeader;
