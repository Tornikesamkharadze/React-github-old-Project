import Card from "./Components/Card";
import Search from "./Components/Search";
import Theme from "./Components/Theme";
import { useGithubContext } from "./context/context";
import loadingImage from "./assets/preloader.gif";
function App() {
  const { loading } = useGithubContext();
  if (loading) {
    return (
      <main>
        <Theme />
        <Search />
        <img src={loadingImage} alt="loading-gif" className="loading-img" />
      </main>
    );
  }
  return (
    <>
      <Theme />
      <Search />
      <Card />
    </>
  );
}

export default App;
