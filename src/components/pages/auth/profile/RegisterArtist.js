import React, { useState } from "react";
import "../../../../css/registerartist.css";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import url from "../../../../services/url";
import Swal from "sweetalert2";
function RegisterArtist() {
  const [anhs, setAnhs] = useState([]);
  console.log(anhs);
  const onFileUploadHandler = (e) => {
    setAnhs(e.target.files);
  };
  const incacanh = () =>
    [...anhs].map((anh) => (
      <div>
        <img src={URL.createObjectURL(anh)} width="200px" />
      </div>
    ));

  const [formData, setFormData] = useState({
    fullname: "",
    biography: "",
    description: "",
    schoolOfArt: "",
    artWorkImage: null,
  });

  const [formErrors, setFormErrors] = useState({
    fullname: "",
    biography: "",
    description: "",
    schoolOfArt: "",
    artWorkImage: null,
  });

  const navigate = useNavigate();
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.fullname) {
      newErrors.fullname = "Please enter your full name.";
      valid = false;
    } else if (formData.fullname.length < 3) {
      newErrors.fullname = "Full name must have at least 3 characters";
      valid = false;
    }

    if (!formData.biography) {
      newErrors.biography = "Please enter your biography .";
      valid = false;
    } else if (!(formData.email)) {
      newErrors.biography = "Please enter biography";
      valid = false;
    }

    if (!formData.schoolOfArt) {
      newErrors.schoolOfArt = "Please enter your School Of Art.";
      valid = false;
    } else if (formData.schoolOfArt.length < 3) {
      newErrors.schoolOfArt = "School of Art invalid";
      valid = false;
    }


    if (formData.artWorkImage === null) {
      newErrors.artWorkImage = "Please choose photo";
      valid = false;
    }
    setFormErrors(newErrors);
    return valid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const registerRequest = await api.post(url.REGISTER_ARTIST.CREATE, formData);

        if (registerRequest.status === 201) {
          Swal.fire({
            title: "Register Success",
            text: "Register Success!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/profile");
        }
        else if (registerRequest.status === 400) {
          Swal.fire({
            title: "User has already register to artist",
            text: "User has already register to artist!",
            icon: "warning",
            confirmButtonText: "OK",
          })
        }
      } catch (error) {
        console.log("error");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  return (
    <div className="formedit">
      {/* <link rel="stylesheet" href="assets/css/registerartist.css" /> */}
      <div
        class="menu-left d-flex align-items-center"
        style={{ width: "300px", margin: "30px 0 0 50px" }}
      >
        <p>
          <a class="aaa" style={{ color: "#000" }} href="/profile">
            {" "}
            Profile
          </a>
        </p>
      </div>

      <hr className="hrdev" style={{ marginTop: "20px" }} />
      <form onSubmit={handleRegister}>
        <div style={{ display: "flex" }} class="edit">
          <div class="file">
            <h1 className="hatmotre">Register Artist</h1>

            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input
                    className="inedit"
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    autoFocus />
                  <div class="labelline">Artist Name</div>
                </div>
                {formErrors.fullname && (
                  <p className="invalid-feedback">{formErrors.fullname}</p>
                )}
              </div>
            </div>
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input
                    className="inedit"
                    type="text"
                    name="biography"
                    id="biography"
                    value={formData.biography}
                    onChange={handleChange}
                    autoFocus />
                  <div class="labelline">Biography</div>
                </div>
                {formErrors.biography && (
                  <p className="invalid-feedback">{formErrors.biography}</p>
                )}
              </div>
            </div>
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input
                    className="inedit"
                    type="text"
                    name="schoolOfArt"
                    id="schoolOfArt"
                    value={formData.schoolOfArt}
                    onChange={handleChange}
                    autoFocus />
                  <div class="labelline">School Of Art</div>
                </div>
                {formErrors.schoolOfArt && (
                  <p className="invalid-feedback">{formErrors.schoolOfArt}</p>
                )}
              </div>
            </div>
            <div class="menu-left-right ml-3" id="menu-left-right">
              <input
                className="upimg"
                type="file"
                name="artWorkImage" 
                accept=".jpg, .png, .etc"
                onChange={handleChange}
              />
              {formErrors.artWorkImage && <div className="text-danger">{formErrors.artWorkImage}</div>}
              {/* <div className="image-gallery">{incacanh()}</div> */}
            </div>
          </div>
        </div>
        <button type="submit" id="button-submit_registerPage">
          Register
        </button>
      </form>

    </div >

  );
}

export default RegisterArtist;
