import "./globals.css";



export const metadata = {
  title: "Welcome",
  description: "",
};

import { Montserrat } from 'next/font/google';

// Configure the font with the desired weight and style
const montserrat = Montserrat({
  weight: '500', // Use '500' for Medium weight
  subsets: ['latin'],
  style: ['normal'], // The 'normal' style corresponds to 'Medium'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
