import { useState, useMemo, useEffect, useCallback } from "react";
import { getAccessToken } from "../../../../utils/auth";
import { Link } from "react-router-dom";
import api from "../../../../services/api"
import url from "../../../../services/url"
import Swal from "sweetalert2";
import "../../../../css/bootstrap.css";
function Follows() {


  const [follow, setFollow] = useState([]);

  const userToken = getAccessToken();

  const config = useMemo(() => {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
  }, [userToken]);

  // Get follow by user
  const loadFollow = useCallback(async () => {
    try {
      const followResponse = await api.get(url.FOLLOW.BY_USER, config);
      setFollow(followResponse.data);
    } catch (error) { }
  }, [config]);

  useEffect(() => {
    loadFollow();
  }, [loadFollow]);

  // Remove follow
  const handleRemoveFollowItem = async (artistId) => {
    try {
      const isConfirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You want to remove it from your favorites list?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "I'm sure",
      });

      if (isConfirmed.isConfirmed) {
        const removeResponse = await api.delete(url.FOLLOW.REMOVE + `?id=${artistId}`, config);
        if (removeResponse.status === 200) {
          loadFollow();
        }
      }

      setTimeout(() => {
      }, 2000);
    } catch (error) { }
  };

  return (
    <div style={{ marginTop: "20px" }} class="container">
      <link rel="stylesheet" href="assets/css/follows.css" />

      <div
        class="menu"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          class="menu-left d-flex align-items-center"
          style={{ width: "300px" }}
        >
          <img
            className="imgfollow"
            src="assets/images/profile/user.png"
            alt=""
            style={{ borderRadius: "50%", width: "100px" }}
          />
          <div class="menu-left-right ml-3">
            <h3>Hieu</h3>
            <p style={{ color: "#707070" }}>Member since 2024</p>
          </div>
        </div>
        <div class="menu-right">
          <a href="/edit">
            <button class="btn-1">Settings</button>
          </a>
        </div>
      </div>
      <div class="menu-bottom">
        <p>hieudeptrai</p>
        <p style={{ color: "#707070" }}>
          <i class="fa-solid fa-location-dot"></i> VietNam
        </p>
      </div>
      <div class="navbar">
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <div class="container-fluid">
            <div
              class="collapse navbar-collapse nav-fill"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav w-100 justify-content-between">
                <li class="nav-item">
                  <a class="nav-link" href="/profile">
                    My Collection
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/setting">
                    Account Settings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/artwork-saves">
                    Saves
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "#000" }}
                    class="nav-link"
                    href="/artist-follow"
                  >
                    Follows
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {follow.length > 0 ? (
            follow.map((item, index) => (
      <div class="noment">
        <div class="headen">
          <img
            className="imgfollow"
            src="artist-profile.jpg"
            alt="Artist Profile Picture"
          />
          <div>
            <h1 className="hatflo">Lene Kilde</h1>
            <p className="peflo">Norwegian, b. 1981</p>
          </div>
          <button className="butfolo">Unfollow</button>
        </div>
        <div className="image-row">
          <div className="image-scroll-container">
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 1"
              className="scroll-image"
            />
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 2"
              className="scroll-image"
            />
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 3"
              className="scroll-image"
            />
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 4"
              className="scroll-image"
            />
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />{" "}
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />{" "}
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />{" "}
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />{" "}
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />{" "}
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />{" "}
            <img
              src="assets/images/follow/d7hftxdivxxvm.cloudfront.webp"
              alt="Image 5"
              className="scroll-image"
            />
          </div>
        </div>
      </div>
      ))
    )
      : (
        <div className="favorite-not">
          <img src="./assets/images/home/404.png" alt="Not Found" style={{ width: "100%" }} />
          <p>You don't have any Artist in your favorites list yet.</p>
          <a class="custom-button back-button" href="/artist">
            <i class="far fa-reply"></i> Follow them now
          </a>
        </div>
      )
    }

    </div>
  );
}

export default Follows;
