import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./table/table.css";
import { ResourceTable } from './table/ResourceTable';
import { ActionableResourceTable } from './table/ActionableResourceTable';
import { RfpTable } from './table/RfpTable';
import { PendingRfpTable } from './table/PendingRfpTable';

function App() {
  var resourceTable = new ResourceTable();
  resourceTable.addTableContent("Test", "http://test.com");

  var actionableResourceTable = new ActionableResourceTable();
  actionableResourceTable.addTableContent("Test Action", "http://test.com");

  var rfpTable = new RfpTable();
  rfpTable.addTableContent("RFP1008024", "11/3/2023", "rejected", "Tan Rui Yang");

  var pendingRfpTable = new PendingRfpTable();
  pendingRfpTable.addTableContent(
    "RFP1008024",
    "11/3/2023",
    "rejected",
    "Tan Rui Yang"
  );

  return (
    <div className="App">
      {resourceTable.renderTable()}
      {actionableResourceTable.renderTable()}
      {rfpTable.renderTable()}
      {pendingRfpTable.renderTable()}
    </div>
  );
}

export default App;
