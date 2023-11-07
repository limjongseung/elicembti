import { useNavigate } from "react-router-dom";
import React,{useState, useEffect} from 'react'

function TestPage(props) {
  useEffect(()=> {
    // 결정된 성향을 data 배열에 저장합니다.
    let data = [];

    // 조건문으로 성향을 결정해줍니다.
    if(props.EI > 0) {
      data.push("E")
    } else if (props.EI < 0) {
      data.push("I")
    }
    if(props.SN > 0) {
      data.push("S")
    } else if (props.SN < 0) {
      data.push("N")
    }

    if(props.TF > 0) {
      data.push("T")
    } else if (props.TF < 0) {
      data.push("F")
    }

    if(props.JP > 0) {
      data.push("J")
    } else if (props.JP < 0) {
      data.push("P")
    }
    // data = ["E","S","T","J"] => datas = "ESTJ"
    props.setDatas(data.join(""))
    props.setMBTI(props.datas)
  }, [props.EI, props.SN, props.TF, props.JP, props.datas])


  let navigate = useNavigate();

  const [num, setNum] = useState(1);
  const [data] = useState({
    1: {
      ques: "친구 1년 못만나기 vs 장기자랑 10분하기",
      ans1: "장기자랑 10분하기",
      ans2: "친구 1년 못만나기"
    },
    2: {
      ques: "EI 구분문제",
      ans1: "E성향 답변",
      ans2: "I성향 답변"
    },
    3: {
      ques: "EI 구분문제",
      ans1: "E성향 답변",
      ans2: "I성향 답변"
    },
    4: {
      ques: "SN 구분문제",
      ans1: "S성향 답변",
      ans2: "N성향 답변"
    },
    5: {
      ques: "SN 구분문제",
      ans1: "S성향 답변",
      ans2: "N성향 답변"
    },
    6: {
      ques: "SN 구분문제",
      ans1: "S성향 답변",
      ans2: "N성향 답변"
    },
    7: {
      ques: "TF 구분문제",
      ans1: "T성향 답변",
      ans2: "F성향 답변"
    },
    8: {
      ques: "TF 구분문제",
      ans1: "T성향 답변",
      ans2: "F성향 답변"
    },
    9: {
      ques: "TF 구분문제",
      ans1: "T성향 답변",
      ans2: "F성향 답변"
    },
    10: {
      ques: "JP 구분문제",
      ans1: "J성향 답변",
      ans2: "P성향 답변"
    },
    11: {
      ques: "JP 구분문제",
      ans1: "J성향 답변",
      ans2: "P성향 답변"
    },
    12: {
      ques: "JP 구분문제",
      ans1: "J성향 답변",
      ans2: "P성향 답변"
    }
  })

  return (
    <div>
      <div>
        Q : {data[num].ques}
      </div>
      <button
        onClick={() => {
          setNum(num+1);
          if (num <= 3) {
            props.setEI(props.EI + 1)
          } else if(num>=4 && num <=6){
            props.setSN(props.SN + 1)
          } else if(num>=7 && num<=9){
            props.setTF(props.TF+1)
          }else if(num>=10 && num<=12){
            props.setJP(props.JP+1)
          }
          if(num===12){
            navigate("/resultpage");
          }
        }}>
        {data[num].ans1}
      </button>
      <button
        onClick={() => {
          setNum(num+1);
          if (num <= 3) {
            props.setEI(props.EI - 1)
          } else if(num>=4 && num <=6){
            props.setSN(props.SN - 1)
          } else if(num>=7 && num<=9){
            props.setTF(props.TF - 1)
          }else if(num>=10 && num<=12){
            props.setJP(props.JP - 1)
          }
          if(num===12){
            navigate("/resultpage");
          }
        }}>
        {data[num].ans2}
      </button>
    </div>
  );
}

export default TestPage;