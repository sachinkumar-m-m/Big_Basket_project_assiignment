import React, { useEffect, useState } from "react";
import Main from "./component/Main";
import DataProvider from "./GlobalContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/Theme";
import PulseLoader from "react-spinners/PulseLoader";

function App(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <PulseLoader
          size={20}
          color={"#8956ff"}
          loading={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <DataProvider>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </DataProvider>
      )}
    </div>
  );
}

export default App;
