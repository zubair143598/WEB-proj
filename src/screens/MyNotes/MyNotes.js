import React, { useEffect } from "react";
import { Badge, Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function MyNotes({ history, search }) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      {console.log(notes)}
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Project
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      <CardGroup className="d-flex">
        {notes &&
          notes
            .filter(
              (filteredNote) =>
                filteredNote.title
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                filteredNote.status
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                filteredNote.category
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .reverse()
            .map((note) => (
              <Row xs={1} md={1} className="g-4">
                <Col>
                  <Card style={{ width: "18rem", margin: "20px 0 0 90px" }}>
                    <Card.Img
                      variant="top"
                      src={note.pic}
                      width="268px"
                      height="190px"
                    />
                    <Card.Body>
                      <Card.Title>{note.title}</Card.Title>
                      <Card.Text>{note.content}</Card.Text>
                      <h4>
                        <Badge variant="success">Status - {note.status}</Badge>
                      </h4>
                      <h4>
                      <Badge variant="primary">Category - {note.category}</Badge>
                      </h4>
                      <Button
                        variant="primary"
                        className="mx-3"
                        href={`/note/${note._id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="success"
                        className="mx-2"
                        href={`/detail/${note._id}`}
                      >
                        Detail
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
      </CardGroup>
    </MainScreen>
  );
}

export default MyNotes;
