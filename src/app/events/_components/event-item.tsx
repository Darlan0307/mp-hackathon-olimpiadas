import { EventType } from "@/@types/events-type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Crown, Download } from "lucide-react";
import Link from "next/link";

interface EventItemProps {
  data: EventType;
}

const positionIcon = [
  { id: 0, icon: <Award className="h-5 w-5" color="#d3a01f" /> },
  { id: 1, icon: <Award className="h-5 w-5" color="	#C0C0C0" /> },
  { id: 2, icon: <Award className="h-5 w-5" color="#cd7f32 " /> },
];

const EventItem = ({ data }: EventItemProps) => {
  return (
    <Card className="flex flex-col w-[300px] relative ">
      <CardHeader>
        <CardTitle>{data.event_name}</CardTitle>
        <CardDescription>{data.detailed_event_name}</CardDescription>
      </CardHeader>
      <CardContent
        className={`flex flex-col gap-2 min-h-[210px] max-h-[210px] overflow-y-auto [&::-webkit-scrollbar]:hidden ${
          data.competitors.length == 2 ? "mx-auto" : ""
        }`}
      >
        {data.competitors.map((competitor) => (
          <div key={crypto.randomUUID()}>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={competitor.country_flag_url} />
                <AvatarFallback>
                  {competitor.competitor_name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p className="text-sm text-muted-foreground">
                {competitor.competitor_name}
              </p>
              {data.competitors.length == 2 && competitor.position == 0 && (
                <Crown className="h-8 w-8" color="#d3a01f" />
              )}
              {data.competitors.length > 2 && competitor.position < 3 && (
                <>{positionIcon[competitor.position].icon}</>
              )}
            </div>
            {data.competitors.length == 2 && competitor.position == 0 && (
              <h2 className="text-3xl text-center">VS</h2>
            )}
          </div>
        ))}
        <Badge className="absolute top-2 right-2" variant="secondary">
          {data.status}
        </Badge>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2 mt-3">
        <p className="text-sm text-muted-foreground">{data.day}</p>

        <div className="justify-self-end">
          <Link
            href={data.discipline_pictogram}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold flex items-center gap-2"
          >
            <span>Pictogram</span>
            <Download className="h-5 w-5" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventItem;
