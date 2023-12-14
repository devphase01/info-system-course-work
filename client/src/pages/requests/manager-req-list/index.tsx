import ReqItem from "./req-item";

const ManagerReqListPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-full px-[120px] pt-[40px]">
      <h1 className="text-[32px] font-roboto-500 mb-[20px]">Requests:</h1>

      <ul className="flex flex-col gap-[10px]">
        {requests.map(req => <ReqItem key={req.description + req.title} {...req} />)}
      </ul>
    </div>
  );
};

export default ManagerReqListPage;

const requests = [
  {
    title: 'Request 1',
    description: 'Description long very long',
    status: 'closed'
  },
  {
    title: 'Request 2',
    description: 'Description long very long',
    status: 'pending'
  },
  {
    title: 'Request 3',
    description: 'Description long very long',
    status: 'none'
  },
  {
    title: 'Request 4',
    description: 'Description long very long',
    status: 'pending'
  },
];
