import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../assets/scss/result.scss";
function ResultPage(props) {
	const whatMBTI = props.MBTI;
	const [res, setRes] = useState("");

	useEffect(() => {
		if (whatMBTI) {
			setRes(whatMBTI);
		}
	});

	let navigate = useNavigate();

	let data = {
		ISTJ: {
			subtitle: "당신은 ISTJ입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ISTP: {
			subtitle: "당신은 ISTP입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ESTP: {
			subtitle: "당신은 ESTP입니다.",
			cont1: "ESTP는 아주 계획적이고 주도면밀합니다. 그리고 성격이 아주 좋습니다.",
			cont2: "제 자신을 가장 좋아합니다.",
		},
		ESTJ: {
			subtitle: "당신은 ESTJ입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ISFJ: {
			subtitle: "당신은 ISFJ입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ISFP: {
			subtitle: "당신은 ISFP입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ESFP: {
			subtitle: "당신은 ESFP입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ESFJ: {
			subtitle: "당신은 ESFJ입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		INFJ: {
			subtitle: "당신은 INFJ입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		INFP: {
			subtitle: "당신은 ESTJ입니다.",
			cont1: "ESTJ는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ENFP: {
			subtitle: "당신은 ENFP입니다.",
			cont1: "ENFP는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ENFJ: {
			subtitle: "당신은 ENFJ입니다.",
			cont1: "ENFP는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		INTJ: {
			subtitle: "당신은 INTJ입니다.",
			cont1: "ENFP는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		INTP: {
			subtitle: "당신은 INTP입니다.",
			cont1: "ENFP는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ENTP: {
			subtitle: "당신은 ENTP입니다.",
			cont1: "ENFP는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
		ENTJ: {
			subtitle: "당신은 ENTJ입니다.",
			cont1: "ENFP는 아주 계획적이고 주도면밀합니다.",
			cont2: "INFP를 좋아합니다.",
		},
	};

	// res에는 결정된 MBTI값이 들어있습니다.
	// res에 ESTJ라는 값이 들어있어요. => data[ESTJ].subtitle
	return (
		<>
			{res && (
				<div className="result_wrapper">
					<div className="result_page">
						<h1>결과!</h1>
						<div>{data[res].subtitle}</div>
						<div>{data[res].cont1}</div>
						<div>{data[res].cont2}</div>
						<button
							onClick={() => {
								navigate("/");
							}}
						>
							다시하기
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default ResultPage;
