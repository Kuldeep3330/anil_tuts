import { useContext } from "react";
import { notificationContext } from "./notificationContext";

function NotificationPanel() {
  const { notifications, dispatch } = useContext(notificationContext);

  const addNotification = () => {
    const fakeNotification = {
      id: Date.now(),
      message: "New notification"
    };
    dispatch({ type: "ADD", payload: fakeNotification });
  };

  const removeNotification = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification.id}>
            {notification.message}
            <button onClick={() => removeNotification(notification.id)}>
              ❌
            </button>
          </div>
        ))
      ) : (
        <div>No notifications</div>
      )}

      {/* add notification button */}
      <button onClick={addNotification}>
        Add Notification
      </button>
    </div>
  );
}

export default NotificationPanel;
