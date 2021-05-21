import classes from "./SingleTask.module.css";

const SingleTask = (props) => {
  return (
    <li className={classes.SingleTask}>
      <label className={classes.SingleTask__inputContainter}>
        <input className={classes.SingleTask__input} type="checkbox" />
        <span className={classes.SingleTask__checkmark}></span>
      </label>
      <p className={classes.SingleTask__taskDescription}>
        {props.taskDescription}
      </p>
      <button className={classes.SingleTask__closeBtn}>X</button>
    </li>
  );
};

export default SingleTask;
