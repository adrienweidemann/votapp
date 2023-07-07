import { useEffect, useState, useReducer } from "react";
import { RatingGrid } from "@components/Form/RatingGrid";
import { RatingGrid as RatingGridType } from "@definitions/models/rating-grids";

import chatbotLogo from "/chatbot.png";
import alienIcon from "/team-icons/alien.png";
import dishIcon from "/team-icons/dish.png";
import galaxyIcon from "/team-icons/galaxy.png";
import glubIcon from "/team-icons/glub.png";
import planetBlueIcon from "/team-icons/planet-blue.png";
import planetRingIcon from "/team-icons/planet-ring.png";
import rocketIcon from "/team-icons/rocket.png";
import starsIcon from "/team-icons/stars.png";
import telescopeIcon from "/team-icons/telescope.png";
import ufoCakeIcon from "/team-icons/ufo-cake.png";

const getLogo = (name: string) => {
  switch (name) {
    case "alien":
      return alienIcon;
    case "dish":
      return dishIcon;
    case "galaxy":
      return galaxyIcon;
    case "glub":
      return glubIcon;
    case "planet-blue":
      return planetBlueIcon;
    case "planet-ring":
      return planetRingIcon;
    case "rocket":
      return rocketIcon;
    case "stars":
      return starsIcon;
    case "telescope":
      return telescopeIcon;
    case "ufo-cake":
      return ufoCakeIcon;
    default:
      return chatbotLogo;
  }
};

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

export const RatingGridSet = ({ ratingGrids }: { ratingGrids: RatingGridType[] }): JSX.Element => {
  const [grids, setGrids] = useState<JSX.Element[]>([]);
  const [state, dispatch] = useReducer(index, { index: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.index < ratingGrids.length) {
        const gridElement = (
          <div
            key={ratingGrids[state.index].id}
            className="py-3 items-center text-center md:items-left md:text-left pb-10">
            <p className="uppercase font-bold text-primary-400">
              <img
                height={44}
                width={44}
                className="inline"
                src={getLogo(ratingGrids[state.index].icon1)}
                alt="List logo"
              />
              <span className="inline-block align-text-top">{ratingGrids[state.index].label}</span>
              <img
                height={44}
                width={44}
                className="inline"
                src={getLogo(ratingGrids[state.index].icon2)}
                alt="List logo"
              />
            </p>
            <RatingGrid ratingGridId={ratingGrids[state.index].id} />
          </div>
        );

        dispatch("increment");

        setGrids((previous: JSX.Element[]): JSX.Element[] => [...previous, gridElement]);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [grids, state.index, ratingGrids]);

  return <>{grids}</>;
};
