import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./images.css";
function CreateNote({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState('')
  const [pic, setPic] = useState();
  const [picMessage,setPicMessage] = useState();

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

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

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setPic("");
    setStatus("")
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category, status, pic));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Project">
      <Card>
        <Card.Header>Create a new Project</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

            <Form.Group controlId="title">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input
                    type="file"
                    id="imageUpload"
                    onChange={(e) => postDetails(e.target.files[0])}
                    accept=".png, .jpg, .jpeg"
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
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the Name"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the Details"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Type"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="status"
                value={status}
                placeholder="Enter the Status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Project
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;
