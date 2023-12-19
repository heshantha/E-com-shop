import { from } from 'rxjs';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap, catchError  } from 'rxjs/operators';
import {LOGIN_REQUEST, loginSuccess} from './Actions'
import {axiosInstance} from '../components/Api/AxiosInstance';



export const loginEpic = (action$ : any) => action$.pipe(
  ofType(LOGIN_REQUEST),
  mergeMap((action :any) =>
  from(axiosInstance.post('/api/v1/auth/login', action.payload)).pipe(
      map((response : any) => loginSuccess(response.data.access_token)),
      catchError(error => of({
        type: 'LOGIN_FAILED',
        payload: error.xhr.response,
      }))
    )
  )
);

