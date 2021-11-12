import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import colors from "../colors";

const Container = styled.View`
  flex: 1;
  padding: 0px 50px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 48px;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: ${colors.btnColor};
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
const BtnText = styled.Text`
  color: white;
`;

type HomeProp = NativeStackScreenProps<any, any>;

const Home: React.FC<HomeProp> = ({ navigation: { navigate } }) => (
  <Container>
    <Title>My Journal</Title>
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add-outline" color="white" size={48} />
    </Btn>
  </Container>
);

export default Home;
