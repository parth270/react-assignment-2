import React from "react";
import classes from "./Navbar.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Navbar = () => {
  return (
    <> 
      <div className={classes.container}>
        <div className={classes["upper-container"]}>
          <h1>TANN TRIM</h1>
          <div>
            <SearchOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            <BookmarkBorderOutlinedIcon/>
            <ShoppingBagOutlinedIcon/>
          </div>
        </div>
        <div className={classes["lower-container"]}>
          <div>
            <span>
              Bags
            </span>
            <span>
              Travel
            </span>
            <span>
              Accesories
            </span>
            <span>
              Gifting
            </span>
            <span>
              Jewelery
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
