import { useGetRequestsQuery } from "@entities/request";
import ReqItem from "./req-item";

const ManagerReqListPage = () => {
  const { data: requests, isLoading, isError } = useGetRequestsQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went worng...</div>
  }

  return (
    <div className="min-h-[calc(100vh-80px)] h-full w-full px-[120px] pt-[40px]">
      <h1 className="text-[32px] font-roboto-500 mb-[20px]">Requests:</h1>

      <ul className="flex flex-col gap-[10px] h-full">
        {requests && requests.map(req => <ReqItem key={req.description + req.createdAt} title={req.createdAt} {...req} />)}
      </ul>
    </div>
  );
};

export default ManagerReqListPage;
