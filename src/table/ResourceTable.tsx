/*
List of table design related to this class
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=113%3A146&t=rrwKGzsPR7hgMUAJ-0
https://www.figma.com/file/oLAkh2SB1j30ih53E6HFyq/Financial-Secretary-Claiming-Website?node-id=113%3A11&t=rrwKGzsPR7hgMUAJ-0
*/

export class ResourceTable
{
    protected key;
    protected contents: {name: string, link: string}[];
    protected colWidths: string[]; 

    constructor()
    {
        this.key = crypto.randomUUID();
        this.contents = [];
        this.colWidths = [];
    }

    addTableContent(name: string, link: string)
    {
        this.contents.push({name: name, link: link});
    }

    protected configureColWidth(state="DEFAULT")
    {
      if (state === "DEFAULT")
      {
        this.colWidths = ["40%", "60%"]
      }
      else if (state === "PENDING")
      {
        this.colWidths = ["25%", "40%", "35%"]
      }
      return <colgroup>
        {this.colWidths.map(width => {
          return <col style={{width: width}}/>
        })}
      </colgroup>
    }

    protected renderTableHeader(state="DEFAULT")
    {
      return <thead>
        <tr className="table-active">
          <th>Name</th>
          <th>Link</th>
          {state === "PENDING"? <th>Action</th> : null}
        </tr>        
      </thead>
    }

    protected renderTableBody(state="DEFAULT")
    {
      return <tbody>
        {this.contents.map(resource => {
          return <tr key={crypto.randomUUID()}>
            <td>{resource.name}</td>
            <td>{resource.link}</td>
            {state === "PENDING"? <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td> : null}
          </tr>
        })}
      </tbody>
    }

    renderTable(state="DEFAULT")
    {
      return (
        <div className="container">
          <table
            className="table table-hover table-responsive rfp-table"
            key={this.key}
          >
            {this.configureColWidth(state)}
            {this.renderTableHeader(state)}
            {this.renderTableBody(state)}
          </table>
        </div>
      );
    }
}


