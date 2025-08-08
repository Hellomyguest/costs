import { Route, Routes } from "react-router";
import { MainPage } from "./Main/MainPage";
import { PaymentsPage } from "./Payments/PaymentsPage";
import { OperationsPage } from "./Operations/OperationsPage";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="payments" element={<PaymentsPage />} />
      <Route path="operations" element={<OperationsPage />} />
    </Routes>
  );
};
