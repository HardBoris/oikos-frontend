import "./App.css";
// import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "./routes";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      {
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      }
      <AppRouter />
    </>
  );
};

export default App;
