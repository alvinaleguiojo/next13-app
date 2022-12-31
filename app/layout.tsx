import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Project</title>
      </head>
      <body>
        <h1>hello</h1>
        {children}
      </body>
    </html>
  );
}
