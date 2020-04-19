import React, { useState } from "react";
import styled from "styled-components";
import t from "prop-types";
import { Textarea } from "theme-ui";
import { Button } from "theme-ui";

const Question = styled("li")`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Transcript = styled("p")`
  margin: 0;
`;

const Audio = styled("audio")`
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const NewWord = styled("p")`
  margin: 0;
  font-style: italic;
`;

const WriteFromDictation = ({ transcript, audio, times, level, newwords }) => {
  const [showTranscript, toggleShowHide] = useState(false);
  const NewWords = newwords.map(w => {
    return <NewWord>{w}</NewWord>;
  });

  return (
    <Question>
      <Transcript>
        {showTranscript ? transcript : ""}&nbsp;
        <em>({times} times)</em>&nbsp;-&nbsp;
        {level && <strong>{level}</strong>}
        {NewWords}
      </Transcript>
      <Button
        m={0}
        pt={0}
        pb={0}
        pl={2}
        pr={2}
        sx={{
          color: "text",
          bg: "background",
          fontSize: 2,
          border: 1,
          borderColor: "text",
          fontFamily: "IBM Plex Sans",
          borderStyle: "solid",
          borderRadius: 4,
          fontWeight: "bold"
        }}
        onClick={() => toggleShowHide(!showTranscript)}
      >
        {showTranscript ? "Hide transcript" : "Show transcript"}
      </Button>
      <Audio controls>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Audio>
      <Textarea
        rows={2}
        sx={{
          fontSize: 3
        }}
      />
    </Question>
  );
};

WriteFromDictation.propTypes = {
  transcript: t.string,
  audio: t.string,
  times: t.number,
  level: t.string,
  newwords: t.array
};

WriteFromDictation.defaultProps = { newwords: [] };

export default WriteFromDictation;
