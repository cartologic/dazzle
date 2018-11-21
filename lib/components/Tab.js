import React, {Component, createElement} from 'react';
import AddWidget from './AddWidget';
import Widgets from './Widgets';


/**
 * A tab in a Tab Container which relies in a grid column. A tab holds multiple widgets.
 */

class Tab extends Component {
  render() {
    const {
      layout,
      rowIndex,
      columnIndex,
      tabIndex,
      widgets,
      onRemove,
      frameComponent,
      onMove,
      editable,
      onAdd,
      addWidgetComponentText,
      addWidgetComponent,
      active,
    } = this.props;

    let addWidgetComponentToUse = null;
    if (addWidgetComponent) {
      // eslint max-len=off
      addWidgetComponentToUse = createElement(addWidgetComponent, {	text: addWidgetComponentText, onClick:	() => {onAdd(layout, rowIndex, columnIndex, tabIndex);} }); // eslint-disable-line
    } else {
      addWidgetComponentToUse = <AddWidget text={addWidgetComponentText} onClick={() => {onAdd(layout, rowIndex, columnIndex, tabIndex);}}/>; // eslint-disable-line
    }
    const activeTab = (active ? 'tab-pane fade in active' : 'tab-pane fade in');
    const style = {
      height: '100%',
    };
    return (
      <div id={'tab' + rowIndex.toString() + columnIndex.toString() + tabIndex.toString()}
        className={activeTab} style={style}>
        {editable && addWidgetComponentToUse}
        <Widgets
          key={'widgets' + rowIndex.toString() + columnIndex.toString() + tabIndex.toString()}
          widgets={this.props.layout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets}
          containerClassName={this.props.layout.rows[rowIndex].columns[columnIndex].containerClassName}
          widgetTypes={widgets}
          onRemove={onRemove}
          layout={layout}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          tabIndex={tabIndex}
          editable={editable}
          frameComponent={frameComponent}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default Tab;
