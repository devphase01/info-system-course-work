export interface ICreateRequest {
  userId: string;
  title: string;
  description: string;
}

export interface IUpdateRequest {
  requestId: string;
  status: string;
}

export interface IRequest {
  id: string;
  status: string;
  createdAt: string;
  description: string;
}