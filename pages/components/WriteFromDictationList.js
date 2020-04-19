import React from "react";
import t from "prop-types";
import WriteFromDictation from "./WriteFromDictation";

const WriteFromDictationList = ({ start, total, data }) => {
  const listSentences = data.map(s => {
    if (s.id >= start && s.id < start + total) {
      return (
        <WriteFromDictation
          transcript={s.transcript}
          audio={s.audio}
          times={s.times}
          level={s.level}
          id={"write-from-dictation-" + s.id}
          key={"write-from-dictation-" + s.id}
        />
      );
    }
    return "";
  });

  return <ol start={start}>{listSentences}</ol>;
};

WriteFromDictationList.propTypes = {
  start: t.number,
  total: t.number,
  data: t.array
};
export default WriteFromDictationList;
