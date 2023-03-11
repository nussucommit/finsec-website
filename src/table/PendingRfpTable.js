import { RfpTable } from "./RfpTable";

export class PendingRfpTable extends RfpTable
{
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
                    <th>Action</th>
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
                        <td>
                        <button className="btn btn-primary">
                            Approve
                        </button>
                        <button className="btn btn-danger">
                            Reject
                        </button>
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