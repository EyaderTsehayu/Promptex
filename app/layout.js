import Nav from "@components/Nav";
import "@styles/global.css";
export const metadata = {
  title: "promptEx",
  description: "Discover and Share AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
      {" "}
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>{" "}
    </html>
  );
};

export default RootLayout;
