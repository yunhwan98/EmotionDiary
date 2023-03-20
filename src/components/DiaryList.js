import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";
import styled from "styled-components";

const CustomControlMenu = styled.select`
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fcfaec;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  border-radius: 15px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 18px;
`;

const Menu_wrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px;

  background-color: #ffb896;
  display: flex;
  justify-content: space-between;
`;

const Right_col = styled.div`
  flex-grow: 1;
  button {
    width: 100%;
  }
`;

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안 좋은 감정만" },
];

//ControlMenu 컴포넌트
//최적화 처리 (상태변화 함수는 useCallback 사용 x)
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <>
      {/* <select
        className="ControlMenu"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {optionList.map((it, idx) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        ))}
      </select> */}
      <CustomControlMenu
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {optionList.map((it, idx) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        ))}
      </CustomControlMenu>
    </>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    // 정렬 순서
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    //깊은 복사
    const copyList = JSON.parse(JSON.stringify(diaryList));

    //감정별로 filter
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <>
      {/* <div className="DiaryList">
        <div className="menu_wrapper">
          <div className="left_col">
            <ControlMenu
              value={sortType}
              onChange={setSortType}
              optionList={sortOptionList}
            />
            <ControlMenu
              value={filter}
              onChange={setFilter}
              optionList={filterOptionList}
            />
          </div>
          <div className="right_col">
            <MyButton
              type={"positive"}
              text={"새 일기 쓰기"}
              onClick={() => navigate("/new")}
            />
          </div>
        </div>

        {getProcessedDiaryList().map((it) => (
          <DiaryItem key={it.id} {...it}></DiaryItem>
        ))}
      </div> */}

      <div className="DiaryList">
        <Menu_wrapper>
          <div className="left_col">
            <ControlMenu
              value={sortType}
              onChange={setSortType}
              optionList={sortOptionList}
            />
            <ControlMenu
              value={filter}
              onChange={setFilter}
              optionList={filterOptionList}
            />
          </div>
          <Right_col>
            <MyButton
              type={"positive"}
              text={"새 일기 쓰기"}
              onClick={() => navigate("/new")}
            />
          </Right_col>
        </Menu_wrapper>

        {getProcessedDiaryList().map((it) => (
          <DiaryItem key={it.id} {...it}></DiaryItem>
        ))}
      </div>
    </>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
