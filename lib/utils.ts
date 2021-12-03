import { NextRouter } from "next/dist/shared/lib/router/router";

export function onlyUnique(value, index, self): boolean {
  return self.indexOf(value) === index;
}

export function getArrayFromRouterQuery(
  value: null | string | string[]
): string[] {
  return value ? (Array.isArray(value) ? value : [value]) : [];
}

export function getPathFromRouter(router: NextRouter): string {
  const queryIndex = router.asPath.indexOf("?");
  const hashIndex = router.asPath.indexOf("#");
  return queryIndex === -1 && hashIndex === -1
    ? router.asPath
    : router.asPath.substring(0, queryIndex === -1 ? hashIndex : queryIndex);
}

export function toggleValueInArray(value, oldArray) {
  const index = oldArray.indexOf(value);
  return index === -1
    ? oldArray.concat(value)
    : [...oldArray.slice(0, index), ...oldArray.slice(index + 1)];
}
