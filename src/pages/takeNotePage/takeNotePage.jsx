import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import { NoteContent } from "../../NotesContent";
import "./takeNotePage.scss";

const TakeNotePage = ({
  notesPageGottenTitle,
  notesPageGottenDate,
  notesPageGottenDetails,
  setNotesPageGottenTitle,
  setNotesPageGottenDetails,
  isFromNotesPage,
}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDetails, setNoteDetails] = useState("");
  const [gottenTitle, setGottenTitle] = useState("");
  const [gottenDate, setGottenDate] = useState("");
  const [gottenDetails, setGottenDetails] = useState("");
  const [isReloadingPage, setIsReloadingPage] = useState(false);
  const [isSideBarNoteClicked, setIsSideBarNoteClicked] = useState(false);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
  const noteDate = useRef(new Date().toDateString());

  const saveNote = () => {
    isSideBarNoteClicked
      ? NoteContent.push({
          title: gottenTitle,
          date: noteDate.current,
          details: gottenDetails,
        })
      : isFromNotesPage
      ? NoteContent.push({
          title: notesPageGottenTitle,
          date: noteDate.current,
          details: notesPageGottenDetails,
        })
      : NoteContent.push({
          title: noteTitle,
          date: noteDate.current,
          details: noteDetails,
        });
  };

  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <SideBar
          isReloadingPage={isReloadingPage}
          setIsSideBarNoteClicked={setIsSideBarNoteClicked}
          setGottenDate={setGottenDate}
          setGottenDetails={setGottenDetails}
          setGottenTitle={setGottenTitle}
        />

        <div className="takeNotesPage__right">
          <div className="takeNotesPage__right__title">
            <label htmlFor="title">Title:</label>
            <input
              autoComplete="off"
              type="text"
              id="title"
              autoFocus
              value={
                isSideBarNoteClicked
                  ? gottenTitle
                  : isFromNotesPage
                  ? notesPageGottenTitle
                  : noteTitle
              }
              onChange={({ target }) => {
                isSideBarNoteClicked
                  ? setGottenTitle(target.value)
                  : isFromNotesPage
                  ? setNotesPageGottenTitle(target.value)
                  : setNoteTitle(target.value);
              }}
            />
          </div>
          <div className="takeNotesPage__right__sub">
            <p className="takeNotesPage__right__sub--date">
              Date:{" "}
              <span>
                {isSideBarNoteClicked
                  ? gottenDate
                  : isFromNotesPage
                  ? notesPageGottenDate
                  : noteDate.current}
              </span>
            </p>
            <div className="takeNotesPage__right__sub--buttons">
              <button
                className="takeNotesPage__right__sub--buttons--1"
                onClick={() => {
                  setIsDeleteBtnClicked(true);
                }}
              >
                Delete
              </button>

              <button
                className="takeNotesPage__right__sub--buttons--2"
                onClick={() => {
                  saveNote();
                  setIsReloadingPage(true);
                  setTimeout(() => {
                    setIsReloadingPage(false);
                  }, 100);
                }}
              >
                Save
              </button>
            </div>
          </div>
          {isDeleteBtnClicked && (
            <ConfirmBox setIsDeleteBtnClicked={setIsDeleteBtnClicked} />
          )}
          <textarea
            value={
              isSideBarNoteClicked
                ? gottenDetails
                : isFromNotesPage
                ? notesPageGottenDetails
                : noteDetails
            }
            onChange={({ target }) => {
              isSideBarNoteClicked
                ? setGottenDetails(target.value)
                : isFromNotesPage
                ? setNotesPageGottenDetails(target.value)
                : setNoteDetails(target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TakeNotePage;
