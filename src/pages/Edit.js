import { useNavigate, useSearchParams } from "react-router-dom";
const Edit = () => {
  //url의 params를 받아오기
  const [searchParams, setSearchParams] = useSearchParams();
  //페이지 이동가능 하게하기
  const navigate = useNavigate();

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "yunhwan" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
