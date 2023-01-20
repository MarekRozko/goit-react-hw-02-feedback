import PropTypes from 'prop-types';
import styles from "../Feedback/feedback.module.css";

const Notification = ({ message }) => (
  <>
    <p className={styles.message}>{message}</p>
  </>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};