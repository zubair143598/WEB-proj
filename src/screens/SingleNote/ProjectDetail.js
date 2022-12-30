import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const ProjectDetail = ({ match, history }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [pic, setPic] = useState();
  const [message, setMessage] = useState("");

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setPic(data.pic);
      setStatus(data.status);
      setDate(data.updatedAt);
    };

    fetching();
  }, [match.params.id, date]);

  const onSubmit = (e) => {
    axios
      .post("/api/chat/create", { message })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <MainScreen title="Project Detail">
      <Card>
        <Card.Header>Project Detail</Card.Header>
        <Card.Body>
          {loadingDelete && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {errorDelete && (
            <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
          )}
          <Form.Group controlId="Picture" className="text-center">
            <img className="m-auto" src={pic} width="300" height="250" alt="img" />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="title"
              disabled
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              disabled
              placeholder="Details"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="content"
              disabled
              placeholder="Type"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="status"
              disabled
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>
          {loading && <Loading size={50} />}
          <h1 className="text-center">Let's Talk or Submit Project</h1>
          <div className="p-5">
            <Button
              variant="outline-success"
              onClick={() => openInNewTab("https://meet.google.com")}
            >
              Google Meet
            </Button>
            <Link to="/upload">
              <Button variant="outline-primary" className="float-right">
                Submit Project
              </Button>
            </Link>
          </div>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default ProjectDetail;
