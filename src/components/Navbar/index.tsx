import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { useAuth } from "@hooks/Auth/useAuth";
import { LangToggler } from "@components/LangToggler";

export const Navbar = (): JSX.Element => {
  const { logout } = useAuth();
  const { t } = useTranslation();

  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  return (
    <header className="flex justify-end align-center [&_li]:inline-block [&_li]:list-none [&_li]:px-2">
      <nav>
        <ul>
          <li>
            <button
              className="gap-x-1.5 text-white text-primary-500 hover:text-primary-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
              onClick={() => setToggleDropdown(!toggleDropdown)}
              aria-expanded="true"
              aria-haspopup="true">
              FR <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>

            <div
              className={`${
                toggleDropdown ? "" : "hidden"
              } absolute text-base z-50 w-22 list-none divide-y divide-gray-100 rounded shadow`}>
              <LangToggler />
            </div>
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
