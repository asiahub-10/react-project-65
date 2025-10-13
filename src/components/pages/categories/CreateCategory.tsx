import { useState } from "react";
import { Link } from "react-router-dom"
import type { Category } from "../../../interfaces/category.interface";
import categoryDefault from "../../../interfaces/category.interface";
import api from "../../../config";

function CreateCategory() {
    const [category, setCategory] = useState<Category>(categoryDefault);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(category);
        api.post("create-category", category)
        .then((res)=>{
            console.log(res.data);
            // alert("Data saved successfully");
        })
        .catch((err)=>console.error(err));
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/categories" className="text-muted fw-light">Categories </Link> / Create</h4>
      <div className="card mt-3">
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" value={category.name} onChange={(e)=>setCategory({...category, name: e.target.value})} />
                </div>
                <div className="mb-3">
                    <input type="checkbox" className="form-check-input me-2" id="isActive" onChange={(e)=>setCategory({...category,is_active:e.target.checked})} />
                    <label htmlFor="isActive" className="form-check-label">Active</label>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateCategory