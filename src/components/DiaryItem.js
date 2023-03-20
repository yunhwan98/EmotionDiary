import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  0%,
  100% {
    transform: translateX(-5%);
  }
  50% {
    transform: translateX(5%);
  }
`;

const Emotion_img_wrapper = styled.div`
  cursor: pointer;
  min-width: 120px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 75%;
    height: 75%;
  }
  img:hover {
    animation: ${move} 1000ms infinite;
  }
`;

const Info_wrapper = styled.div`
  flex-grow: 1;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 15px;
  background-color: white;
`;

const Diary_date = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;

const Diary_Item = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e2e2e2;
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;

const Diary_content_preview = styled.div`
  font-size: 18px;
`;

const Btn_wrapper = styled.div`
  min-width: 70px;
`;

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
    <Diary_Item>
      <Emotion_img_wrapper onClick={goDetail}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </Emotion_img_wrapper>
      <Info_wrapper>
        <Diary_date onClick={goDetail}>{strDate}</Diary_date>
        <Diary_content_preview>{content.slice(0, 25)}</Diary_content_preview>
      </Info_wrapper>
      <Btn_wrapper onClick={goEdit}>
        <MyButton text={"수정하기"} />
      </Btn_wrapper>
    </Diary_Item>
  );
};

//DiaryItem 최적화
export default React.memo(DiaryItem);
