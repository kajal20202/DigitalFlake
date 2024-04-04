import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [category, setCategory] = useState("Active"); // Default status
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const cancel = () => {
    navigate("/sidebar/Product");
  };
  return (
    <div className="page-wrapper">
      {/* {/ Add Product Modal /} */}
      <h4>Add Product</h4>
      <br />
      <div className="AddProductbody">
        <form>
          <div className="input-block">
            <div className="row">
              <div className="col-4">
                <label>
                  Category <span className="text-danger">*</span>
                  <div className="custom-select">
                    <select
                      className="form-control"
                      value={category}
                      onChange={handleCategoryChange}
                    >
                      <option value="Active">Milk</option>
                      <option value="Inactive">Fruits</option>
                    </select>
                  </div>
                </label>
              </div>

              <div className="col-4">
                <label>
                  Product Name <span className="text-danger">*</span>
                  <input className="form-control" type="text" />
                </label>
              </div>

              <div className="col-4">
                <label>
                  Pack Size <span className="text-danger">*</span>
                  <input className="form-control" type="text" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label>
                  MRP <span className="text-danger">*</span>
                  <input className="form-control" type="number" />
                </label>
              </div>

              <div className="col-4">
                <label>
                  Product Image <span className="text-danger">*</span>
                  <input className="form-control" type="text" />
                </label>
              </div>

              <div className="col-4">
                <label>
                  Status <span className="text-danger">*</span>
                  <div className="custom-select">
                    <select className="form-control" value={category}></select>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="submit-section d-flex justify-content-end">
            <button className="btn btn-primary submit-btn">Submit</button>
            <button className="btn btn-secondary mr-1" onClick={cancel}>
              Cancel
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
