import { useNavigate } from "react-router-dom";
import "../assets/scss/main.scss";
function MainPage(props) {
	let navigate = useNavigate();
	return (
		<div className="main_page">
			<h1>찰떡의 MBTI</h1>
			<button
				className="buttonComponent"
				onClick={() => {
					navigate("/testpage");
					props.setEI(0);
					props.setSN(0);
					props.setTF(0);
					props.setJP(0);
				}}
			>
				시작
			</button>
		</div>
	);
}

export default MainPage;
