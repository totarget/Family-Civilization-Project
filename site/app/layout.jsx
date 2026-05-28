import './globals.css';

export const metadata = {
  title: 'Family Civilization Project',
  description: '家庭文明工程 / Family Civilization Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
