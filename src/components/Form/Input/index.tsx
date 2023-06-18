import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  type: "text" | "password";
  name: string;
  placeholder: string;
  required?: boolean;
}

export const Input = ({ label, type, name, placeholder, required }: Props): JSX.Element => {
  const { register } = useFormContext();
  const { t } = useTranslation();
  const id = useId();

  return (
    <>
      <label htmlFor={`${name}${id}`} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        id={`${name}${id}`}
        placeholder={placeholder}
        {...register(name, {
          required: {
            value: required || false,
            message: t("FORM.INPUT.ERROR.REQUIRED")
          }
        })}
        maxLength={100}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:outline-none focus:border-primary-500 block w-full p-2.5"
        required={required}
      />
    </>
  );
};
