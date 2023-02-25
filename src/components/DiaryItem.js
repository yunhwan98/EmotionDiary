import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  //읽기 쉬운 시간 형식으로 변환
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  //버튼에 따른 페이지 이동
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
        onClick={goDetail}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper">
        <div className="diary_date" onClick={goDetail}>
          {strDate}
        </div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper" onClick={goEdit}>
        <MyButton text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
