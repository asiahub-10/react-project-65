import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { use, useState, useEffect } from "react";

function EditPost() {
    const [post,setPost] = useState({
        userId: 0,
        title: "",
        body: ""
    });
    const params = useParams();
    const queryId = params?.id;
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/"+queryId)
        .then((res)=>{
            // console.log(res.data)
            let data = res.data;
            setPost(data);
        })    
        .catch((err)=>console.error(err));
    },[queryId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(post);

    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/posts" className="text-muted fw-light">Posts /</Link> Update</h4>
      <div className="card mt-3">
        <h5 className="card-header">Update Post</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" value={post.title} onChange={(e)=>setPost({...post, title: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea name="body" className="form-control" rows={4} value={post.body} onChange={(e)=>setPost({...post, body: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditPost