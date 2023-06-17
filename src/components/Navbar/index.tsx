import { useTranslation } from "react-i18next";

export const Navbar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <nav className="flex items-center justify-end pb-2.5">
      <ul className="flex text-primary text-xs gap-x-0.5">
        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            Dropdown{" "}
          </button>

          <div
            id="dropdownNavbar"
            className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton">
              <li>
                <a
                  href="/#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  FR
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button
            type="button"
            className="text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            {t("NAVBAR.BUTTON.LOGOUT.LABEL")}
          </button>
        </li>
      </ul>
    </nav>
  );
};
