export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1>New Layout</h1>
      <>{children}</>
    </>
  );
}
