import React from "react";


import classes from './BuildControl.module.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.OrderButton}  onClick={props.removed}>Less</button>
    <button className={classes.OrderButton} onClick={props.added}>More</button>
  </div>
);

export default buildControl;
