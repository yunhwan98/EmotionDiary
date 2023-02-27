import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  //페이지 이동가능 하게하기
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  //일기 데이터 꺼내오기
  useEffect(() => {
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      //id 전달 여부에 따른 설정
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        //없는 id를 전달받으면 홈으로 이동(뒤로 가기x)
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
