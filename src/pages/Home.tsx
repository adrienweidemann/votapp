import { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";

import { MainContainer } from "@components/MainContainer";
import { RatingGridSet } from "@components/Form/RatingGridSet";
import { fetchRatingGrids, postRatingGridRatings } from "@api/rating-grids";
import { GetAll } from "@definitions/global";
import {
  RatingCriteriaRating,
  RatingGrid,
  RatingGridFormResults,
  RatingGridRating
} from "@definitions/models/rating-grids";
import { useLang } from "@hooks/Lang/useLang";
import { useAuth } from "@hooks/Auth/useAuth";
import { shuffleArray } from "@helpers/array.helper";
import { useHasSubmit } from "@hooks/HasSubmit/useHasSubmit";

import chatbotLogo from "/chatbot.png";

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
  const { setHasSubmit } = useHasSubmit();
  const navigate = useNavigate();
  const [ratingGrids, setRatingGrids] = useState<RatingGrid[]>([]);
  const [message, setMessage] = useState<string>("");
  const [state, dispatch] = useReducer(index, { index: 0 });
  const welcomeText: string = t("PAGE.HOME.WELCOME_TEXT");
  const methods = useForm<{ rating: RatingGridFormResults }>({
    mode: "onChange",
    reValidateMode: "onChange"
  });
  const welcomeTextSplitted: string[] = welcomeText.split("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const { user } = useAuth();

  const isAnimationFinished = state.index === welcomeTextSplitted.length;
  const { formState, getValues } = methods;
  const { isValid } = formState;
  const currentFormValues = getValues();

  useEffect(() => {
    setIsLoading(true);
    fetchRatingGrids(user)
      .then(async (ratingGrids: GetAll<RatingGrid>) => {
        setRatingGrids(shuffleArray(ratingGrids.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [lang, user]);

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

  useEffect(() => {
    if (Object.keys(currentFormValues).length > 0) {
      setIsSubmittable(true);
    }
  }, [currentFormValues]);

  const formatRating = (rating: Record<string, string>): RatingCriteriaRating[] => {
    const ratings: RatingCriteriaRating[] = [];
    const keys = Object.keys(rating);
    let index = 0;

    while (index < keys.length) {
      if (typeof rating[keys[index]] === "number") {
        ratings.push({
          ratingCriteriaId: parseInt(keys[index]),
          rating: parseInt(rating[keys[index]])
        });
      }

      index++;
    }

    return ratings;
  };

  const onSubmit = async (ratingGridRatings: { rating: RatingGridFormResults }) => {
    const ratings: RatingGridFormResults = ratingGridRatings.rating;
    const ratingsFormatted: RatingGridRating[] = [];
    const keys = Object.keys(ratings);
    let index = 0;

    while (index < keys.length) {
      ratingsFormatted.push({
        ratingGridId: parseInt(keys[index]),
        ratings: formatRating(ratings[keys[index]])
      });

      index++;
    }

    for (const ratingFormatted of ratingsFormatted) {
      await postRatingGridRatings(user, ratingFormatted.ratingGridId, ratingFormatted.ratings);
    }

    setHasSubmit(true);
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
                  disabled={!isSubmittable || !isValid}
                  className="text-white bg-primary-400 hover:bg-primary-600 disabled:bg-primary-400/25 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center">
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
