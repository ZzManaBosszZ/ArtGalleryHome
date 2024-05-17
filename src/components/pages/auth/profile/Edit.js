import React from "react";
import { Link } from "react-router-dom";
import "../../../../css/edit.css";
function Edit() {
  const [anhs, setAnhs] = useState([]);
  const [info, setInfo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({});

  const incacanh = () =>
    [...anhs].map((anh) => (
      <div>
        <img src={URL.createObjectURL(anh)} width="200px" />
      </div>
    ));

  const handleSaveClick = async () => {
    try {
      const userToken = getAccessToken();

      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };

      const formData = new FormData();

      for (const key in editedInfo) {
        formData.append(key, editedInfo[key]);
      }

      // Send the request
      const isConfirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You want to update your information?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "I'm sure",
      });

      if (isConfirmed.isConfirmed) {
        const updateResponse = await api.put(url.AUTH.UPDATE_PROFILE, formData, config);

        if (updateResponse.status === 204) {
          console.log("Successfully updated");
        } else {
        }
      }

      // Update the local state with edited information
      setInfo(editedInfo);
      setIsEditing(false);
    } catch (error) { }
  };

  const loadProfile = async () => {
    const userToken = getAccessToken();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      const profileResponse = await api.get(url.AUTH.PROFILE, config);
      setInfo(profileResponse.data);
    } catch (error) { }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const onFileUploadHandler = (e) => {
    setAnhs(e.target.files);
  };
  return (
    <div className="formedit-page">
      {/* <link rel="stylesheet" href="assets/css/profile/edit.css" /> */}
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
      <nav style={{ marginTop: "50px" }} id="profile-navigation">
        <ul className="ghye">
          <li className="hjpk">
            <Link to={`/edit-profile`}>
              <a className="lkm">Edit Profile</a>
            </Link>
          </li>
          <li className="hjpk">
            <Link to={`/offer-history`}>
              <a className="lkm">Offer History</a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="hrdev" style={{ marginTop: "10px" }} />
      <div style={{ display: "flex" }} class="edit">
      <div class="file">
          <div class="menu-left-right ml-3">
            <input
              className="upimg"
              type="file"
              accept="image/*"
              onChange={onFileUploadHandler}
            />
            <div className="image-gallery">{incacanh()}</div>
          </div>
          <div className="list-input_info">
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input className="inedit" type="text" required />
                  <div class="labelline">Full Name</div>
                </div>
              </div>
            </div>
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input className="inedit" type="text" required />
                  <div class="labelline">Birthday</div>
                </div>
              </div>
            </div>
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input className="inedit" type="text" required />
                  <div class="labelline">AddPhone</div>
                </div>
              </div>
            </div>
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input className="inedit" type="text" required />
                  <div class="labelline">Address</div>
                </div>
              </div>
            </div>
            <div class="hhh">
              <div class="container">
                <div class="entryarea">
                  <input className="inedit" type="text" required />
                  <div class="labelline">About</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <button type="submit" class="button-save_editPage">
        Save
      </button>
    </div>
  );
}

export default Edit;
