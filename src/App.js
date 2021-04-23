import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Input from "./components/input";
import IconButton from "./components/IconButton";
import { icons } from "./icons";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

export default function App() {
  const [newMemo, setNewMemo] = useState("");
  const addMemo = () => {
    alert(newMemo);
    setNewMemo("");
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>Memo</Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Input
          placeholder="add a task"
          newMemo={newMemo}
          onChangeText={(text) => setNewMemo(text)}
          onSubmitEditing={addMemo}
        />
        <IconButton icon={icons.check} onPress={() => alert("check")} />
        <IconButton icon={icons.unCheck} onPress={() => alert("uncheck")} />
        <IconButton icon={icons.edit} onPress={() => alert("edit")} />
        <IconButton icon={icons.delete} onPress={() => alert("delete")} />
      </Container>
    </ThemeProvider>
  );
}
