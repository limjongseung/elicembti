import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from 'react'

import TestPage from "./route/TestPage";
import ResultPage from "./route/ResultPage";
import MainPage from "./route/MainPage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);
 
  const [datas, setDatas] = useState();
  const [MBTI, setMBTI] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP}/>}></Route>
        <Route path="/testpage" element={<TestPage 
        EI={EI}
        SN={SN}
        TF={TF}
        JP={JP}
        setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} MBTI={MBTI} setMBTI={setMBTI}datas={datas} setDatas={setDatas}/>}></Route>
        <Route path="/resultpage" element={<ResultPage MBTI={MBTI} datas={datas}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;