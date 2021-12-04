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

export function toggleValueInArray(value, oldArray): string[] {
  const index = oldArray.indexOf(value);
  return index === -1
    ? oldArray.concat(value)
    : [...oldArray.slice(0, index), ...oldArray.slice(index + 1)];
}

interface Route {
  hash?: string;
  query: Record<string, string[]>;
}

export function getHashFromRouter(router: NextRouter): string | null {
  const hashIndex = router.asPath.indexOf("#");
  return hashIndex === -1 ? null : router.asPath.substring(hashIndex + 1);
}

export function getHref(router: NextRouter, route?: Route) {
  const path = getPathFromRouter(router);
  if (!route) {
    return path;
  }
  // handling query
  const query = {
    ...Object.entries(router?.query || {}).reduce((memo, [key, value]) => {
      memo[key] = getArrayFromRouterQuery(value);
      return memo;
    }, {}),
    ...route.query,
    slug: null,
  };
  const queryValues = Object.entries(query).flatMap(
    ([_, value]) => value || []
  );
  const queryString =
    queryValues.length > 0
      ? `?${(Object.entries(query) as Array<[string, string[]]>)
          .flatMap(([key, values]) => values?.map((value) => `${key}=${value}`))
          .filter((q) => !!q)
          .join("&")}`
      : "";
  // handling hash
  const hash = route.hash ?? getHashFromRouter(router);
  const hashString = !!hash ? `#${hash}` : "";
  // putting it all together
  return path + queryString + hashString;
}
