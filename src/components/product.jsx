import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../App.css";
import { Button } from "bootstrap";

const Product = () => {
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
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });

  const getselector = [
    {
      id: 1,
      category_name: "ABC",
      packsize: "somthing",
      status: "Active",
      category: "A1",
      mrp: "2000",
      image: "url_to_image1.jpg",
      status: "Active",
    },
    {
      id: 2,
      category_name: "XYZ",
      packsize: "somthing",
      status: "Inactive",
      category: "A1",
      mrp: "2000",
      image: "url_to_image1.jpg",
      status: "Active",
    },
  ];

  useEffect(() => {}, []);

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditData(record);
    setValue("name", record.name);
    setValue("packsize", record.packsize);
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

  const onProduct = () => {
    navigate("/sidebar/AddProduct");
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (index) => {
        const { pageSize, current } = tablePagination;
        return index + 1 + pageSize * (current - 1);
      },
    },
    {
      title: "Name",
      dataIndex: "category_name",
      sorter: (a, b) => a.category_name.localeCompare(b.category_name),
    },
    {
      title: "Pack Size",
      dataIndex: "packsize",
      sorter: (a, b) => a.packsize.localeCompare(b.packsize),
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "MRP",
      dataIndex: "mrp",
      sorter: (a, b) => a.mrp.localeCompare(b.mrp),
    },
    {
      title: "Image",
      dataIndex: "image",
      sorter: (a, b) => a.image.localeCompare(b.image),
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
              <h4>Product</h4>
            </div>
            {/* Search Filter */}
            <div className="col-4">
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
            </div>

            {/* /Search Filter */}
          </div>
        </div>

        <div className="col-6">
          <button
            onClick={onProduct}
            className="btn add-btn"
            style={{ backgroundColor: "#007bff", color: "white" }}
          >
            <i className="fa fa-plus" /> Add Product
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

      {isEditFormVisible && (
        <div id="edit" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
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
                  <div className="row">
                    <div className="col-6">
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
                          Pack Size
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend"></div>
                            <input
                              className="form-control"
                              type="text"
                              {...updateregister("packsize")}
                            />
                          </div>
                        </div>
                      </div>
                      <br></br>
                      <div className="input-block">
                        <label>
                          {" "}
                          Category <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend"></div>
                            <input
                              className="form-control"
                              type="text"
                              {...updateregister("category")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-block">
                        <label>
                          {" "}
                          MRP <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend"></div>
                            <input
                              className="form-control"
                              type="number"
                              {...updateregister("mrp")}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-block">
                        <label>
                          {" "}
                          Image <span className="text-danger">*</span>
                        </label>

                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend"></div>
                            <input
                              className="form-control"
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </div>
                        </div>
                      </div>

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
                    </div>

                    <br></br>

                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {/ /Edit Product Modal /}
        {/ Delete Product Modal /} */}
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

export default Product;
