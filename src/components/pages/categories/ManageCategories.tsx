import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../config"
import type { Category } from "../../../interfaces/category.interface";

function ManageCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const suggestions = ['Apple', 'Banana', 'Cherry', 'Date'];
    useEffect(() => {
        getItems();
    },[]);
    const getItems = () => {
        api.get(`categories`)
        .then((res) => {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    const handleFilter = () => {
        console.log(search);
        api.get(`categories?search=${search}`)
        .then((res) => {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/categories" className="text-muted fw-light">Categories </Link> / Manage</h4>
      <Link to="/create-category" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <h5 className="card-header">
            <form>
                <div className="row">
                    <div className="col-auto">
                        <div className="input-group input-group-merge">
                            <input type="text" className="form-control" list="fruit-options" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)} onKeyUp={handleFilter} />
                            <span className="input-group-text" id="basic-addon2"><i className="bx bx-search"></i></span>
                        </div>
                        <datalist id="fruit-options">
                            {suggestions.map((item, index) => (
                            <option key={index} value={item} />
                            ))}
                        </datalist>
                    </div>
                    <div className="col-auto">
                        <select className="form-select">
                            <option value="0">All</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                        </select>
                    </div>
                </div>
                <div>

                </div>
            </form>
        </h5>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Is active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       categories.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.is_active == true ? "Active" : "Inactive"}</td>
                            <td>

                            </td>
                        </tr>
                       )
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManageCategories