import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

type DispatchType = ThunkDispatch<unknown, unknown, AnyAction>;

export async function handleQueryAuthCredentials(dispatch: DispatchType, queryFulfilled: Promise<unknown>) {
  try {
    const credentials = (await queryFulfilled).data as unknown as CredentialsDto;

    AuthService.setCredentialsToLocalStorage(credentials);

    dispatch(
      setCredentials({
        userId: credentials.userId,
        token: credentials.accessToken,
      })
    );
  } catch (error) {
    AuthService.clearStorage();
    dispatch(logout());
  }
}