const UserReqListPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-full px-[120px] pt-[40px]">
      <h1 className="text-[32px] font-roboto-500 mb-[20px]">Requests:</h1>

      <ul className="flex flex-col gap-[10px]">
        {requests.map(req => (
          <li key={req.title + req.description} className="flex gap-[40px] items-center w-full rounded-[4px] p-[20px] bg-white">
            <h3 className="flex-3 text-[18px]">{req.title}</h3>
            <p className="flex-1">{req.description}</p>
            <p>{req.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserReqListPage;

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
