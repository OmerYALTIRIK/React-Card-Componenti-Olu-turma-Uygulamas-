import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
  { title: "Başlık 1", par: "Paragraf 1" },
  { title: "Başlık 2", par: "Paragraf 2" },
  { title: "Başlık 3", par: "Paragraf 3" },
];

const App = () => {
  const [lesson, setLesson] = useState(11);
  return (
    <div>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button onClick={() => setLesson(lesson + 1)}>Ders arttır</button>
      <button onClick={() => setLesson(lesson - 1)}>Ders azalt</button>
      <button onClick={() => setLesson(100)}>Ders 100</button>
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({ title, par }, i) => {
          return <Card key={`index ${i}`} title={title} par={par} lesson={lesson} />;
        })}
      </div>
    </div>
  );
};

export default App;
