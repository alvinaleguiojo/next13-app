import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Project</title>
      </head>
      <body>
        <h1>hello</h1>
        {children}
      </body>
    </html>
  );
}
