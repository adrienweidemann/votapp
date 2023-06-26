import { useTranslation } from "react-i18next";

import { useAuth } from "@hooks/Auth/useAuth";

export const Navbar = (): JSX.Element => {
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="flex justify-end align-center [&_li]:inline-block [&_li]:list-none py-5">
      <nav>
        <ul className="px-2">
          <li>
            <button
              type="button"
              onClick={logout}
              className="w-full text-white bg-primary-400 hover:bg-primary-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center">
              {t("NAVBAR.BUTTON.LOGOUT.LABEL")}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
