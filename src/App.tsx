import CardComp from "./components/CardComp";

function App() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-black">
      <CardComp
        name="Aditya Karki"
        bio="This is a hello world from Aditya Karki"
      />
    </div>
  );
}

export default App;
