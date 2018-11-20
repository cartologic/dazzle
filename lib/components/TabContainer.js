import React, {Component} from 'react';
import Tab from './Tab';
import TabHeader from './TabHeader';


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
    } = this.props;

    const tabsHeader = tabs.map((tab, index) => {
      return (
        <TabHeader
          key = {'tab-header' + rowIndex.toString() + columnIndex.toString() + index.toString()}
          rowIndex = {rowIndex}
          columnIndex = {columnIndex}
          tabIndex = {index}
          active = { index ? null : 'active'}
        />
      );
    });
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
    return (
      <div>
        <ul className="nav nav-tabs">{tabsHeader}</ul>
        <div className="tab-content">{tabsBody}</div>
      </div>
    );
  }
}

export default TabContainer;
