import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import Navigator from "./navigator";
import { DBContext } from "./context";
import Realm from "realm";

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState<Realm>(null as Realm);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const connection: Realm = await Realm.open({
      path: "nomadDiaryDB",
      schema: [FeelingSchema],
    });
    setRealm(connection);
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
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DBContext.Provider>
  );
}
