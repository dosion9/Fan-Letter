import { v4 as uuidv4 } from "uuid";

function createLetterData(nickname, content, writedTo) {
  const letter = {
    createdAt: new Date().toISOString(),
    nickname,
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
    content,
    writedTo,
    id: uuidv4()
  };

  return letter;
}

export default createLetterData;
