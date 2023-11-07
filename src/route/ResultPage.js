import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react'

function ResultPage(props) {
  const whatMBTI = props.MBTI
  const [res, setRes] = useState("");

  useEffect(()=> {
    if(whatMBTI) {setRes(whatMBTI)}
  })

  let navigate = useNavigate();

  let data = {
    ESTJ : {
      subtitle : "당신은 ESTJ입니다.",
      cont1 : "ESTJ는 아주 계획적이고 주도면밀합니다.",
      cont2 : "INFP를 좋아합니다."
    },
    INFP : {
      subtitle : "당신은 ESTJ입니다.",
      cont1 : "ESTJ는 아주 계획적이고 주도면밀합니다.",
      cont2 : "INFP를 좋아합니다."
    }
  }

  // res에는 결정된 MBTI값이 들어있습니다.
  // res에 ESTJ라는 값이 들어있어요. => data[ESTJ].subtitle
  return (
    <>
    {res && (
      <div>
        <div>{data[res].subtitle}</div>
        <div>{data[res].cont1}</div>
        <div>{data[res].cont2}</div>
        <button
        onClick={() => {
          navigate("/");
        }}>
        다시하기
        </button>
      </div>
    )
  }
  </>
  )
}

export default ResultPage;