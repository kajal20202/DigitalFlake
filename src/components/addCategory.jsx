import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [status, setStatus] = useState("Active"); // Default status
  const navigate = useNavigate();

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const cancel = () => {
    navigate("/sidebar/Category");
  };
  return (
    <div className="page-wrapper">
      {/* {/ Add Caegory Modal /} */}
      <h4>Add Category</h4>
      <br />
      <div className="addCategorybody">
        <form>
          <div className="input-block">
            <div className="row">
              <div className="col-4">
                <label>
                  Category <span className="text-danger">*</span>
                  <input className="form-control" type="text" />
                </label>
              </div>

              <div className="col-4">
                <label>
                  Description <span className="text-danger">*</span>
                  <input className="form-control" type="text" />
                </label>
              </div>

              <div className="col-4">
                <label>
                  Status <span className="text-danger">*</span>
                  <div className="custom-select">
                    <select
                      className="form-control"
                      value={status}
                      onChange={handleStatusChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
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

export default AddCategory;
