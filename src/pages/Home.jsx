import "./Home.css";
import NavBar from "./components/navbar";
import Feed from "./components/Feed";

function Home() {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <Feed />
      </div>
    </>
  );
}

export default Home;
