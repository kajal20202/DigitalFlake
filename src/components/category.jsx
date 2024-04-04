import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../App.css";
import { Button } from "bootstrap";

const Category = () => {
  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

  const { handleSubmit: handleDelete } = useForm({});

  const [focused, setFocused] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteCaegoryData, setDeleteCaegoryData] = useState(null);
  const navigate = useNavigate();
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const getselector = [
    {
      id: 1,
      category_name: "ABC",
      description: "High priority",
      status: "Active",
    },
    {
      id: 2,
      category_name: "XYZ",
      description: "Sleeper",
      status: "Inactive",
    },
  ];

  useEffect(() => {}, []);

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditData(record);
    setValue("name", record.name);
    setValue("description", record.description);
    setValue("status", record.status);
  };

  const onUpdate = () => {
    console.log("objectccccc");
    setIsEditFormVisible(false);
  };

  useEffect(() => {
    console.log("isEditFormVisible:", isEditFormVisible);
  }, [isEditFormVisible]);

  const DeleteCategory = (record) => {
    setDeleteCaegoryData(record);
  };

  const onDelete = () => {
    setIsDeleteConfirmationVisible(false);
  };

  const onCategory = () => {
    navigate("/sidebar/AddCategory");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => parseInt(a.id) - parseInt(b.id),
    },
    {
      title: "Name",
      dataIndex: "category_name",
      sorter: (a, b) => a.category_name.localeCompare(b.category_name),
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            className="btn btn-success btn-sm m-r-5"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit"
            onClick={() => onEdit(record)}
          >
            <EditOutlined />
          </Link>
          <Link
            className="btn btn-danger btn-sm"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete"
            onClick={() => {
              DeleteCategory(record);
            }}
          >
            <DeleteOutlined />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-2">
              <h4>Category</h4>
            </div>
            <div className="col-4">
              {/* Search Filter */}

              <div className="search-container">
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Search..."
                />
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>

              {/* /Search Filter */}
            </div>
          </div>
        </div>

        <div className="col-6">
          <button
            onClick={onCategory}
            className="btn add-btn"
            style={{ backgroundColor: "#007bff", color: "white" }}
          >
            <i className="fa fa-plus" /> Add Category
          </button>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <Table
                    className="table-striped"
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    bordered
                    dataSource={getselector}
                    rowKey={(record) => record.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit category model */}

      <div id="edit" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Category</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdate(onUpdate)}>
                <div className="input-block">
                  <label>
                    {" "}
                    Name<span className="text-danger">*</span>
                  </label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend"></div>
                      <input
                        className="form-control"
                        type="text"
                        {...updateregister("name")}
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="input-block">
                  <label>
                    {" "}
                    Description
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend"></div>
                      <input
                        className="form-control"
                        type="text"
                        {...updateregister("description")}
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="input-block">
                  <label>
                    {" "}
                    Status <span className="text-danger">*</span>
                  </label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend"></div>
                      <input
                        className="form-control"
                        type="text"
                        {...updateregister("status")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>

                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* {/ /Edit Category Modal End /}
      
        {/ Delete Category Modal /} */}
      <div className="modal custom-modal fade" id="delete" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Ctegory</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <Link
                      to=""
                      className="btn btn-primary continue-btn"
                      onClick={handleDelete(onDelete)}
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to=""
                      data-bs-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
