
import "bootstrap/dist/css/bootstrap.min.css";
import RFP from "pages/RFP";
import RFPAllRfp from "pages/RFPAllRfp";
import RFPFinSec from "pages/RFPFinSec";
import RFPHistoryPage from 'pages/RFPHistory';
import RFPPending from "pages/RFPPending";
import RFPRejected from "pages/RFPRejected";
import RejectedRFP from "pages/RejectedRFP";
import ResourceManagement from "pages/ResourceManagement";
import ResourcePage from "pages/Resources";

function App() {

  return (
    <div className="App">
      <RFPHistoryPage />
      <ResourcePage />
      <RFP />
      <RFPPending />
      <RFPFinSec />
      <ResourceManagement />
      <RejectedRFP />
      <RFPRejected />
      <RFPAllRfp />
    </div>
  );
}

export default App;
