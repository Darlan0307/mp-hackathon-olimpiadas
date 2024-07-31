"use client";
import { BarChartComponent } from "@/components/charts/bar-chart";
import { ColChartComponent } from "@/components/charts/col-chart";
import { RadialChartComponent } from "@/components/charts/radial-chart";
import { RadialChartContinentComponent } from "@/components/charts/radial-chart-continent";
import Loader from "@/components/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCountries } from "@/hooks/use-countries";
import { countContinent } from "@/utils/count-continent";

export default function Home() {
  const { dataCountries, totalCountries } = useCountries();

  if (dataCountries.length == 0 || totalCountries == 0) return <Loader />;

  const continents = countContinent(dataCountries);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card
            className="mx-auto w-[300px] min-[400px]:w-full sm:col-span-2"
            x-chunk="dashboard-05-chunk-1"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-xl mb-2">
                countries in the olympic games
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <RadialChartComponent
                  value={totalCountries}
                  text="active"
                  color="hsl(var(--chart-1))"
                />
                <h3 className="absolute left-1/2 -translate-x-1/2 bottom-4 w-full text-center">
                  total of countries
                </h3>
              </div>
            </CardContent>
          </Card>

          <Card
            className=" mx-auto w-[300px] min-[400px]:w-full sm:col-span-2"
            x-chunk="dashboard-05-chunk-2"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-xl mb-2">
                the most participatory continent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <RadialChartContinentComponent data={continents} />
                <h3 className="absolute left-1/2 -translate-x-1/2 bottom-4 w-full text-center">
                  countries by continent
                </h3>
              </div>
            </CardContent>
          </Card>
        </div>

        <ColChartComponent data={dataCountries} />
      </div>

      <BarChartComponent data={dataCountries} />
    </main>
  );
}
