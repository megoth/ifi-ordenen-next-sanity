import { PersonForListQuery } from "./people";

export function getTitles(people: Array<PersonForListQuery>): string[] {
  return people
    .sort((a, b) => a.titleOrder - b.titleOrder)
    .map(({ title }) => title)
    .filter((x, i, a) => a.indexOf(x) === i);
}

export function getYears(people: Array<PersonForListQuery>): number[] {
  return people
    .map(({ year }) => year)
    .filter((x, i, a) => a.indexOf(x) === i)
    .sort();
}
