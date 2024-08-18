// app/layout.tsx
import './globals.css';
import Navbar from './components/NavBar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <div className="h-screen flex md:flex-row flex-col">
      <Navbar />
          <div className="flex-1 overflow-auto flex flex-col items-start  ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}


