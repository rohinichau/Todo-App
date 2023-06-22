import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props: any) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
      <div id="header">
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "100px",
        }}
      >
        {props.children}
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
