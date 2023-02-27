//날짜를 ISO 문자열 형식 반환
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
