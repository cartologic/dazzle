import React from 'react';
import Dashboard, { addWidget } from '../../lib';

// App Components
import Header from './Header';
import EditBar from './EditBar';
import Container from './Container';

// Widgets
import HelloWorld from './widgets/HelloWorld';
import AnotherWidget from './widgets/AnotherWidget';
import AddWidgetDialog from './AddWidgetDialog';
// import CustomAddWidgetButton from './CustomAddWidgetButton';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom.css';
import '../../lib/style/style.css';


// import Sweat Alert
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-4 col-sm-6 col-xs-6',
            tabs: [
              {
                widgetSizes: [{height: '30%'}, {height: '70%'}],
                widgets: [{ key: 'RocketWidget' }, { key: 'AlienWidget' }],
              },
              {
                widgets: [],
              },
              {
                widgets: [],
              },
            ],
          }, {
            className: 'col-md-8 col-sm-6 col-xs-6',
            tabs: [
              {
                widgets: [],
              },
              {
                widgets: [],
              },
            ],
          }],
        }],
      },
      widgets: {
        RocketWidget: {
          type: HelloWorld,
          title: 'Rocket Widget',
        },
        AlienWidget: {
          type: AnotherWidget,
          title: 'Alien Widget',
        },
      },
      editMode: false,
      isModalOpen: false,
      addWidgetOptions: null,
    };
  }

  onRemoveTab = (rowIndex, columnIndex, tabIndex) => {
    const updatedLayout = this.state.layout;
    const widgetCount = updatedLayout.rows[rowIndex].columns[columnIndex].tabs[tabIndex].widgets.length;
    const hasWidgets = widgetCount ? true : false;
    if (!hasWidgets) {
      updatedLayout.rows[rowIndex].columns[columnIndex].tabs.splice(tabIndex, 1);
      this.setState({
        layout: updatedLayout,
      });
    } else {
      this.setState({
        showRemoveWidgetAlert: true,
      });
    }
  }

  onAddTab = (rowIndex, columnIndex) => {
    const updatedLayout = this.state.layout;
    const numberOfTabs = updatedLayout.rows[rowIndex].columns[columnIndex].tabs.length;
    const newEmptyTab = {widgets: []};
    updatedLayout.rows[rowIndex].columns[columnIndex].tabs.splice(numberOfTabs, 0, newEmptyTab);
    this.setState({
      layout: updatedLayout,
    });
  }

  onRemove = (layout) => {
    this.setState({
      layout,
    });
  }

  onAdd = (layout, rowIndex, columnIndex, tabIndex) => {
    this.setState({
      isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
        tabIndex,
      },
    });
  }

  onMove = (layout) => {
    this.setState({
      layout,
    });
  }

  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    /* eslint max-len: "off" */
    return (
      <Container>
        <SweetAlert
          show={this.state.showRemoveWidgetAlert}
          title="Tab Already contains widgets!"
          text="Please remove all the widgets before you can remove the tab"
          onConfirm={() => this.setState({ showRemoveWidgetAlert: false })}
        />
        <Header />
        <EditBar onEdit={this.toggleEdit} />
        <Dashboard
          onRemove={this.onRemove}
          layout={this.state.layout}
          widgets={this.state.widgets}
          editable={this.state.editMode}
          addWidgetComponentText="Add"
          onAdd={this.onAdd}
          onMove={this.onMove}
          onRemoveTab={this.onRemoveTab}
          onAddTab={this.onAddTab}
        />
        <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.widgetSelected} />
      </Container>
    );
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  widgetSelected = (widgetName) => {
    const { layout, rowIndex, columnIndex, tabIndex } = this.state.addWidgetOptions;
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, tabIndex, widgetName),
    });
    this.onRequestClose();
  }
}

export default App;
