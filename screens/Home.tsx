import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import colors from "../colors";
import { useDB } from "../context";
import { FlatList } from "react-native-gesture-handler";
import { Results } from "realm";

const Container = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 48px;
  margin-bottom: 100px;
  margin: 50px 0px;
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

const Record = styled.View`
  background-color: ${colors.cardColor};
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-radius: 15px;
`;
const Emotion = styled.Text`
  font-size: 20px;
  margin-right: 10px;
`;
const Message = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const Seperator = styled.View`
  height: 10px;
`;

type HomeProp = NativeStackScreenProps<any, any>;

const Home: React.FC<HomeProp> = ({ navigation: { navigate } }) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState<Results<Realm.Object>>();
  useEffect(() => {
    const feeling = realm.objects("Feeling");
    setFeelings(feeling);
    feeling.addListener(() => {
      const feeling = realm.objects("Feeling");
      setFeelings(feeling);
    });
    return () => {
      feeling.removeAllListeners();
    };
  }, []);
  return (
    <Container>
      <Title>My Journal</Title>
      <FlatList
        contentContainerStyle={{ paddingVertical: 10 }}
        ItemSeparatorComponent={Seperator}
        data={feelings}
        keyExtractor={(feeling) => feeling._id + ""}
        renderItem={({ item }) => (
          <Record>
            <Emotion>{item.emotion}</Emotion>
            <Message>{item.message}</Message>
          </Record>
        )}
      />
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add-outline" color="white" size={48} />
      </Btn>
    </Container>
  );
};

export default Home;
