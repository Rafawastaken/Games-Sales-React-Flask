import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/layout";

// Pages
import AddGamePage from "./pages/AddGamePage/AddGamePage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-game" element={<AddGamePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
