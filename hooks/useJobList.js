import useSWR from "swr";

function useJobList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
    fetcher
  );

  return {
    jobLists: data,
    isLoading,
    isError: error,
  };
}

export default useJobList;
