import "../styles/globals.css";
import "node_modules/video-react/dist/video-react.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/css/video-react.css" />
        <title>Project</title>
      </head>
      <body>
        <h1>hello</h1>
        {children}
      </body>
    </html>
  );
}
