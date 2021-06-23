import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import NotesPage from "./pages/notesPage/notesPage";
import TakeNotePage from "./pages/takeNotePage/takeNotePage";
import "./App.css";
import { useState } from "react";

function App() {
  const [NoteContent, setNoteContent] = useState([]);
  const [notesPageGottenTitle, setNotesPageGottenTitle] = useState("");
  const [notesPageGottenDate, setNotesPageGottenDate] = useState("");
  const [notesPageGottenDetails, setNotesPageGottenDetails] = useState("");
  const [noteKey, setNoteKey] = useState("");
  const [isNotesPageNoteClicked, setIsNotesPageNoteClicked] = useState(false);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage setIsNotesPageNoteClicked={setIsNotesPageNoteClicked} />
        </Route>
        <Route path="/notes">
          <NotesPage
            NoteContent={NoteContent}
            setNoteContent={setNoteContent}
            setNotesPageGottenTitle={setNotesPageGottenTitle}
            setNotesPageGottenDate={setNotesPageGottenDate}
            setNotesPageGottenDetails={setNotesPageGottenDetails}
            setIsNotesPageNoteClicked={setIsNotesPageNoteClicked}
            isDeleteBtnClicked={isDeleteBtnClicked}
            setIsDeleteBtnClicked={setIsDeleteBtnClicked}
            noteKey={noteKey}
            setNoteKey={setNoteKey}
          />
        </Route>
        <Route path="/take-note">
          <TakeNotePage
            NoteContent={NoteContent}
            setNoteContent={setNoteContent}
            notesPageGottenTitle={notesPageGottenTitle}
            notesPageGottenDate={notesPageGottenDate}
            notesPageGottenDetails={notesPageGottenDetails}
            setNotesPageGottenTitle={setNotesPageGottenTitle}
            setNotesPageGottenDetails={setNotesPageGottenDetails}
            isNotesPageNoteClicked={isNotesPageNoteClicked}
            isDeleteBtnClicked={isDeleteBtnClicked}
            setIsDeleteBtnClicked={setIsDeleteBtnClicked}
            noteKey={noteKey}
            setNoteKey={setNoteKey}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
