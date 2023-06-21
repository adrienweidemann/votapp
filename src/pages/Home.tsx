import { useState, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { MainContainer } from "@components/MainContainer";
import { RatingGridSet } from "@components/Form/RatingGridSet";
import { fetchRatingGrids } from "@api/rating-grids";
import { GetAll } from "@definitions/global";
import { RatingGrid, RatingGridRating } from "@definitions/models/rating-grids";

import chatbotLogo from "/chatbot.png";
import { useLang } from "@hooks/Lang/useLang";

const index = (state: { index: number }, action: string) => {
  switch (action) {
    case "increment":
      return {
        index: state.index + 1
      };
    case "reset":
      return {
        index: 0
      };
    default:
      throw new Error("index action not know.");
  }
};

export const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const [ratingGrids, setRatingGrids] = useState<RatingGrid[]>([]);
  const [message, setMessage] = useState<string>("");
  const [state, dispatch] = useReducer(index, { index: 0 });
  const welcomeText: string = t("PAGE.HOME.WELCOME_TEXT");
  const methods = useForm<RatingGridRating[]>({ mode: "onChange", reValidateMode: "onChange" });
  const navigate = useNavigate();
  const welcomeTextSplitted: string[] = welcomeText.split("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isAnimationFinished = state.index === welcomeTextSplitted.length;
  const { isValid } = methods.formState;

  useEffect(() => {
    setIsLoading(true);

    fetchRatingGrids()
      .then(async (ratingGrids: GetAll<RatingGrid>) => {
        setRatingGrids(ratingGrids.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        console.error(err);
      });
  }, [lang]);

  useEffect(() => {
    if (state.index < welcomeTextSplitted.length) {
      const timer = setTimeout(() => {
        setMessage((previous: string): string => `${previous}${welcomeTextSplitted[state.index]}`);
        dispatch("increment");
      }, 15);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [welcomeText, state.index, welcomeTextSplitted]);

  useEffect(() => {
    setRatingGrids([]);
    dispatch("reset");
    setMessage("");
  }, [lang]);

  const onSubmit = async (ratingGridRatings: RatingGridRating[]) => {
    console.log(ratingGridRatings);
    /*for (const ratingGridRating of ratingGridRatings) {
      await postRatingGridRatings(ratingGridRating.ratingGridId, ratingGridRating.ratings);
    }*/
    navigate("/thanks");
  };

  return (
    <FormProvider {...methods}>
      <MainContainer>
        <form className="w-full text-left py-5" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="group w-full p-5 text-gray-800 border-b border-black/10 bg-gray-50">
            <span>
              <img height={33} width={33} className="inline" src={chatbotLogo} alt="List logo" />
            </span>
            <span aria-label={welcomeText} className="pl-2 mt-2 inline">
              {message}
            </span>
          </div>

          {!isLoading && isAnimationFinished && (
            <>
              <div className="px-5 py-5">
                <RatingGridSet ratingGrids={ratingGrids} />
              </div>
              <div className="flex flex-col p-2 items-center">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="text-white bg-primary-500 hover:bg-primary-700 disabled:bg-primary-500/25 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center">
                  {t("PAGE.HOME.BUTTON.SUBMIT.LABEL")}
                </button>
              </div>
            </>
          )}
        </form>
      </MainContainer>
    </FormProvider>
  );
};
