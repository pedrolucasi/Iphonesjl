
export const metadata = {
  title: "iPhonesJL",
  description: "Loja de produtos Apple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
