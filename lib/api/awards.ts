import { PersonForListQuery } from "./people";
import { onlyUnique } from "../utils";

export function getTitles(people: Array<PersonForListQuery>): string[] {
  return people
    .sort((a, b) => a.titles[0].title.order - b.titles[0].title.order)
    .map(({ titles }) => titles[0].title.name)
    .filter((x, i, a) => a.indexOf(x) === i);
}

export function getDatesFromAwards(
  people: Array<PersonForListQuery>
): string[] {
  return people.map(({ titles }) => titles[0].date).filter(onlyUnique);
}
