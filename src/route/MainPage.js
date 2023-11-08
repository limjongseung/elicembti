import { useNavigate } from "react-router-dom";
import "../assets/scss/main.scss";
function MainPage(props) {
  let navigate = useNavigate();
  return (
    <div className="main_page">
      <div className="main_page_wrapper">
        <h1>나의 MBTI는?</h1>
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
    </div>
  );
}

export default MainPage;
