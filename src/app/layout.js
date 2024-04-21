import "./globals.css";

export const metadata = {
  title: "Jalkruti",
  description: "Jalkruti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
