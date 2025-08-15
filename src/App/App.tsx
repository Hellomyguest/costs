import { BrowserRouter } from "react-router";
import "./App.css";
import { PageLayout } from "../Shared/ui/PageLayout";
import { PageRoutes } from "../Pages";
import { Provider } from "react-redux";
import { store } from "../Shared/store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PageLayout>
          <PageRoutes />
        </PageLayout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
