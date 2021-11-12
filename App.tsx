import React, { useState } from "react";
import Realm from "realm";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import Navigator from "./navigator";

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primarKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const realm = await Realm.open({
      path: "guiwooDiaryDB",
      schema: [FeelingSchema],
    });
  };
  if (!ready) {
    return (
      <AppLoading
        onError={(e) => console.log(e)}
        startAsync={startLoading}
        onFinish={onFinish}
      />
    );
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
