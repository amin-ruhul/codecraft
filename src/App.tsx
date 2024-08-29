import PlayButton from "./components/ui/PlayButton";

function App() {
  return (
    <>
      <main className="w-full h-screen px-4">
        <div className="py-2 flex items-center justify-between">
          <div></div>
          <PlayButton onClick={() => {}} />

          <div></div>
        </div>
        <div className="w-full h-[92%] bg-slate-400 rounded"></div>
      </main>
    </>
  );
}

export default App;
