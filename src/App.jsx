import { styled } from "@mui/material";
import "./App.css";
import Form from "./Form";
import { useEffect } from "react";
import SubscribePush from "./PushSubscription";

const Super = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingTop: "40px",
  backgroundColor: theme.palette.background.default,
}));

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.pushManager
          .getSubscription()
          .then((subscription) => {
            if (!subscription) {
				SubscribePush(serviceWorkerRegistration)
              return;
            }
          })
          .catch((err) => {
            console.error(`Error during getSubscription(): ${err}`);
          });
      });
    }
  }, []);
  return (
    <Super>
      <Form />
    </Super>
  );
}

export default App;
