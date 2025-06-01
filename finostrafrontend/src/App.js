import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/slices/authSlice";
import { LanguageProvider } from "./components/LanguageContext";
import { ProfileProvider } from "./components/contexts/ProfileContext";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/main/Main";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Transactions from "./pages/Transaction/Transactions";
import Details from "./pages/Transaction/Details/Details";
import InternationalTransfers from "./pages/Transaction/InternationalTransfers/InternationalTransfers";
import SWIFT from "./pages/Transaction/SWIFT/SWIFT";
import TransactionToCard from "./pages/Transaction/TransactionToCard/TransactionToCard";
import PayoneerPage from "./pages/Transaction/PayoneerPage/PayoneerPage";
import Connection from "./pages/Connection/Connection";
import MobileTopUp from "./pages/Connection/MobileTopUp/MobileTopUp";
import Saving from "./pages/Saving/Saving";
import OpenDeposit from "./pages/Saving/OpenDeposit/OpenDeposit";
import MyDeposit from "./pages/Saving/MyDeposit/MyDeposit";
import Conversions from "./pages/Conversions/Conversions";
import MyKonverty from "./pages/Conversions/MyKonverty/MyKonverty";
import Credits from "./pages/Credits/Credits";
import MyCredits from "./pages/Credits/MyCredits/MyCredits";
import WalletPage from "./pages/Credits/WalletPage/WalletPage";
import PaymentInstallments from "./pages/Credits/PaymentInstallments/PaymentInstallments";
import InstantInstallment from "./pages/Credits/InstantInstallment/InstantInstallment";
import CreditCash from "./pages/Credits/CreditCash/CreditCash";
import CreditCar from "./pages/Credits/CreditCar/CreditCar";
import CreditHouse from "./pages/Credits/CreditHouse/CreditHouse";
import Cards from "./pages/Cards/Cards";
import DigitalCard from "./pages/Cards/DigitalCard/DigitalCard";
import Securities from "./pages/Securities/Securities";
import AutoPayments from "./pages/Auto_payments/Auto_payments";
import Transport from "./pages/Transport/Transport";
import Insurance from "./pages/Insurance/Insurance";
import Auto from "./pages/Auto/Auto";
import Services from "./pages/Services/Services";
import Fun from "./pages/Fun/Fun";
import Good from "./pages/Good/Good";
import Juniors from "./pages/Juniors/Juniors";
import Business from "./pages/Business/Business";
import MoneyBox from "./pages/MoneyBox/MoneyBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="loading">Завантаження...</div>;
  }

  return (
    <LanguageProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="profile" element={<ProfilePage />} />

              <Route path="transactions" element={<Transactions />}>                
                <Route path="transactionToCard" element={<TransactionToCard />} />
                <Route path="details" element={<Details />} />
                <Route path="international" element={<InternationalTransfers />} />
                <Route path="swift" element={<SWIFT />} />
                <Route path="payoneer" element={<PayoneerPage />} />
              </Route>

              <Route path="connection" element={<Connection />}>                
                <Route path="mobileRecharge" element={<MobileTopUp />} />
              </Route>

              <Route path="saving" element={<Saving />}>                
                <Route path="openDeposit" element={<OpenDeposit />} />
                <Route path="myDeposit" element={<MyDeposit />} />
              </Route>

              <Route path="conversions" element={<Conversions />}>                
                <Route path="myKonverty" element={<MyKonverty />} />
              </Route>

              <Route path="moneybox" element={<MoneyBox />} />

              <Route path="credits" element={<Credits />}>                
                <Route path="myCredits" element={<MyCredits />} />
                <Route path="creditLimit" element={<WalletPage />} />
                <Route path="paymentInstallments" element={<PaymentInstallments />} />
                <Route path="instantInstallment" element={<InstantInstallment />} />
                <Route path="creditCash" element={<CreditCash />} />
                <Route path="creditCar" element={<CreditCar />} />
                <Route path="creditHouse" element={<CreditHouse />} />
              </Route>

              <Route path="cards" element={<Cards />}>                
                <Route path="digitalCard" element={<DigitalCard />} />
              </Route>

              <Route path="securities" element={<Securities />} />
              <Route path="auto_payments" element={<AutoPayments />} />
              <Route path="transport" element={<Transport />} />
              <Route path="insurance" element={<Insurance />} />
              <Route path="auto" element={<Auto />} />
              <Route path="services" element={<Services />} />
              <Route path="fun" element={<Fun />} />
              <Route path="good" element={<Good />} />
              <Route path="juniors" element={<Juniors />} />
              <Route path="business" element={<Business />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>

          <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        </BrowserRouter>
      </ProfileProvider>
    </LanguageProvider>
    
  );
}

export default App;