export class RfpTable
{
    constructor()
    {
        this.key = crypto.randomUUID();
        this.contents = [];
    }

    addTableContent(rfpId, date, status, submitter)
    {
        this.contents.push({rfpId: rfpId, date: date, status: status, submitter: submitter});
    }

    renderTable()
    {
        return (
          <div className="container">
            <table className="table table-hover table-responsive rfp-table">
              <thead>
                <tr className="table-active">
                  <th>RFP NUMBER</th>
                  <th>Submission Date</th>
                  <th>Status</th>
                  <th>Submitted By</th>
                </tr>
              </thead>
              <tbody>
                {this.contents.map((rfp) => {
                  return (
                    <tr>
                      <td>{rfp.rfpId}</td>
                      <td>{rfp.date}</td>
                      <td>{rfp.status}</td>
                      <td>
                        <a href="https://www.google.com">{rfp.submitter}</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
    }
}