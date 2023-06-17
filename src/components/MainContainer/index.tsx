import { Navbar } from "@components/Navbar";

export const MainContainer = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">{children}</div>
    </>
  );
};
