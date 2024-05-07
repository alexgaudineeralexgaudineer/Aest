import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// StudentView Component
const StudentView = () => {
  const teacherImageAlpaca = "https://www.cs.iastate.edu/files/styles/people_thumb/public/people/profilepictures/1517665937421.jpg?itok=15jJS_fr";

  return (
      <div className="student-view p-5" style={{ backgroundColor: "#2F4F4F" }}>
        <div className="container-fluid py-5 bg-dark text-white rounded shadow-lg">
          <h1 className="display-4 text-center text-info">SE/COMS 319</h1>
          <p className="fs-4 text-center text-light">
            SE/COMS 319 teaches website programming and creation at Iowa State University.
          </p>
        </div>

        <div className="container-fluid p-4 rounded-lg" style={{ backgroundColor: "#778899" }}>
          <h2 className="text-center text-warning">Professor</h2>
          <div className="d-flex justify-content-center">
            <div className="card bg-light text-dark p-3 rounded-lg shadow-lg" style={{ border: "2px solid #FFD700" }}>
              <h3 className="text-center">Professor Aldaco</h3>
              <img
                  className="rounded-circle"
                  src={teacherImageAlpaca}
                  alt="Professor Alpaca"
                  style={{ width: "120px", border: "3px solid #FFD700" }}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid p-4 rounded-lg mt-4 shadow-lg" style={{ backgroundColor: "#708090" }}>
          <h2 className="text-center text-light">Students</h2>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card bg-light text-dark p-3 rounded-lg shadow-lg" style={{ border: "2px solid #00FA9A" }}>
                <h3 className="text-center">Niraj Amin</h3>
                <p className="text-center fs-6">An extremely skilled computer scientist specializing in big data.</p>
                <p className="text-center fs-6">
                  Email: namin@iastate.edu
                  <br />
                  Junior, loves cats and video games.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card bg-light text-dark p-3 rounded-lg shadow-lg" style={{ border: "2px solid #00FA9A" }}>
                <h3 className="text-center">Alex Gaudineer</h3>
                <p className="text-center fs-6">A software engineer who aspires to be a Project Manager post-grad.</p>
                <p className="text-center fs-6">
                  Email: alexgaud@iastate.edu
                  <br />
                  Junior, loves everything about engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-primary text-white p-4 rounded-lg mt-4 shadow-lg">
          <h2 className="text-center">Date: 4/27/24</h2>
          <p className="fs-4 text-center">
            This project involves creating an API for a MERN stack website. It includes MongoDB, Express, React, and NodeJS.
          </p>
        </div>
      </div>
  );
};

// CreateView Component
const CreateView = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rate: 0,
    count: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/addProduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formData.id,
          title: formData.title,
          price: formData.price,
          description: formData.description,
          category: formData.category,
          image: formData.image,
          rating: {
            rate: formData.rate,
            count: formData.count,
          },
        }),
      });
      if (response.ok) {
        console.log("Product created successfully!");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
      <div className="container">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Product ID
            </label>
            <input
                type="number"
                className="form-control"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
                className="form-control"
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                required
                value={formData.image}
                onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rate" className="form-label">
              Rating Rate
            </label>
            <input
                type="number"
                className="form-control"
                id="rate"
                name="rate"
                required
                min="0"
                max="5"
                value={formData.rate}
                onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="count" className="form-label">
              Rating Count
            </label>
            <input
                type="number"
                className="form-control"
                id="count"
                name="count"
                required
                min="0"
                value={formData.count}
                onChange={handleChange}
            />
          </div>
          <button
              type="submit"
              className="btn btn-success"
          >
            Submit
          </button>
        </form>
      </div>
  );
};

// ReadView Component
const ReadView = () => {
  const LoadProducts = () => {
    fetch("http://127.0.0.1:8081/listProducts")
        .then((response) => response.json())
        .then((myProducts) => loadMyProducts(myProducts));

    const loadMyProducts = (myProducts) => {
      const ProductsContainer = document.getElementById("ProductsContainer");
      ProductsContainer.innerHTML = `
        <div class="row border-bottom">
          <div class="row main align-items-center">
            <div class="col">Item:</div>
            <div class="col">Image:</div>
            <div class="col">Title:</div>
            <div class="col">Category:</div>
            <div class="col">Description:</div>
            <div class="col">Price:</div>
            <div class="col">Rating:</div>
            <div class="col">Rating Count:</div>
          </div>
        </div>
      `;

      myProducts.forEach((product) => {
        ProductsContainer.innerHTML += `
          <div class="row border-top" key=${product._id}>
            <div class="row main align-items-center">
              <div class="col">${product.id}</div>
              <div class="col">
                <img class="img-fluid" width={30} src=${product.image} alt="" />
              </div>
              <div class="col">${product.title}</div>
              <div class="col">${product.category}</div>
              <div class="col">${product.description}</div>
              <div class="col">${product.price}</div>
              <div class="col">${product.rating.rate}</div>
              <div class="col">${product.rating.count}</div>
            </div>
          </div>
        `;
      });
    };
  };

  const LoadProduct = () => {
    const singleRobotInput = document.getElementById("SingleRobotByID");
    fetch("http://127.0.0.1:8081/listProducts/" + singleRobotInput.value)
        .then((response) => response.json())
        .then((myProduct) => loadMyProduct(myProduct));

    const loadMyProduct = (myProduct) => {
      const ProductsContainer = document.getElementById("ProductsContainer");

      ProductsContainer.innerHTML = `
        <div class="row border-bottom">
          <div class="row main align-items-center">
            <div class="col">Item:</div>
            <div class="col">Image:</div>
            <div class="col">Title:</div>
            <div class="col">Category:</div>
            <div class="col">Description:</div>
            <div class="col">Price:</div>
            <div class="col">Rating:</div>
          </div>
        </div>
      `;

      ProductsContainer.innerHTML += `
        <div class="row border-top" key=${myProduct._id}>
          <div class="row main align-items-center">
            <div class="col">${myProduct.id}</div>
            <div class="col">
              <img class="img-fluid" width={30} src=${myProduct.image} alt="" />
            </div>
            <div class="col">${myProduct.title}</div>
            <div class="col">${myProduct.category}</div>
            <div class="col">${myProduct.description}</div>
            <div class="col">${myProduct.price}</div>
            <div class="col">${myProduct.rating.rate}</div>
          </div>
        </div>
      `;
    };
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn border-black" onClick={LoadProducts}>
              Get All Products
            </button>
          </div>
          <div className="col">
            <input
                type="number"
                id="SingleRobotByID"
                placeholder="Enter product ID"
            />
            <button
                className="btn border-black"
                onClick={LoadProduct}
            >
              Get Product by ID
            </button>
          </div>
        </div>
        <br />
        <div id="ProductsContainer"></div>
      </div>
  );
};

