import CardComp from "./components/CardComp";

function App() {
  return (
    <div className="flex flex-wrap w-screen h-screen justify-center items-center bg-black gap-2">
      <CardComp
        name="Aditya Karki"
        bio="This is a hello world from Aditya Karki"
      />
      <CardComp
        name="Aditya Karki"
        bio="This is a hello world from Aditya Karki"
      />
      <CardComp
        name="Aditya Karki"
        bio="This is a hello world from Aditya Karki"
      />
      <CardComp
        name="Aditya Karki"
        bio="This is a hello world from Aditya Karki"
      />
    </div>
  );
}

export default App;
