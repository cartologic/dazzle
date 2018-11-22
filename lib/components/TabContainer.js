import React, {Component} from 'react';
import Tab from './Tab';
import TabHeader from './TabHeader';
import TabHeaderAdd from  './TabHeaderAdd';


/**
 * A tab in a grid column. A tab holds multiple widgets.
 */

class TabContainer extends Component {
  render() {
    const {
      tabs,
      layout,
      rowIndex,
      columnIndex,
      onRemove,
      frameComponent,
      onMove,
      editable,
      onAdd,
      addWidgetComponentText,
      addWidgetComponent,
      widgets,
      onRemoveTab,
      onAddTab,
    } = this.props;
    const tabCount = tabs.length;
    const singleTab = tabCount < 2 ? 'hidden' : 'visible';
    const visibilityStyleSingleTab = {
      visibility: singleTab,
    };
    const addRemoveTab = editable ? 'visible' : 'hidden';
    const visibilityStyleAddTab = {
      visibility: addRemoveTab,
    };

    const tabsHeader = tabs.map((tab, index) => {
      return (
        <TabHeader
          key = {'tab-header-' + rowIndex.toString() + columnIndex.toString() + index.toString()}
          rowIndex = {rowIndex}
          columnIndex = {columnIndex}
          tabIndex = {index}
          active = { index ? null : 'active'}
          visibilityStyle = {visibilityStyleSingleTab}
          removeTabVisibilty = {visibilityStyleAddTab}
          onRemoveTab = {onRemoveTab}
        />
      );
    });
    // Adding the "Add" tab header
    tabsHeader.push(
      <TabHeaderAdd
        key = {'tab-header-' + rowIndex.toString() + columnIndex.toString() + '-add'}
        rowIndex = {rowIndex}
        columnIndex = {columnIndex}
        visibilityStyle = {visibilityStyleAddTab}
        onAddTab = {onAddTab}
      />
    );
    const tabsBody = tabs.map((tab, index) => {
      return (
        <Tab
          key = {'tab-body' + rowIndex.toString() + columnIndex.toString() + index.toString()}
          layout = {layout}
          rowIndex = {rowIndex}
          columnIndex = {columnIndex}
          tabIndex = {index}
          widgets = {widgets}
          onRemove = {onRemove}
          frameComponent = {frameComponent}
          onMove = {onMove}
          editable = {editable}
          onAdd = {onAdd}
          addWidgetComponentText = {addWidgetComponentText}
          addWidgetComponent = {addWidgetComponent}
          active = { index ? null : 'active'}
        />
      );
    });
    const style =  {
      height: '100%',
    };
    return (
      <div style={style}>
        <ul className="nav nav-tabs">{tabsHeader}</ul>
        <div style={style} className="tab-content">{tabsBody}</div>
      </div>
    );
  }
}

export default TabContainer;
