import { BrowserRouter } from "react-router";
import "./App.css";
import { PageLayout } from "../Shared/ui/PageLayout";
import { PageRoutes } from "../Pages";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <PageRoutes />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
