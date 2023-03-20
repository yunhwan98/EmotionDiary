import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { keyframes, css } from "styled-components";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emition";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const move = keyframes`
  0%,
  100% {
    transform: translateX(-5%);
  }
  50% {
    transform: translateX(5%);
  }
`;

const Diary_Page = styled.div`
  section {
    width: 100%;
    bottom: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h4 {
    font-size: 22px;
    font-weight: bold;
  }
`;

const Diary_img_wrapper = styled.div`
  background-color: #fcfaec;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
    animation: ${move} 1000ms infinite;
  }
`;

const Emotion_descript = styled.div`
  font-size: 25px;
  color: #ffb896;
`;

const Diary_content_wrapper = styled.div`
  width: 100%;
  background-color: #fcfaec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;

  p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-family: "Yeon Sung";
    line-height: 2.5;
  }
`;

const Diary = () => {
  //전달받은 diary의 id를 저장
  const { id } = useParams();

  const diaryList = useSelector((state) => state);
  const navigate = useNavigate();
  const [data, setData] = useState();

  //page title 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      //일기 존재 여부에 따라 설정
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <Diary_Page>
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text={"뒤로가기"} onClick={() => navigate(-1)}></MyButton>
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <Diary_img_wrapper>
              <img src={curEmotionData.emotion_img} />
              <Emotion_descript>
                {curEmotionData.emotion_descript}
              </Emotion_descript>
            </Diary_img_wrapper>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <Diary_content_wrapper>
              <p>{data.content}</p>
            </Diary_content_wrapper>
          </section>
        </article>
      </Diary_Page>
    );
  }
};

export default Diary;
