import React from "react";
import useServerData from "./useServerData";
import Loading from "../Loading";
import { useRouter } from "next/router";

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
    const router = useRouter();
    const { city, country } = router.query;

    const newPath = `${path.BASE_URL}${city},${country}&APPID=${path.APP_ID}&${path.EXTRA_OPTIONS}`;

    const { data, isError, isLoading } = useServerData({
      newPath,
      queryKey,
    });

    if (isError) return <div>error</div>;

    if (isLoading) return <Loading />;

    return <WrappedComponent {...data} {...props} />;
  };

  return ComponentWithServerData;
}

export default withServerData;
