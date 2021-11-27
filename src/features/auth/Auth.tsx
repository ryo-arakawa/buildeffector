import React from 'react'
import { AppDispatch } from "../../app/store";
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Auth.module.css";
import Modal from "react-modal";
import { Formik } from 'formik';
import * as Yup from "yup";
import { TextField, Button, CircularProgress } from "@material-ui/core";

import {
  selectIsLoadingAuth,
  selectOpenSignIn,
  selectOpenSignUp,
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  fetchCredStart,
  fetchCredEnd,
  fetchAsyncLogin,
  fetchAsyncRegister,
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
  fetchAsyncCreateProf,
} from "./authSlice";


// モーダル設定
const customStyles = {
  overlay: {
    backgroundColor: "#777777",
  },
  content: {
    top: "55%",
    left: "50%",

    width: 280,
    height: 350,
    padding: "50px",

    // コンポーネントを真ん中に置くための手法
    transform: "translate(-50%, -50%)",
  },
};

const Auth: React.FC = () => {
  Modal.setAppElement("#root");
  // モーダル表示・非表示
  const openSignIn = useSelector(selectOpenSignIn);
  const openSignUp = useSelector(selectOpenSignUp);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  // dispatchの実体を生成
  const dispatch: AppDispatch = useDispatch();


    return (
    <>
      <Modal
        isOpen={openSignUp}
        onRequestClose={async () => {
          await dispatch(resetOpenSignUp());
        }}
        style={customStyles}
      >
        <Formik
          initialErrors={{ email: "required" }}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await dispatch(fetchCredStart());
            const resultReg = await dispatch(fetchAsyncRegister(values));

            if (fetchAsyncRegister.fulfilled.match(resultReg)) {
              await dispatch(fetchAsyncLogin(values));
              await dispatch(fetchAsyncCreateProf({ nickName: "anonymous" }));

              await dispatch(fetchAsyncGetProfs());
              // await dispatch(fetchAsyncGetPosts());
              // await dispatch(fetchAsyncGetComments());
              await dispatch(fetchAsyncGetMyProf());
            }
            await dispatch(fetchCredEnd());
            await dispatch(resetOpenSignUp());
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("email format is wrong")
              .required("email is must"),
            password: Yup.string().required("password is must").min(8),
          })}
        >
        </Formik>
      </Modal>
    </>
  );
};

export default Auth;
