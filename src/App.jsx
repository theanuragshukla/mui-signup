import { styled } from "@mui/material";
import "./App.css";
import Form from "./Form";

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
	return (
		<Super>
		<Form />
		</Super>
	);
}

export default App;
