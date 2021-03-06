import "./Note.scss";

const SideBarNote = ({ title, date, isOnSideBar, isOnNotesPage }) => {
  return (
    <div
      className={
        (isOnNotesPage && "notesPageNote") || (isOnSideBar && "sideBarNote")
      }
    >
      <div
        className={
          (isOnNotesPage && "notesPageNote__left") ||
          (isOnSideBar && "sideBarNote__left")
        }
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>sort</title>
          <path d="M3 12.984v-1.969h12v1.969h-12zM3 6h18v2.016h-18v-2.016zM3 18v-2.016h6v2.016h-6z"></path>
        </svg>
        <h2
          className={
            (isOnNotesPage && "notesPageNote__title") ||
            (isOnSideBar && "sideBarNote__title")
          }
        >
          {title}
        </h2>
      </div>
      <h4
        className={
          (isOnNotesPage && "notesPageNote__date") ||
          (isOnSideBar && "sideBarNote__date")
        }
      >
        {date}
      </h4>
    </div>
  );
};

export default SideBarNote;
