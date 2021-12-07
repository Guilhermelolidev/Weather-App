import { useQuery } from "react-query";

const fetchServerData = async (path) => {
  const response = await fetch(path);

  const newServerData = await response.json();

  return newServerData;
};

const useServerData = ({ newPath, queryKey = "no-cache" }) => {
  const path = newPath;

  const { data, isError, isLoading } = useQuery(queryKey, () =>
    fetchServerData(path)
  );

  return { data, isError, isLoading };
};

export default useServerData;
