import { useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Input } from "@components/Form/Input";
import { useAuth } from "@hooks/Auth/useAuth";

type Inputs = {
  email: string;
  password: string;
  login: string;
};

export const AdminLoginForm = ({ redirectTo }: { redirectTo: string }): JSX.Element => {
  const methods = useForm<Inputs>({ mode: "onChange" });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { adminLogin } = useAuth();

  const { formState, watch, setError, clearErrors } = methods;
  const { errors, isValid } = formState;

  useEffect(() => {
    watch(() => clearErrors("login"));
  }, [watch, clearErrors]);

  const onSubmit = async (credentials: Inputs) => {
    try {
      await adminLogin(credentials);
      navigate(redirectTo);
    } catch (err) {
      setError("login", {
        type: "custom",
        message: t("FORM.LOGIN_FORM.BUTTON.SUBMIT.ERROR")
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="p-20 space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex justify-center place-items-center">
          <LockClosedIcon className="w-20 h-20 p-2 rounded-full ring-2 ring-secondary-300 text-secondary-300" />
        </div>

        <div className="text-2xl text-gray-900 font-semibold">
          <h2 className="text-secondary-300">{t("FORM.LOGIN_FORM.TITLE")}</h2>
        </div>

        <div className="place-items-left">
          <Input
            label={t("FORM.LOGIN_FORM.INPUT.PASSWORD.TITLE")}
            type="text"
            name="email"
            placeholder={t("FORM.LOGIN_FORM.INPUT.EMAIL.PLACEHOLDER")}
            required
          />
          {errors.email?.message && (
            <p className="text-red-700 text-sm px-4 py-3">{errors.email?.message}</p>
          )}
        </div>

        <div className="place-items-left">
          <Input
            label={t("FORM.LOGIN_FORM.INPUT.PASSWORD.TITLE")}
            type="password"
            name="password"
            placeholder={t("FORM.LOGIN_FORM.INPUT.PASSWORD.PLACEHOLDER")}
            required
          />
          {errors.password?.message && (
            <p className="text-red-700 text-sm px-4 py-3">{errors.password?.message}</p>
          )}
        </div>

        {errors.login?.message && (
          <p className="break-words text-red-700 text-sm px-4 py-3">{errors.login?.message}</p>
        )}

        <button
          type="submit"
          disabled={!isValid}
          className="w-full text-white bg-primary-400 hover:bg-primary-700 disabled:bg-primary-400/25 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center">
          {t("FORM.LOGIN_FORM.BUTTON.SUBMIT.LABEL")}
        </button>
        <div>
          <a
            href="https://github.com/adrienweidemann"
            className="text-sm text-white font-medium text-gray">
            Made with ❤️ at Strasbourg
          </a>
        </div>
      </form>
    </FormProvider>
  );
};
