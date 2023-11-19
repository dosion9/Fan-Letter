import { v4 as uuidv4 } from "uuid";

const useLetter = (state, setState) => {
  /**
   * @CRUD Create
   * @function createLetter 새로운 팬레터 추가하는 기능
   * @description 파라미터의 값으로 새로운 팬레터 데이터를 생성한다.
   * @param {Object} obj  새로운 팬레터를 생성하기 위한 정보
   * @param {string} obj.nickname  작성자 닉네임
   * @param {string} obj.content  팬레터 내용
   * @param {string} obj.writedTo  팬레터 대상
   */
  const createLetter = (obj) => {
    const { nickname, content, writedTo } = obj;
    setState((prev) => [
      ...prev,
      {
        createdAt: new Date().toISOString(),
        nickname,
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
        content,
        writedTo,
        id: uuidv4()
      }
    ]);
  };

  /**
   * @CRUD Search
   * @function searchLetter 팬레터 검색 기능
   * @description 팬레터 id 또는 맴버 이름이 일치하는 팬레터를 가져온다.
   * @param {string} info - 팬레터 id || 맴버 이름
   * @returns {Array} 일치하는 팬레터들
   */
  const searchLetter = (info) => {
    return state.filter((n) => n.wriedTo === info || n.id === info);
  };

  /**
   * @CRUD Update
   * @function updateLetter 팬레터 수정 기능
   * @description state의 데이터들 중 파라미터의 letter.id와 일치하는 데이터를 파라미터 값으로 변경한다.
   * @param {Object} obj - letter 데이터
   */
  const updateLetter = (letter) => {
    setState((prev) => {
      return prev.map((preLetter) => (preLetter.id === letter.id ? letter : preLetter));
    });
  };

  /**
   * @CRUD Delete
   * @function updateLetter 팬레터 삭제 기능
   * @description 파라미터의 id 값에 해당하는 데이터를 제외한다.
   * @param {string} id 팬레터의 id값
   */
  const deleteLetter = (id) => {
    setState((prev) => prev.filter((n) => n.id !== id));
  };

  return { searchLetter, updateLetter, createLetter, deleteLetter };
};

export default useLetter;
