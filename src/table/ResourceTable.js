export class ResourceTable
{
    constructor()
    {
        this.key = crypto.randomUUID();
        this.contents = [];
    }

    addTableContent(name, link)
    {
        this.contents.push({name: name, link: link});
    }

    renderTable()
    {
        return (
          <div className="container">
            <table
              className="table table-hover table-responsive rfp-table"
              key={this.key}
            >
              <thead>
                <tr className="table-active">
                  <th>Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {this.contents.map((resource) => {
                  return (
                    <tr key={crypto.randomUUID()}>
                      <td>{resource.name}</td>
                      <td>{resource.link}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
    }
}


