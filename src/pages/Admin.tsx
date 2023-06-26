import { useEffect, useState } from "react";
import {
  Card,
  Text,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  BarChart,
  Color,
  Flex,
  Bold,
  BarList,
  AccordionList,
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@tremor/react";
import { HeartIcon, UserGroupIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

import { fetchRatingGrids, fetchRatingGridsResults } from "@api/rating-grids";
import { fetchRatingCriterias } from "@api/rating-criterias";
import { useAuth } from "@hooks/Auth/useAuth";
import { RatingCriteriaResult } from "@definitions/models/rating-criteria";

import { GetAll } from "@definitions/global";
import { RatingGrid } from "@definitions/models/rating-grids";
import { RatingCriteria } from "@definitions/models/rating-criteria";
import { Loader } from "@components/Loader";
import { MainContainer } from "@components/MainContainer";

interface TremorBarChartFormat {
  id: number;
  name: string;
  value: number;
  count: number;
  avg: number;
}

export const Admin = (): JSX.Element => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [results, setResults] = useState<GetAll<RatingCriteriaResult>>({ count: 0, data: [] });
  const [grids, setGrids] = useState<GetAll<RatingGrid>>({ count: 0, data: [] });
  const [criterias, setCriterias] = useState<GetAll<RatingCriteria>>({ count: 0, data: [] });
  const [isLoading, setIsLoading] = useState<{
    results: boolean;
    gridsCount: boolean;
    criteriasCount: boolean;
  }>({ results: true, gridsCount: true, criteriasCount: true });

  useEffect(() => {
    fetchRatingGridsResults(user)
      .then((resultsFetched) => {
        setResults(resultsFetched);
        setIsLoading((previous) => {
          return { ...previous, results: false };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    fetchRatingCriterias(user)
      .then((resultsFetched) => {
        setCriterias(resultsFetched);
        setIsLoading((previous) => {
          return { ...previous, criteriasCount: false };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    fetchRatingGrids(user)
      .then((resultsFetched) => {
        setGrids(resultsFetched);
        setIsLoading((previous) => {
          return { ...previous, gridsCount: false };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const buildRankingChart = (): TremorBarChartFormat[] => {
    const gridsData: TremorBarChartFormat[] = [];

    for (const grid of grids.data) {
      gridsData.push({
        id: grid.id,
        name: grid.label,
        count: 0,
        value: 0,
        avg: 0
      });
    }

    for (const result of results.data) {
      for (let i = 0; i < gridsData.length; i++) {
        if (gridsData[i].id === result.ratingGrid.id) {
          gridsData[i].value += result.rating;
          gridsData[i].count++;
          gridsData[i].avg = gridsData[i].value / gridsData[i].count;
        }
      }
    }

    return gridsData.sort((gridDataA, gridDataB) => (gridDataA.value > gridDataB.value ? -1 : 1));
  };

  const buildCriteriasChart = (): TremorBarChartFormat[] => {
    const criteriasData: TremorBarChartFormat[] = [];

    for (const criteria of criterias.data) {
      criteriasData.push({
        id: criteria.id,
        name: t(`PAGE.ADMIN.TAB.SECOND.CATEGORY.${criteria.label.split(".").pop()}`),
        count: 0,
        value: 0,
        avg: 0
      });
    }

    for (const result of results.data) {
      for (let i = 0; i < criteriasData.length; i++) {
        if (criteriasData[i].id === result.ratingCriteria.id) {
          criteriasData[i].value += result.rating;
          criteriasData[i].count++;
          criteriasData[i].avg = criteriasData[i].value / criteriasData[i].count;
        }
      }
    }

    return criteriasData;
  };

  const renderTeamRanking = (): JSX.Element[] => {
    const teamRanking: { id: number; name: string; data: TremorBarChartFormat[] }[] = [];

    for (const grid of grids.data) {
      teamRanking.push({
        id: grid.id,
        name: grid.label,
        data: []
      });

      for (const criteria of criterias.data) {
        teamRanking[teamRanking.length - 1].data.push({
          id: criteria.id,
          name: t(`PAGE.ADMIN.TAB.SECOND.CATEGORY.${criteria.label.split(".").pop()}`),
          count: 0,
          value: 0,
          avg: 0
        });
      }
    }

    for (const result of results.data) {
      for (let i = 0; i < teamRanking.length; i++) {
        if (teamRanking[i].id === result.ratingGrid.id) {
          for (let j = 0; j < teamRanking[i].data.length; j++)
            if (teamRanking[i].data[j].id === result.ratingCriteria.id) {
              teamRanking[i].data[j].value += result.rating;
              teamRanking[i].data[j].count++;
              teamRanking[i].data[j].avg =
                teamRanking[i].data[j].value / teamRanking[i].data[j].count;
            }
        }
      }
    }

    const render = [];
    let index = 0;

    for (const teamRankingElt of teamRanking) {
      render.push(
        <Accordion key={index++}>
          <AccordionHeader>{teamRankingElt.name}</AccordionHeader>
          <AccordionBody>
            <div className="mt-10">
              <BarChart
                className="mt-6"
                data={teamRankingElt.data}
                index="name"
                categories={["avg"]}
                colors={["primary" as Color]}
                yAxisWidth={48}
              />
            </div>
          </AccordionBody>
        </Accordion>
      );
    }

    return render;
  };

  return (
    <MainContainer>
      {!isLoading.results && !isLoading.criteriasCount && !isLoading.gridsCount ? (
        <Card className="mb-10">
          <Text className="text-primary-400">{t("PAGE.ADMIN.TOTAL.TEXT")}</Text>
          <Metric className="text-primary-400">
            {results.count / grids.count / criterias.count}
          </Metric>
          <TabGroup>
            <TabList className="mt-8 primary">
              <Tab className="text-primary-400 hover:text-primary-600" icon={HeartIcon}>
                {t("PAGE.ADMIN.TAB.FIRST.TEXT")}
              </Tab>
              <Tab className="text-primary-400 hover:text-primary-600" icon={ArrowTrendingUpIcon}>
                {t("PAGE.ADMIN.TAB.SECOND.TEXT")}
              </Tab>
              <Tab className="text-primary-400 hover:text-primary-600" icon={UserGroupIcon}>
                {t("PAGE.ADMIN.TAB.THIRD.TEXT")}
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="mt-10">
                  <Flex className="mt-4">
                    <Text>
                      <Bold>Team</Bold>
                    </Text>
                    <Text>
                      <Bold>Points</Bold>
                    </Text>
                  </Flex>
                  <BarList data={buildRankingChart()} className="mt-4" />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="mt-10">
                  <BarChart
                    className="mt-6"
                    data={buildCriteriasChart()}
                    index="name"
                    categories={["avg"]}
                    colors={["primary" as Color]}
                    yAxisWidth={48}
                  />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="mt-10">
                  <AccordionList className="max-w-md mx-auto">{renderTeamRanking()}</AccordionList>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Card>
      ) : (
        <span className="flex w-full p-10">
          <Loader />
        </span>
      )}
    </MainContainer>
  );
};
