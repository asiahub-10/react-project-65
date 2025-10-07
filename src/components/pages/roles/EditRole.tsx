import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import api from '../../../config';
import { useEffect, useState } from 'react';
import roleDefault from '../../../interfaces/role.interface';

function EditRole() {
    const params = useParams();
    const [role, setRole] = useState(roleDefault);
    useEffect(() => {
        getRole();
    },[])
    const getRole = ()=>{
        api.get(`role?id=${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setRole(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(role);
        api.put(`edit-role`, role)
        .then((res)=>{
            console.log(res.data);
            alert("Data updated successfully");
        })
        .catch((err)=>{
            console.error(err);
        })
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/roles" className="text-muted fw-light">Roles /</Link> Edit</h4>
      <div className="card mt-3">
        <h5 className="card-header">Edit Role</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <input type="hidden" value={params.id} />
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={role.name} onChange={(e)=>setRole({...role, name: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditRole