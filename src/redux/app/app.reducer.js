import appTypes from "./app.types";

const INITIAL_STATE = {
  NoteContent: [],
  notesPageGottenTitle: "",
  notesPageGottenDate: "",
  notesPageGottenDetails: "",
  noteKey: "",
  isNotesPageNoteClicked: false,
  isDeleteBtnClicked: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.SET_NOTE_CONTENT:
      return {
        ...state,
        NoteContent: action.payload,
      };

    case appTypes.SET_NOTES_PAGE_GOTTEN_TITLE:
      return { ...state, notesPageGottenTitle: action.payload };

    case appTypes.SET_NOTES_PAGE_GOTTEN_DATE:
      return { ...state, notesPageGottenDate: action.payload };

    case appTypes.SET_NOTES_PAGE_GOTTEN_DETAILS:
      return { ...state, notesPageGottenDetails: action.payload };

    case appTypes.SET_NOTE_KEY:
      return { ...state, noteKey: action.payload };

    case appTypes.SET_IS_NOTES_PAGE_NOTE_CLICKED:
      return { ...state, isNotesPageNoteClicked: true };

    case appTypes.SET_IS_DELETE_BTN_CLICKED:
      return { ...state, isDeleteBtnClicked: true };

    default:
      return INITIAL_STATE;
  }
};

export default appReducer;