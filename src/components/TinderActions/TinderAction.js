import React from "react";
import styles from "./TinderActions.module.scss";
import Back from "../actionsButtons/Back";
import Dislike from "../actionsButtons/Dislike";
import Like from "../actionsButtons/Like";
import SuperLike from "../actionsButtons/SuperLike";

const TinderAction = () => (
  <div className={styles.actions}>
    <Back userId={personalbar.id} />
    <Dislike />
    <Like />
    <SuperLike />
  </div>
);

export default TinderAction;
