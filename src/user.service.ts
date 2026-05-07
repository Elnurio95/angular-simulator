import { inject, Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { BehaviorSubject, catchError, finalize, Observable, of, tap } from 'rxjs';
import { IUser } from './interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
}
