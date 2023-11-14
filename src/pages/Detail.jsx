import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailLetter from "components/Letter/DetailLetter";
function Detail(props) {
  const [letterItem, setLetterItem] = useState({});
  const params = useParams();

  useEffect(() => {
    const selectedLetter = props.letterData.find((n) => n.id === params.id);
    setLetterItem(selectedLetter);
  }, [params]);

  return (
    <div>
      Detail
      {
        <DetailLetter
          letterItem={letterItem}
          onChangeLetter={props.onChangeLetter}
          onDeleteLetter={props.onDeleteLetter}
        ></DetailLetter>
      }
    </div>
  );
}

export default Detail;
