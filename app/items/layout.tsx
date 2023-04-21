import { Breadcrumb } from "@m/components/Breadcrumb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Breadcrumb />
      {children}
    </main>
  );
}
