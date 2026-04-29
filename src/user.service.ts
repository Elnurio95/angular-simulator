import { inject, Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { UserApiService } from "./user-api.service";
import { LoaderService } from "./loader.service";
import { BehaviorSubject, catchError, finalize, Observable, of, tap } from "rxjs";
import { IUser } from "./interfaces/IUser";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    messageService: MessageService = inject(MessageService); 
    userApiService: UserApiService = inject(UserApiService); 
    loaderService: LoaderService = inject(LoaderService); 

    private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]); 
    users$: Observable<IUser[]> = this.usersSubject.asObservable(); 

    setUsers(users: IUser[]): void {
        this.usersSubject.next(users); 
    }

    getUsers(): Observable<IUser[]> {
        return this.users$; 
    }

    loadUsers(): Observable<IUser[]> {
    this.loaderService.showLoader();

    return this.userApiService.getUsers().pipe(
        tap((users: IUser[]) => {
            this.setUsers(users);
        }),
        catchError((error) => {
            this.messageService.showError(
                `Ошибка при загрузке пользователей ${error}`
        );
        return of([]);
        }),
        finalize(() => {
            this.loaderService.hideLoader();
        })
    );
    }

}