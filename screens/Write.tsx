import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";

const Container = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 30px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;
const EmotionContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;

type EmotionProps = {
  selected: boolean;
};

const Emotion = styled.TouchableOpacity<EmotionProps>`
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: rgba(0, 0, 0, 0.5);
`;
const EmotionText = styled.Text`
  font-size: 24px;
`;

const emotions = ["😃", "🥲", "😡", "😭", "😍", "😇", "😱"];

const Write = () => {
  //values
  const [selectedEmotion, setEmotion] = useState("");
  const [feelings, setFeelings] = useState("");
  //functions
  const onChnageText = (text: string) => setFeelings(text);
  const onEmotionPress = (face: string) => setEmotion(face);
  const onSubmit = () => {
    if (feelings === "" || selectedEmotion == null) {
      return Alert.alert("Please complete form.");
    } else {
      //hit the db
    }
  };

  return (
    <Container>
      <Title>How do you feel today ?</Title>
      <EmotionContainer>
        {emotions.map((e, index) => (
          <Emotion
            selected={e === selectedEmotion}
            onPress={() => onEmotionPress(e)}
            key={index}
          >
            <EmotionText>{e}</EmotionText>
          </Emotion>
        ))}
      </EmotionContainer>
      <TextInput
        onSubmitEditing={onSubmit}
        onChangeText={onChnageText}
        value={feelings}
        placeholder="Write your feelings"
        returnKeyType={"done"}
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </Container>
  );
};

export default Write;
