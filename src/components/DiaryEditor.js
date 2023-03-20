import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emition";
import { onCreate, onRemove, onEdit } from "../actions";

const Diary_Editor = styled.div`
  section {
    margin-bottom: 40px;
  }

  h4 {
    font-size: 22px;
    font-weight: bold;
  }

  textarea {
    font-family: "Nanum Pen Script";
    font-size: 20px;
    box-sizing: border-box;
    width: 100%;
    min-height: 200px;
    resize: vertical;

    border: none;
    border-radius: 5px;
    background-color: #fcfaec;

    padding: 20px;
  }
`;

const Input_date = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #fcfaec;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 20px;
`;

const Emotion_list_wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
  padding: 10px;
  background-color: #fcfaec;
`;

const Control_box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  //diaryId 설정
  const diaryId = useSelector((state) => (!state[0] ? 0 : state[0].id + 1));
  const dispatch = useDispatch();

  //클릭 시 emotion 변경 함수
  //handleClickEmote 최적화
  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);
  const navigate = useNavigate();

  //클릭 시 일기 추가
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      //Edit에 따라서 생성, 수정 결정해주기
      if (!isEdit) {
        dispatch(onCreate(diaryId, date, content, emotion));
      } else {
        dispatch(onEdit(originData.id, date, content, emotion));
      }
    }

    //뒤로가기를 하더라도 방금의 페이지로 돌아오지 않음
    navigate("/", { replace: true });
  };

  // 일기 삭제 기능 추가
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(onRemove(originData.id));
      navigate("/", { reaplace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <Diary_Editor>
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기 쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
        rightChild={
          isEdit && (
            <MyButton
              text={"삭제하기"}
              type={"negative"}
              onClick={handleRemove}
            />
          )
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <Input_date
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <Emotion_list_wrapper>
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </Emotion_list_wrapper>
        </section>

        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="오늘은 어땠나요?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <Control_box>
          <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
          <MyButton
            text={"작성완료"}
            type={"positive"}
            onClick={handleSubmit}
          />
        </Control_box>
      </div>
    </Diary_Editor>
  );
};
export default DiaryEditor;
