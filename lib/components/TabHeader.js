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
          href={'#tab' + rowIndex.toString() + columnIndex.toString() + tabIndex.toString()}>
          {'Tab ' + (tabIndex + 1).toString()}
        </a>
        <div style={removeTabVisibilty} className="btn-group">
          <button style={removeTabVisibilty}
            type="button" className="btn btn-outline-info"
            data-toggle="modal" data-target="#exampleModal">
            <span className="glyphicon glyphicon-cog"/>
          </button>
          <button style={removeTabVisibilty} onClick={() => {onRemoveTab(rowIndex, columnIndex, tabIndex);}}
            type="button" className="btn btn-outline-danger">
            <span className="glyphicon glyphicon-trash"/>
          </button>
        </div>
      </li>
    );
  }
}

export default TabHeader;
