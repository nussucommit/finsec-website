import { Executive } from "./Executive";
import { MemberList } from "./RefList";
import { Submitter } from "./Submitter";

/*
List of table design related to this class
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=202%3A224&t=rrwKGzsPR7hgMUAJ-0
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=108%3A228&t=rrwKGzsPR7hgMUAJ-0
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=112%3A531&t=rrwKGzsPR7hgMUAJ-0
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=112%3A439&t=rrwKGzsPR7hgMUAJ-0
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=110%3A924&t=rrwKGzsPR7hgMUAJ-0 not yet implement
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=16%3A62&t=rrwKGzsPR7hgMUAJ-0 not yet implement
*/

export class RfpTable
{
    protected key : string;
    protected contents: {rfpId: string, date: Date, status: string, submitter: Submitter, executive: Executive}[];
    protected colWidths: string[];

    constructor()
    {
        this.key = crypto.randomUUID();
        this.contents = [];
        this.colWidths = [];
    }

    addTableContent(rfpId: string, date: Date, status: string, submitter: string, executive: string = "")
    {
      this.contents.push({
        rfpId: rfpId,
        date: date, 
        status: status,
        submitter: new Submitter(submitter, MemberList[submitter]),
        executive: new Executive(executive, "")
      });
    }

    protected configureColWidth(state="DEFAULT")
    {
      if (state === "DEFAULT")
      {
        this.colWidths = ["25%", "25%", "25%", "25%"];
      }
      else if (state === "PENDING")
      {
        this.colWidths = ["18%", "17%", "21%", "20%", "25%"];
      }
      else if (state === "APPROVED")
      {
        this.colWidths = ["20%", "20%", "20%", "20%", "20%"];
      }
      return <colgroup>
        {this.colWidths.map(width => {
          return <col style={{width: width}}/>
        })}
      </colgroup>
    }

    protected renderTableHeader(state="DEFAULT")
    {
      console.log(state);
      return (            
        <thead>
          <tr className="table-active">
            <th>RFP NUMBER</th>
            <th>Submission Date</th>
            <th>Status</th>
            <th>Submitted By</th>
            {state === "PENDING"? <th>Action</th> : 
             state === "APPROVED"? <th>Executives</th> : 
             null
            }
          </tr>
        </thead>
      )
    }

    protected renderTableBody(state="DEFAULT")
    {
      return (
        <tbody>
          {this.contents.map(rfp => {
            return <tr>
              {Object.entries(rfp).map(keyValuePair => {
                if (typeof keyValuePair[1] == "string") {
                   return <td>{keyValuePair[1]}</td>
                }
                else if (keyValuePair[1] instanceof Submitter) 
                {
                  return <td><a href={keyValuePair[1].ref}>{keyValuePair[1].name}</a></td>
                }
                else if (keyValuePair[1] instanceof Executive)
                {
                  return <td><a href={(keyValuePair[1] as Executive).ref}>{(keyValuePair[1] as Executive).name}</a></td>
                }
                return <td>{keyValuePair[1].toLocaleDateString()}</td>
              })}
              {state === "PENDING"? <td>
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-danger">Delete</button>
              </td> : null}
            </tr>
          })}
        </tbody>
      )
    }

    renderTable(state="DEFAULT")
    {
        return (
          <div className="container">
            <table className="table table-hover table-responsive rfp-table">
              {this.configureColWidth(state)}
              {this.renderTableHeader(state)}
              {this.renderTableBody(state)}
            </table>
          </div>
        );
    }
}