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

const Answer = styled("p")`
  margin: 0;
  color: #0B5FFF;
`

const WriteFromDictation = ({ transcript, audio, times, level, newwords }) => {
  const [showTranscript, toggleShowHide] = useState(false);
  const [showAnswer, toggleShowAnswer]= useState(false);
  const [answer, changeAnswer] = useState('');
  const [isCorrect, checkAnswer] = useState(false);
  const NewWords = newwords.map(w => {
    return <NewWord>{w}</NewWord>;
  });

  const IsCorrectAnswerText = answer !== "" ? isCorrect ? " - Correct" : " - Incorrect" : ""

  return (
    <Question>
      <Transcript>
        {showTranscript ? transcript : ""}&nbsp;
        <em>({times} times)</em>&nbsp;-&nbsp;
        {level && <strong>{level}</strong>}
        {showAnswer ? <Answer>{answer}</Answer>: ""}
        {NewWords}
      </Transcript>
      <Button
        mt={0}
        ml={0}
        mb={0}
        mr={2}
        pt={1}
        pb={1}
        pl={3}
        pr={3}
        sx={{
          color: "text",
          bg: "background",
          fontSize: 2,
          border: 1,
          borderColor: "text",
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
        onChange={(event) => {
          changeAnswer(event.target.value)
          checkAnswer(answer === transcript)
        }}
        value={answer}
        placeholder="Write your answer here"
        rows={2}
        sx={{
          fontSize: 3,
          mb: 1
        }}
      />
      <Button
        m={0}
        pt={1}
        pb={1}
        pl={3}
        pr={3}
        sx={{
          color: "background",
          bg: "primary",
          fontSize: 2,
          border: 1,
          borderColor: "primary",
          borderStyle: "solid",
          borderRadius: 4,
          fontWeight: "bold"
        }}
        onClick={() => {
          toggleShowAnswer(!showAnswer)
          toggleShowHide(!showAnswer)
        }}
      >
        {showAnswer ? "Hide the comparation" : "Compare with transcript"}
      </Button>
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
