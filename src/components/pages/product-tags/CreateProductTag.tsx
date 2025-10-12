import { Link } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { ProductTag } from "../../../interfaces/productTag.interface";
import productTagDefault from "../../../interfaces/productTag.interface";

function CreateProductTag() {
    const [productTag, setProductTag] = useState<ProductTag>(productTagDefault);

    useEffect(() => {
        document.title = "Create Product Tags";
    }, []);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        api.post("create-product-tag", productTag)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <Link to="/product-tags" className="text-muted fw-light">Product Tags /</Link> Create
          </h4>
          <div className="card mt-3">
            <h5 className="card-header">Create ProductTag</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" 
                        value={productTag.title} 
                        onChange={(e) => setProductTag({...productTag, title: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>
        </div>
        </>
    );
}

export default CreateProductTag;