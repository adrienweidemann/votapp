import { Navbar } from "@components/Navbar";

export const MainContainer = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="flex grow">{children}</div>

      <div>
        <a href="/#" className="text-sm font-medium text-gray">
          Made with ❤️ at Strasbourg
        </a>
      </div>
    </>
  );
};
