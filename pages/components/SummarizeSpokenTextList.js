import React from "react";
import t from "prop-types";
import styled from "styled-components";
import SummarizeSpokenText from "./SummarizeSpokenText";

const Ol = styled('ol')`
  padding: 0;
  margin: 0 0 0 16px;
`;

const SummarizeSpokenTextList = ({start, total, data}) => {
  const listSentences = data.map(s => {
    if (s.id >= start && s.id < start + total) {
      return (
        <SummarizeSpokenText
          topic={s.topic}
          transcript={s.transcript}
          solution={s.solution}
          keywords={s.keywords}
          audio={s.audio}
          times={s.times}
          level={s.level}
          newwords={s.newwords}
          id={"summary-spoken-text-" + s.id}
          key={"summary-spoken-text-" + s.id}
        />
      );
    }
    return ""
  });
  
  return <Ol start={start} key={start}>{listSentences}</Ol>;
};

SummarizeSpokenTextList.propTypes = {
  start: t.number,
  total: t.number,
  data: t.array
};
export default SummarizeSpokenTextList
