import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/provider";

export const metadata = {
  title: "Synapse",
  description: "Connect, Share, and Inspire!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
