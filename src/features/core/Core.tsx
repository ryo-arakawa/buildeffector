import React from 'react'
import Auth from "../auth/Auth";

import styles from "./Core.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Avatar,
  Badge,
  CircularProgress,
} from "@material-ui/core";

import { MdAddAPhoto } from "react-icons/md";

import {
  editNickname,
  selectProfile,
  selectIsLoadingAuth,
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  setOpenProfile,
  resetOpenProfile,
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
} from "../auth/authSlice";

import {
  selectPosts,
  selectIsLoadingPost,
  setOpenNewPost,
  resetOpenNewPost,
  fetchAsyncGetPosts,
  fetchAsyncGetComments,
} from "../post/postSlice";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);


const Core: React.FC = () => {
    return (
        <div>
            <Auth />
        </div>
    );
};

export default Core;
