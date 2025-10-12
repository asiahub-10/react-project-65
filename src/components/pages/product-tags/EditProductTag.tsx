import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { ProductTag } from "../../../interfaces/productTag.interface";
import productTagDefault from "../../../interfaces/productTag.interface";

function EditProductTag() {
    const [productTag, setProductTag] = useState<ProductTag>(productTagDefault);
    const { id } = useParams();

    useEffect(() => {
        document.title = "Edit Product Tags";
        getDataById();
    }, []);

    const getDataById = () => {
        api.get("product-tag?id=" + id)
        .then((res) => {
            setProductTag(res.data);
            alert(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        api.put("edit-product-tag?id=" + id, productTag)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <Link to="/product-tags" className="text-muted fw-light">Product Tags /</Link> Edit
          </h4>
          <div className="card mt-3">
            <h5 className="card-header">Edit Product Tags</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="title" className="form-control"
                        value={productTag.title}
                        onChange={(e) => setProductTag({...productTag, title: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
          </div>
        </div>
        </>
    );
}

export default EditProductTag;