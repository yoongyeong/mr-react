import React, { useState } from "react";
import FormContainer_dx from "../FormContainer/FormContainer_dx";
import Widgets from "../Widget/Widgets";
import WorkspaceHeader from "./WorkspaceHeader";
import Patient from "../Widget/MR/Profiles/Patient";
import NeedAttention from "../Widget/MR/NeedAttention/NeedAttention";
import data from "../data.json";

import "./Workspace.scss";

const Workspace = props => {
  const [selectedPatientID, setSelectedPatientID] = useState(1);

  const patient = data.patient;
  let currentPatient = [];

  currentPatient = patient.map(myPatient => {
    currentPatient = myPatient;
    currentPatient.fullName = [
      currentPatient.honorificTitle,
      currentPatient.firstName,
      ...currentPatient.middleName,
      currentPatient.lastName,
      currentPatient.professionalTitle
    ].join(" ");
    return currentPatient;
  });
  const handleChoosingMR = e => {
    setSelectedPatientID(e.value);
  };

  return (
    <div className="workspace">
      <WorkspaceHeader
        onPatientChange={handleChoosingMR}
        fullNameList={patient}
        patientList={data.patient}
      />
      <FormContainer_dx selectedPatientID={selectedPatientID} />
      <Widgets>
        <Patient selectedPatientID={selectedPatientID} />
        <NeedAttention />
      </Widgets>
    </div>
  );
};

export default Workspace;

// import React from 'react';
// import { DropDownBox, TreeView } from 'devextreme-react';
// import DataGrid, { Selection, Paging, FilterRow, Scrolling } from 'devextreme-react/data-grid';
// import CustomStore from 'devextreme/data/custom_store';
// import 'whatwg-fetch';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.treeView = null;
//     this.treeDataSource = this.makeAsyncDataSource('treeProducts.json');
//     this.gridDataSource = this.makeAsyncDataSource('customers.json');
//     this.state = {
//       treeBoxValue: '1_1',
//       gridBoxValue: [3]
//     };
//     this.treeView_itemSelectionChanged = this.treeView_itemSelectionChanged.bind(this);
//     this.syncTreeViewSelection = this.syncTreeViewSelection.bind(this);
//     this.syncDataGridSelection = this.syncDataGridSelection.bind(this);
//     this.dataGrid_onSelectionChanged = this.dataGrid_onSelectionChanged.bind(this);
//     this.treeViewRender = this.treeViewRender.bind(this);
//     this.treeView_onContentReady = this.treeView_onContentReady.bind(this);
//     this.dataGridRender = this.dataGridRender.bind(this);
//   }

//   makeAsyncDataSource(jsonFile) {
//     return new CustomStore({
//       loadMode: 'raw',
//       key: 'ID',
//       load: function() {
//         return fetch(`data/${ jsonFile}`)
//           .then(response => response.json());
//       }
//     });
//   }

//   render() {
//     return (
//       <div className={'dx-fieldset'}>
//         <div className={'dx-field'}>
//           <div className={'dx-field-label'}>DropDownBox with embedded TreeView</div>
//           <div className={'dx-field-value'}>
//             <DropDownBox
//               value={this.state.treeBoxValue}
//               valueExpr={'ID'}
//               displayExpr={'name'}
//               placeholder={'Select a value...'}
//               showClearButton={true}
//               dataSource={this.treeDataSource}
//               onValueChanged={this.syncTreeViewSelection}
//               contentRender={this.treeViewRender}
//             />
//           </div>
//         </div>
//         <div className={'dx-field'}>
//           <div className={'dx-field-label'}>DropDownBox with embedded DataGrid</div>
//           <div className={'dx-field-value'}>
//             <DropDownBox
//               value={this.state.gridBoxValue}
//               valueExpr={'ID'}
//               deferRendering={false}
//               displayExpr={this.gridBox_displayExpr}
//               placeholder={'Select a value...'}
//               showClearButton={true}
//               dataSource={this.gridDataSource}
//               onValueChanged={this.syncDataGridSelection}
//               contentRender={this.dataGridRender}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   treeViewRender() {
//     return (
//       <TreeView dataSource={this.treeDataSource}
//         ref={(ref) => this.treeView = ref}
//         dataStructure={'plain'}
//         keyExpr={'ID'}
//         parentIdExpr={'categoryId'}
//         selectionMode={'single'}
//         displayExpr={'name'}
//         selectByClick={true}
//         onContentReady={this.treeView_onContentReady}
//         onItemSelectionChanged={this.treeView_itemSelectionChanged}
//       />
//     );
//   }

//   dataGridRender() {
//     return (
//       <DataGrid
//         dataSource={this.gridDataSource}
//         columns={['CompanyName', 'City', 'Phone']}
//         hoverStateEnabled={true}
//         selectedRowKeys={this.state.gridBoxValue}
//         onSelectionChanged={this.dataGrid_onSelectionChanged}
//         height={'100%'}>
//         <Selection mode={'single'} />
//         <Scrolling mode={'infinite'} />
//         <Paging enabled={true} pageSize={10} />
//         <FilterRow visible={true} />
//       </DataGrid>
//     );
//   }

//   syncTreeViewSelection(e) {
//     this.setState({
//       treeBoxValue: e.value
//     });
//     if (!this.treeView) return;

//     if (!e.value) {
//       this.treeView.instance.unselectAll();
//     } else {
//       this.treeView.instance.selectItem(e.value);
//     }
//   }

//   syncDataGridSelection(e) {
//     this.setState({
//       gridBoxValue: e.value
//     });
//   }

//   treeView_itemSelectionChanged(e) {
//     this.setState({
//       treeBoxValue: e.component.getSelectedNodesKeys()
//     });
//   }

//   dataGrid_onSelectionChanged(e) {
//     this.setState({
//       gridBoxValue: e.selectedRowKeys
//     });
//   }

//   gridBox_displayExpr(item) {
//     return item && `${item.CompanyName } <${ item.Phone }>`;
//   }

//   treeView_onContentReady(e) {
//     e.component.selectItem(this.state.treeBoxValue);
//   }
// }

// export default App;
