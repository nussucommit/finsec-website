import { ResourceTable } from "./ResourceTable";

export class ActionableResourceTable extends ResourceTable 
{
    renderTable()
    {
        return <div className="container">
            <table className="table table-hover table-responsive rfp-table">
                <thead>
                    <tr className="table-active">
                        <th>Name</th>
                        <th>Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.contents.map(resource => {
                        return <tr>
                            <td>{resource.name}</td>
                            <td>{resource.link}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}