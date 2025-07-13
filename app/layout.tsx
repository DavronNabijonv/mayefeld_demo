
import "./globals.css";
import RouteTransition from "@/components/common/RouteTransition";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <RouteTransition/>
        {children}
      </body>
    </html>
  );
}
