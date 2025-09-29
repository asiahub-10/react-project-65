import axios from 'axios'
import { Link } from 'react-router-dom'
function ManageRoles() {
    axios.get("http://localhost/php-react-api/api/roles")
    .then((res)=>{
        console.log(res);
        // const posts = res.data;
    })
    .catch((err)=>{
        console.error(err);
    })
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Roles /</span> Manage</h4>
      <Link to="/post/create" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // posts.map((item)=>
                        //     <tr key={item.id}>
                        //         <td>{item.id}</td>
                        //         <td>{item.userId}</td>
                        //         <td>{item.title}</td>
                        //         <td>{item.body}</td>
                        //         <td>
                        //             <div className="d-flex gap-1">
                        //                 <Link to={`/post/details/${item.id}`} type="button" className="btn btn-icon btn-outline-info">
                        //                     <span className="tf-icons bx bx-search"></span>
                        //                 </Link>
                        //                 <Link to={`/post/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                        //                     <span className="tf-icons bx bx-edit"></span>
                        //                 </Link>
                        //                 <button type="button" className="btn btn-icon btn-outline-danger">
                        //                     <span className="tf-icons bx bx-trash"></span>
                        //                 </button>
                        //             </div>
                        //         </td>
                        //     </tr>
                        // )
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManageRoles