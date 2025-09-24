import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Form from "./docs/Form";


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}