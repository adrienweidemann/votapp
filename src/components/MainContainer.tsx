import { Navbar } from "@components/Navbar";

export const MainContainer = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="flex grow">{children}</div>

      <div>
        <a
          href="https://github.com/adrienweidemann"
          className="text-sm font-medium text-white p-10 pb-20">
          Made with ❤️ at Strasbourg
        </a>
      </div>
    </>
  );
};
