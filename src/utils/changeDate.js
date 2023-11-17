const translateUnit = {
  year: "년",
  month: "개월",
  date: "일",
  hour: "시간",
  min: "분"
};

function chageDate(time) {
  const dataDate = new Date(time);

  const dateResult = {
    year: dataDate.getFullYear(),
    month: dataDate.getMonth() + 1,
    date: dataDate.getDate(),
    hour: dataDate.getHours(),
    min: dataDate.getMinutes()
  };

  return dateResult;
}

/**
 * letter에 출력해줄 시간 데이터를 반환하는 함수
 * @param {*} time 시간
 * @returns 차이가 나는 시간을 반환 ex) 1년 전, 5분 전
 */
function expressLetterDate(time) {
  const dateObj = chageDate(time);
  const currentDate = chageDate(new Date());

  for (let key in translateUnit) {
    if (dateObj[key] !== currentDate[key]) {
      const difference = Math.abs(currentDate[key] - dateObj[key]);
      return `${difference}${translateUnit[key]} 전`;
    }
  }

  return "방금전";
}

let test = new Date();
console.log(expressLetterDate(test));

export { expressLetterDate };
