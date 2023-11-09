import { useNavigate } from "react-router-dom";
import React,{useState, useEffect} from 'react'
import "../assets/scss/test.page.scss";

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
      ques: "생일 파티 초대할 수 있는 친구는?",
      ans1: "어느 정도 친한 친구도 초대 가능",
      ans2: "찐친 몇 명만 초대 가능"
    },
    2: {
      ques: "오랜만에 친구와 만나 놀던 중에, 친구의 친구가 같이 놀아도 되냐고 물어보는데?",
      ans1: "당연히 되지! 오늘부터 너도 내 친구다.",
      ans2: "어어..? (안돼, 절대싫어)"
    },
    3: {
      ques: "새 학기 첫날! 친한 사람이 한 명도 없는 반에서 나는",
      ans1: "초면에 여기저기 말 걸었더니 어느새 주의에 사람으로 둘어 쌓여짐",
      ans2: "누군가가 말 걸어 주길 기다려본다."
    },
    4: {
      ques: "노래 들을 때 더 좋아하는 것은?",
      ans1: "멜로디",
      ans2: "가사"
    },
    5: {
      ques: "아무 생각을 안 할 수 있다? 없다?",
      ans1: "정말 아무 생각 안 하기 가능.",
      ans2: "아무 생각을 안 하여해도 머릿속에 상상이 멈추지 않음"
    },
    6: {
      ques: "요리 할 때 정량을 지키는가? 손대중으로 하는가?",
      ans1: "레시피에 나온대로 정량을 딱 맞춤.",
      ans2: "손대중! 이 정도 넣으면 되겠지"
    },
    7: {
      ques: "난 니가 그냥 좋아!",
      ans1: "나를? 왜?",
      ans2: "!!(감동...)"
    },
    8: {
      ques: "나 너랑 별로 안 맞는 것 같아",
      ans1: "왜?(이유가 궁금)",
      ans2: "!!(마상..)"
    },
    9: {
      ques: "나 배탈 난 것 같아",
      ans1: "뭐 먹었는데?",
      ans2: "어떻게? 병원 갈까?"
    },
    10: {
      ques: "뭐하냐~ 심심한데 나와",
      ans1: "응?.... 갑자기?",
      ans2: "당근 좋지 당장 나갈게"
    },
    11: {
      ques: "어떤 회사가 좋아?",
      ans1: "회사는 회사니깐 체계적이어야해",
      ans2: "딱딱한 회사 별로 자유로운 회사지"
    },
    12: {
      ques: "오늘 뭐먹을까?",
      ans1: "나에게 다 계획이 있어 맛집리스트 다 뽑았지",
      ans2: "저기 맛있겠다 배고파"
    }
  })

  return (
    <div className="test_page_wrapper">
      <div className="test_page">
        Q : {data[num].ques}
      </div>
      <div className="button_wrapper">
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
    </div>
  );
}

export default TestPage;