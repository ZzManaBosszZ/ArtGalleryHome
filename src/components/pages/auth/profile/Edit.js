import React from "react";
import { useState, useRef } from "react";
function Edit() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Please enter your password.";
      valid = false;
    } else if (formData.currentPassword.length < 6) {
      newErrors.currentPassword = "Password must be at least 6 characters.";
      valid = false;
    } else if (formData.currentPassword.length > 50) {
      newErrors.currentPassword = "Password must be less than 50 characters.";
      valid = false;
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "Please enter a new password.";
      valid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters.";
      valid = false;
    } else if (formData.newPassword.length > 50) {
      newErrors.newPassword = "New password must be less than 50 characters.";
      valid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
      valid = false;
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };
  return (
    <div>
      <div
        class="menu-left d-flex align-items-center"
        style={{ width: "300px", margin: "30px 0 0 50px" }}
      >
        <p>
          <a class="aaa" style={{ color: "#000" }} href="Collection.html">
            {" "}
            Collector Profile
          </a>
        </p>
      </div>
      <hr style={{ marginTop: "20px" }} />
      <nav style={{ marginTop: "50px" }} id="profile-navigation">
        <ul>
          <li>
            <a href="#">Edit Profile</a>
          </li>
          <li>
            <a class="tip" href="#">
              Alerts
            </a>
          </li>
          <li>
            <a class="tip" href="#">
              Account Settings
            </a>
          </li>
          <li>
            <a class="tip" href="#">
              Order History
            </a>
          </li>
          <li>
            <a class="tip" href="#">
              Bids
            </a>
          </li>
          <li>
            <a class="tip" href="#">
              Payments
            </a>
          </li>
          <li>
            <a class="tip" href="#">
              Shipping
            </a>
          </li>
        </ul>
      </nav>
      <hr style={{ marginTop: "10px" }} />
      <div style={{ display: "flex" }} class="edit">
        <div class="file">
          <img
            src="/art/img/user.png"
            alt=""
            style={{
              borderRadius: "50%",
              width: "100px",
              marginTop: "20px",
              marginLeft: "50px",
            }}
          />
          <div class="menu-left-right ml-3">
            <a style={{ color: "#707070" }} href="">
              <p style={{ marginLeft: "50px" }}>Choose an Image</p>
            </a>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">Full Name</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">Birthday</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">AddPhone</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">About</div>
              </div>
            </div>
          </div>
        </div>

        <div class="changepass">
          <div class="card">
            <div class="card_img">
              <img
                class="imgpass"
                src="/art/img/pngtree-simple-vector-illustration-padlock-design-png-image_5343570.jpg"
                alt=""
              />
            </div>
            <h2>Change Password?</h2>
            <p>Click here to change password</p>
            <button style={{ color: "#000" }} class="matkhau" id="openModal">
              Change Password
            </button>
            {modalOpen && (
              <div id="myModal" class="modal" onClick={handleOutsideClick}>
                <div class="modal-content">
                  <span class="close" onClick={closeModal}>
                    &times;
                  </span>
                  <div class="input-container">
                    <p>Change Password</p>
                    <form
                      className="comment-form"
                      onSubmit="{handleChangePassword}"
                    >
                      <div style={{ marginTop: "20px" }} class="chinh">
                        <input
                          class="ins"
                          type="password"
                          placeholder="Current
                    Password"
                          required
                          className={`form-control
                    ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                        />
                      </div>
                      <br />
                      <div style={{ marginTop: "50px" }} class="chinh">
                        <input
                          className={`form-control ${
                            formErrors.newPassword ? "is-invalid" : ""
                          }`}
                          class="ins"
                          type="password"
                          placeholder="Password"
                          value={formData.currentPassword}
                          onChange={handleChange}
                        />
                        {formErrors.newPassword && (
                          <p className="invalid-feedback">
                            {formErrors.newPassword}
                          </p>
                        )}
                      </div>
                      <br />
                      <div style={{ marginTop: "50px" }} class="chinh">
                        <input
                          class="ins"
                          type="password"
                          placeholder="Confirm
                    Password"
                          className={`form-control
                    ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                          name="confirmPassword"
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        {formErrors.confirmPassword && (
                          <p className="invalid-feedback">
                            {formErrors.confirmPassword}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn-1"
                        style={{ margin: "70px 20px 0 0" }}
                      >
                        Change Password
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button type="submit" class="btn-1">
        Save
      </button>
    </div>
  );
}

export default Edit;
