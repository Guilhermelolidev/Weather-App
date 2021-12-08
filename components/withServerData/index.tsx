import React, { useContext } from "react";
import useServerData from "./useServerData";
import Loading from "../Loading";
import { defaultOptionsContext } from "../../context/defaultOptions";

interface withServerDataInterface<T extends string> {
  queryKey?: string;
  path: {
    [key in T]: string;
  };
}

type withServerDataProps = withServerDataInterface<string>;

function withServerData<T>(
  WrappedComponent: React.ComponentType<T>,
  { path, queryKey }: withServerDataProps
) {
  const ComponentWithServerData = (props: any) => {
    // We have 2 options to mount the path for fetch
    // the first one using useRouter from next/router and getting queryParams
    // second is getting values from the defaultOptionsContext

    const { city, country, unit } = useContext(defaultOptionsContext);

    const unitFormat = path.EXTRA_OPTIONS === unit ? path.EXTRA_OPTIONS : unit;

    const newPath = `${path.BASE_URL}${city},${country.code}&APPID=${path.APP_ID}&units=${unitFormat}`;

    //unit works as a clearCache and refetches the new unit to update the UI
    const { data, isError, isLoading } = useServerData({
      newPath,
      queryKey: unit,
    });

    if (isError) return <div>error</div>;

    if (isLoading) return <Loading />;

    return <WrappedComponent {...data} {...props} />;
  };

  return ComponentWithServerData;
}

export default withServerData;
