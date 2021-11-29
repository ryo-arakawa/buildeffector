import React from 'react'
import Auth from "../auth/Auth";

import styles from "./Core.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const Core: React.FC = () => {
    return (
        <div>
            <Auth />
        </div>
    );
};

export default Core;
