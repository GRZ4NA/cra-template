import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import style from './styles/App.module.scss';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
