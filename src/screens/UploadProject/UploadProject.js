import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";

const UploadProject = () => {
  const [picMessage, setPicMessage] = useState(null);
  const [pic, setPic] = useState("");

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <MainScreen title="Upload Project">
      <div className="row">
        <div className="col-md-8">
          <div className="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <label htmlFor="imageUpload"></label>
          </div>
          <div className="avatar-preview">
            <div
              id="imagePreview"
              style={{ backgroundImage: `url(${pic})` }}
            ></div>
          </div>
        </div>
        <div className="col-md-4">
          <Link to="/payment">
            <Button>Proceed To Payment</Button>
          </Link>
        </div>
      </div>
    </MainScreen>
  );
};

export default UploadProject;
