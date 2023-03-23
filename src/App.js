import { Container, Grid, Stack, Button, Input, Textarea } from "@mantine/core";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
  { id: 1, title: "Başlık 1", par: "Paragraf 1" },
  { id: 2, title: "Başlık 2", par: "Paragraf 2" },
  { id: 3, title: "Başlık 3", par: "Paragraf 3" },
];

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState(arr);
  const click = () => {
    setTitle("");   
    setParagraf("");
    setList([...list, { id: list.length + 1, title: title, par: paragraf }]); // listeyi güncelle
  };
  return (
    <Container>
      <h1>Kart oluşturma programı</h1>
      <Stack align="flex-start">
        <Input.Wrapper label="Başlık" withAsterisk>
          <Input placeholder="Başlık yazınız" w={400} value={title} onChange={(e) => setTitle(e.target.value)} />
        </Input.Wrapper>
        <Textarea
          placeholder="Paragraf yazınız"
          label="Paragraf"
          w={400}
          withAsterisk
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)}
        />
        <Button variant={"outline"} onClick={click}>
          Kart oluştur
        </Button>
      </Stack>
      <h2>Kartlar:</h2>
      <Grid>
        {list.map(({ title, par }, i) => (
          <Grid.Col span={3} key={`index ${i}`}>
            <Card title={title} par={par} a={i} />;
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
