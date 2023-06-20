import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { useAuth } from "@hooks/Auth/useAuth";
import { LangToggler } from "@components/LangToggler";

export const Navbar = (): JSX.Element => {
  const { logout } = useAuth();
  const { t, i18n } = useTranslation();

  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  return (
    <header className="flex justify-end align-center [&_li]:inline-block [&_li]:list-none py-5">
      <nav>
        <ul className="px-2">
          <li>
            <button
              className="uppercase md:gap-x-1.5 text-primary-500 hover:text-primary-700 focus:outline-none font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
              onClick={() => setToggleDropdown(!toggleDropdown)}
              aria-expanded="true"
              aria-haspopup="true">
              {i18n.language.substring(0, 2)} <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>

            <LangToggler toggle={toggleDropdown} setToggleDropdown={setToggleDropdown} />
          </li>
          <li>
            <button
              type="button"
              onClick={logout}
              className="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center">
              {t("NAVBAR.BUTTON.LOGOUT.LABEL")}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
