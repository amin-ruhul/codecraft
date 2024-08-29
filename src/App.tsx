import PlayButton from "./components/ui/PlayButton";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import CodeEditor from "./components/Editor";

function App() {
  return (
    <>
      <main className="w-full h-screen px-4">
        <div className="py-2 flex items-center justify-between">
          <div></div>
          <PlayButton onClick={() => {}} />

          <div></div>
        </div>
        <div className="w-full h-[92%] bg-slate-400 rounded">
          <Allotment>
            <div>
              <CodeEditor />
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              quis modi, voluptate nostrum aspernatur ab, delectus, eos sunt
              corrupti reprehenderit ea vitae? Quod ex ut nulla dolores natus
              dolor officiis dolorum fuga reiciendis hic delectus voluptatum
              necessitatibus ipsum, repellendus atque quos fugiat iusto illo
              exercitationem porro laudantium. Laboriosam, reiciendis
              voluptatibus.
            </div>
          </Allotment>
        </div>
      </main>
    </>
  );
}

export default App;
