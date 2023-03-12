import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./table/table.css";
import { ResourceTable } from './table/ResourceTable';
import { RfpTable } from './table/RfpTable';

function App() {
  var resourceTable = new ResourceTable();
  resourceTable.addTableContent("RFP Guideline", "http://test.com");

  var rfpTable = new RfpTable();
  rfpTable.addTableContent("RFP1008024", new Date("2023-03-11"), "rejected", "John Doe", "John Doe");

  return (
    <div className="App">
      {resourceTable.renderTable("VIEW")}
      {rfpTable.renderTable("APPROVED")}
    </div>
  );
}

export default App;
