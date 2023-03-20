import React from "react";
import styled, { keyframes, css } from "styled-components";

const move = keyframes`
  0%,
  100% {
    transform: translateX(-5%);
  }
  50% {
    transform: translateX(5%);
  }
`;

const Emotion_Item = styled.div`
  cursor: pointer;

  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
  }

  animation: ${(props) => {
    const color = props.color;
    if (color !== "off") {
      return css`
        ${move} 1000ms infinite
      `;
    }
  }};
  background-color: ${(props) => {
    const color = props.color;
    if (color === "off") {
      return "#fcfaec;";
    } else if (color === "on_1") {
      return "#e5bf44";
    } else if (color === "on_2") {
      return "#eadb51";
    } else if (color === "on_3") {
      return "#73aa89";
    } else if (color === "on_4") {
      return "#42518c";
    } else if (color === "on_5") {
      return "#982929";
    }
  }};

  color: ${(props) => {
    const color = props.color;
    if (color === "off") {
      return "#fcfaec;";
    } else {
      return "white";
    }
  }};
`;

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <>
      {/* <div
        onClick={() => onClick(emotion_id)}
        className={[
          "EmotionItem",
          isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
        ].join(" ")}
      >
        <img src={emotion_img} />
        <span>{emotion_descript}</span>
      </div> */}

      <Emotion_Item
        onClick={() => onClick(emotion_id)}
        color={isSelected ? `on_${emotion_id}` : `off`}
      >
        <img src={emotion_img} />
        <span>{emotion_descript}</span>
      </Emotion_Item>
    </>
  );
};

export default React.memo(EmotionItem);
