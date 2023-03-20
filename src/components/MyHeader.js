import styled from "styled-components";

const CustomHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  background-color: #feeba9;

  > div {
    display: flex;
  }

  button {
    font-family: "Nanum Pen Script";
    width: 60%;
  }

  header .head_text {
    width: 50%;
    font-size: 35px;
    justify-content: center;
  }
  header .head_btn_left {
    width: 25%;
    font-size: 35px;
    justify-content: start;
  }
  header .head_btn_right {
    width: 25%;
    font-size: 35px;
    justify-content: end;
  }
`;

const Head_btn_left = styled.div`
  width: 25%;
  font-size: 35px;
  justify-content: start;
`;

const Head_btn_right = styled.div`
  width: 25%;
  font-size: 35px;
  justify-content: end;
`;

const Head_text = styled.div`
  width: 50%;
  font-size: 35px;
  justify-content: center;
`;

const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <CustomHeader>
      <Head_btn_left>{leftChild}</Head_btn_left>
      <Head_text>{headText}</Head_text>
      <Head_btn_right>{rightChild}</Head_btn_right>
    </CustomHeader>
  );
};

export default MyHeader;
