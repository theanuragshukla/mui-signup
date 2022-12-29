import { styled } from "@mui/material";
import "./App.css";
import Form from "./Form";
import { Workbox } from "workbox-window";
import {useEffect} from "react";

const Super = styled("div")(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	width: "100%",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	paddingTop:"40px", 
	backgroundColor:theme.palette.background.default
}));

function App() {
	useEffect(()=>{
		if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.register();
			 wb.addEventListener('installed', event => {
				 console.log('installed')
			 })
}


	}, [])
	return (
		<Super>
		<Form />
		</Super>
	);
}

export default App;
