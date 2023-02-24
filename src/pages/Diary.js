import { useParams } from "react-router-dom";

const Diary = () => {
  //전달받은 diary의 id를 저장
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세페이지 입니다.</p>
    </div>
  );
};

export default Diary;
