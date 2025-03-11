// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./pages/Layout/Layout";
import Main from "./pages/main/Main";
import Transactions from "./pages/Transaction/Transactions";
import Saving from "./pages/Saving/Saving";
import Conversions from "./pages/Conversions/Conversions";
import Piggy_bank from "./pages/Piggy_bank/Piggy_bank";
import Credits from "./pages/Credits/Credits";
import Cards from "./pages/Cards/Cards";
import Securities from "./pages/Securities/Securities";
import Auto_payments from "./pages/Auto_payments/Auto_payments";
import Transport from "./pages/Transport/Transport";
import Insurance from "./pages/Insurance/Insurance";
import Auto from "./pages/Auto/Auto";
import Services from "./pages/Services/Services";
import Fun from "./pages/Fun/Fun";
import Good from "./pages/Good/Good";
import Juniors from "./pages/Juniors/Juniors";
import Business from "./pages/Business/Business";
import Connection from "./pages/Connection/Connection";
import { LanguageProvider } from "../src/components/LanguageContext";
import Details from "./pages/Transaction/Details/Details";
import InternationalTransfers from "./pages/Transaction/InternationalTransfers/InternationalTransfers";
import SWIFT from "./pages/Transaction/SWIFT/SWIFT";
import TransferToCard from "./components/TransferToCard/TransferToCard";
import TransactionToCard from "./pages/Transaction/TransactionToCard/TransactionToCard";
import PayoneerPage from "./pages/Transaction/PayoneerPage/PayoneerPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="transactions" element={<Transactions/>}>
                    <Route path="transactionToCard" element={<TransactionToCard/>}/>
                    <Route path="details" element={<Details/>}/>
                    <Route path="international" element={<InternationalTransfers/>}/>
                    <Route path="swift" element={<SWIFT/>}/>
                    <Route path="payoneer" element={<PayoneerPage/>}/>
                </Route>
                <Route path="connection" element={<Connection/>}/>
                <Route path="saving" element={<Saving/>}/>
                <Route path="conversions" element={<Conversions/>}/>
                <Route path="piggy_bank" element={<Piggy_bank/>}/>
                <Route path="credits" element={<Credits/>}/>
                <Route path="cards" element={<Cards/>}/>
                <Route path="securities" element={<Securities/>}/>
                <Route path="auto_payments" element={<Auto_payments/>}/>
                <Route path="transport" element={<Transport/>}/>
                <Route path="insurance" element={<Insurance/>}/>
                <Route path="auto" element={<Auto/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="fun" element={<Fun/>}/>
                <Route path="good" element={<Good/>}/>
                <Route path="juniors" element={<Juniors/>}/>
                <Route path="business" element={<Business/>}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
