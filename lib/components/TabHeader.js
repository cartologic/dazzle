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
      removeTabVisibilty,
      onRemoveTab,
    } = this.props;
    const activeTab = (active ? 'active' : null);
    return (
      <li className={activeTab} style={visibilityStyle}>
        <a data-toggle="tab"
          href={'#tab' + rowIndex.toString() + columnIndex.toString() + tabIndex.toString()}>{'Tab ' + (tabIndex + 1).toString()}</a>
        <button style={removeTabVisibilty} onClick={() => {onRemoveTab(rowIndex, columnIndex, tabIndex);}} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    );
  }
}

export default TabHeader;
