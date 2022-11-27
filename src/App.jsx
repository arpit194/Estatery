import classes from "./App.module.css";
import Navigation from "./components/Navigation";
import Rent from "./pages/Rent";

function App() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Rent />
    </div>
  );
}

export default App;
