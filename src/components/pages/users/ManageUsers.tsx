import { useEffect,useState } from "react";
import api from "../../../config";
import type { User } from "../../../interfaces/user.interface";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../config";

function ManageUsers() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    document.title = "Manage Users";
    getUsers();
  },[]);
  const getUsers = () => {
    api.get("users")
    .then((res) => {
      console.log(res.data);
      setUsers(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Users /</span> Manage</h4>
      <Link to="/create-user" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}
                                    {user.photo ? <img src={baseUrl+user.photo} alt="user" className="rounded-circle" width="40" /> : null}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <Link to={`/post/details/${user.id}`} type="button" className="btn btn-icon btn-outline-info">
                                            <span className="tf-icons bx bx-search"></span>
                                        </Link>
                                        <Link to={`/post/edit/${user.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                            <span className="tf-icons bx bx-edit"></span>
                                        </Link>
                                        <button type="button" className="btn btn-icon btn-outline-danger">
                                            <span className="tf-icons bx bx-trash"></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManageUsers