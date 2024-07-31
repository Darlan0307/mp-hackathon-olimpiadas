"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useCountries } from "@/hooks/use-countries";
import Loader from "@/components/loader";

export default function Countries() {
  const { dataCountries } = useCountries();

  if (dataCountries.length == 0) return <Loader />;

  return (
    <main className="p-4 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Countries</CardTitle>
          <CardDescription>
            List of countries in the olympic games
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Continent</TableHead>
                <TableHead className="text-center">Rank</TableHead>
                <TableHead className="text-center">Rank Medal</TableHead>
                <TableHead className="text-center">Total Medals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataCountries.map((country) => (
                <TableRow key={country.id} className="max-w-[900px]">
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={country.flag_url} />
                      <AvatarFallback>
                        {country.name.slice(0, 1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{country.name}</TableCell>
                  <TableCell className="mx-auto text-center">
                    <Badge variant="outline">{country.continent}</Badge>
                  </TableCell>
                  <TableCell className="mx-auto text-center">
                    <Badge variant="outline">{country.rank}</Badge>
                  </TableCell>
                  <TableCell className="mx-auto text-center">
                    <Badge variant="secondary">
                      {country.rank_total_medals}
                    </Badge>
                  </TableCell>
                  <TableCell className="mx-auto text-center">
                    {country.total_medals}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
