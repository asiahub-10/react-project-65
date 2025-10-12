import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { ProductTag } from "../../../interfaces/productTag.interface";
import productTagDefault from "../../../interfaces/productTag.interface";

function DetailsProductTag() {
  const [productTag, setProductTag] = useState<ProductTag>(productTagDefault);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Details Product Tags";
    api.get("product-tag?id=" + id)
      .then((res) => {
        setProductTag(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/product-tags" className="text-muted fw-light">Product Tags /</Link> Details
      </h4>
      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Id</th>
                <td>{productTag.id}</td>
              </tr>
              <tr>
                <th>Title</th>
                <td>{productTag.title}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailsProductTag;