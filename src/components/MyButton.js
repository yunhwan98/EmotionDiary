const MyButton = ({ text, type, onClick }) => {
  //지정된 type이 아닌 경우 default로 고정
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
