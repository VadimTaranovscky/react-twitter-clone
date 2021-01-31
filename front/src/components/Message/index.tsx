import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface IProps {
  message?: string;
}

const Message: React.FC<IProps> = ({ message }): JSX.Element => {
  const [isMessage, setIsMessage] = React.useState(false);

  React.useEffect(() => {
    if (message) {
      setIsMessage(true);
    }
  }, [message]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isMessage}
      onClose={() => setIsMessage(false)}
    >
      <Alert onClose={() => setIsMessage(false)} severity='error'>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
