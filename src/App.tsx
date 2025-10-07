import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import { FormPage } from "./docs/FormPage";
import { BlogPage } from "./docs/BlogPage";
import { StorePage } from "./docs/StorePage";
import { WhereToGoPage } from "./docs/WtgPage";
import { YouTubePage } from "./docs/YoutubePage";


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/wtg" element={<WhereToGoPage />} />
        <Route path="/youtube" element={<YouTubePage />} />
      </Routes>
    </div>
  );
}