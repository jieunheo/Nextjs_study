import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hi</h1>
      <style jsx global>{`
        a {
          color: yellow;
        }
      `}</style>
    </div>
  );
}