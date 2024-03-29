import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import DiaryList from "../components/DiaryList";

const Home = () => {
  //const diaryList = useContext(DiaryStateContext);
  const diaryList = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  //page title 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      //월의 첫 날짜
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      //월의 마지막 날짜
      const lastDay = new Date(
        curDate.getFullYear(),
        //마지막 날의 시,분,초 설정
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [curDate, diaryList]);

  useEffect(() => {
    //console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      ></MyHeader>
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
