import styled from "styled-components";

const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;

  white-space: nowrap;
  font-family: "Nanum Pen Script";

  background-color: ${(props) => {
    if (props.btnType === "positive") {
      return "#c4bf87";
    } else if (props.btnType === "negative") {
      return "#fd565f";
    } else {
      return "#fcfaec";
    }
  }};

  color: ${(props) => {
    if (props.btnType === "positive") {
      return "#fcfaec";
    } else if (props.btnType === "negative") {
      return "white";
    } else {
      return "#ffb896";
    }
  }};
`;

const MyButton = ({ text, type, onClick }) => {
  //지정된 type이 아닌 경우 default로 고정
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <CustomButton btnType={btnType} onClick={onClick}>
      {text}
    </CustomButton>
  );
};

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
