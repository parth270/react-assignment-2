import React from "react";
import classes from "./Product.module.css";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="45"
      fill="none"
      viewBox="0 0 39 45"
    >
      <path
        fill="#E5DFD9"
        d="M24.181 10.028h6.522v20.65c0 1.495-.544 2.786-1.63 3.873-1.087 1.087-2.31 1.562-3.805 1.562H5.705c-1.495 0-2.785-.475-3.872-1.562C.746 33.464.27 32.173.27 30.679v-20.65h6.522c0-1.563.34-2.99 1.154-4.348.748-1.359 1.767-2.378 3.125-3.193 1.359-.747 2.785-1.155 4.416-1.155 1.562 0 2.989.408 4.347 1.155a8.986 8.986 0 013.193 3.193c.747 1.358 1.154 2.785 1.154 4.347zm-8.694-6.521c-1.835 0-3.397.68-4.62 1.902-1.29 1.29-1.902 2.853-1.902 4.62h13.043c0-1.767-.68-3.33-1.902-4.62-1.29-1.223-2.853-1.902-4.62-1.902zm13.042 27.172V12.202h-4.348v3.26c0 .34-.135.612-.34.816-.203.204-.475.271-.746.271-.34 0-.612-.067-.816-.271-.203-.204-.271-.476-.271-.815v-3.261H8.965v3.26c0 .34-.136.612-.34.816-.203.204-.475.271-.747.271-.34 0-.61-.067-.815-.271-.203-.204-.271-.476-.271-.815v-3.261H2.444v18.477c0 .95.272 1.698.951 2.31.611.679 1.359.95 2.31.95h19.563c.883 0 1.63-.271 2.31-.95.611-.612.951-1.36.951-2.31z"
      ></path>
      <ellipse
        cx="28.351"
        cy="34.018"
        fill="#141414"
        rx="9.966"
        ry="10.195"
      ></ellipse>
      <path
        fill="#E5DFD9"
        d="M33.44 32.608c.057 0 .085.028.142.085.056.057.085.085.085.142v.905c0 .057-.029.113-.085.17-.057.057-.085.057-.142.057h-4.528v4.528c0 .057-.029.114-.085.17-.057.057-.085.057-.142.057h-.905c-.057 0-.114 0-.17-.057-.057-.056-.057-.113-.057-.17v-4.528h-4.529c-.056 0-.113 0-.17-.057-.056-.056-.056-.113-.056-.17v-.906c0-.056 0-.084.057-.141.056-.057.113-.085.17-.085h4.528V28.08c0-.057 0-.085.057-.142.056-.057.113-.085.17-.085h.905c.057 0 .085.028.142.085.056.057.085.085.085.142v4.528h4.528z"
      ></path>
    </svg>
  );
};

const Product = (props) => {
  const [bookMarked, setBookMark] = React.useState(false);
  return (
    <div className={classes.container}>
      {!bookMarked ? (
        <div
          className={classes['svg-container']}
          onClick={() => {
            setBookMark(true);
          }}
        >
          <BookmarkBorderOutlinedIcon className={classes.svg} />
        </div>
      ) : (
        <div
          className={classes['svg-container']}
          onClick={() => {
            setBookMark(false);
          }}
        >
          <BookmarkIcon   className={classes.svg} />
        </div>
      )}
      <img src={props.src} alt="" />
      <p className={classes.title}>{props.title}</p>
      <div className={classes["purchase-container"]}>
        <div className={classes.left}>
          <span className={classes.current}>
            <span>&#8377;</span>4899
          </span>
          <span className={classes.old}>8999</span>
          <span className={classes.off}>
            {"("}50%off{")"}
          </span>
        </div>
        <Icon />
      </div>
    </div>
  );
};

export default Product;