// UpdateView Component
const UpdateView = () => {
  const [productId, setProductId] = useState(""); // Track product ID
  const [product, setProduct] = useState(null); // Store product details
  const [updatedData, setUpdatedData] = useState({}); // Track updated values

  const fetchProduct = async () => {
    if (productId) {
      try {
        const response = await fetch(`http://localhost:8081/listProducts/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data); // Set product details to display in the form
          setUpdatedData(data);
        } else {
          console.error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8081/updateProduct/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // Send updated data
      });
      if (response.ok) {
        console.log("Product updated successfully!");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <div className="container">
        <h1>Update Product</h1>

        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Product ID
          </label>
          <input
              type="number"
              className="form-control"
              id="productId"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
          />
          <button className="btn btn-info" onClick={fetchProduct}>
            Fetch Product
          </button>
        </div>

        {product && (
            <div>
              <h2>Current Product Details</h2>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <p>Category: {product.category}</p>
              <p>Rating: {product.rating.rate}</p>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  New Price
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={updatedData.price || product.price}
                    onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  New Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={updatedData.title || product.title}
                    onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" class="form-label">
                  New Description
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={updatedData.description || product.description}
                    onChange={handleChange}
                ></textarea>
              </div>

              <button
                  className="btn btn-success"
                  onClick={handleUpdate}
              >
                Update Product
              </button>
            </div>
        )}
      </div>
  );
};

// DeleteView Component
const DeleteView = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8081/listProducts")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
  }, []);

  const getOneByOneProductNext = () => {
    if (products.length > 0) {
      if (index === products.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  const getOneByOneProductPrev = () => {
    if (products.length > 0) {
      if (index === 0) {
        setIndex(products.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  const deleteOneProduct = (id) => {
    fetch(`http://localhost:8081/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
        .then((response) => {
          if (response.ok) {
            const newProducts = products.filter(
                (product) => product.id !== id
            );
            setProducts(newProducts);
            setIndex(0);
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
  };

  const confirmDeletion = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteOneProduct(products[index].id);
    }
  };

  return (
      <div className="container">
        <h3 className="text-center">Select a product to delete:</h3>
        <div className="row">
          <button className="btn col-1" onClick={getOneByOneProductPrev}>
            ◀
          </button>
          <div className="col text-center" key={products[index].id}>
            <img src={products[index].image} width={30} alt="" />
            <br />
            Id: {products[index].id} <br />
            Title: {products[index].title} <br />
            Category: {products[index].category} <br />
            Price: {products[index].price} <br />
            Rating: {products[index].rating.rate} <br />
            (Averaged over {products[index].rating.count} ratings)
            <br />
          </div>
          <button className="btn col-1" onClick={getOneByOneProductNext}>
            ▶
          </button>
        </div>
        <div className="row">
          <button
              className="btn border-black col-4 btn-outline-danger"
              onClick={confirmDeletion}
          >
            Delete Product
          </button>
        </div>
      </div>
  );
};

// App Component
function App() {
  const [activeTab, setActiveTab] = useState("students");

  const createHeader = () => {
    return (
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li
                className={`nav-item ${
                    activeTab === "students" ? "active" : ""
                }`}
            >
              <p
                  className="nav-link"
                  onClick={() => setActiveTab("students")}
              >
                Students
              </p>
            </li>
            <li
                className={`nav-item ${
                    activeTab === "crud" ? "active" : ""
                }`}
            >
              <p
                  className="nav-link"
                  onClick={() => setActiveTab("crud")}
              >
                CRUD Operations
              </p>
            </li>
          </ul>
        </header>
    );
  };

  const createFooter = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
            Com S 319
            <br />
            Niraj Amin & Alex Gaudineer
          </p>
        </footer>
    );
  };

  return (
      <div>
        {createHeader()}
        <div className="container">
          {activeTab === "students" && <StudentView />}
          {activeTab === "crud" && (
              <div>
                <CreateView />
                <ReadView />
                <UpdateView />
                <DeleteView />
              </div>
          )}
        </div>
        {createFooter()}
      </div>
  );
}

export default App;
