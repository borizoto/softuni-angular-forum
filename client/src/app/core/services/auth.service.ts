import { Injectable, Signal, signal } from "@angular/core";
import { User } from "../../models";

@Injectable({ providedIn: "root" })
export class AuthService {
    private _isLoggedIn = signal<boolean>(false);
    private _currentUser = signal<User | null>(null)
    private _users: User[] = [
        {
            _id: '5fa64b162183ce1728ff371d',
            username: 'John',
            email: 'john.doe@gmail.com',
            tel: '+359 885 888 888',
            password: 'asd123',
            created_at: '2025',
            updatedAt: '2025',
            themes: ['a'],
            posts: ['a'],
            __v: 1
        },
        {
            _id: '5fa64b162183ce1728ff371e',
            username: 'Jane',
            email: 'john.doe@gmail.com',
            tel: '+359 885 888 888',
            password: 'asd123',
            created_at: '2025',
            updatedAt: '2025',
            themes: ['a'],
            posts: ['a'],
            __v: 1
        },
        {
            _id: '5fa64b162183ce1728ff371f',
            username: 'David',
            email: 'john.doe@gmail.com',
            tel: '+359 885 888 888',
            password: 'asd123',
            created_at: '2025',
            updatedAt: '2025',
            themes: ['a'],
            posts: ['a'],
            __v: 1
        }
    ];

    isLoggedIn = this._isLoggedIn.asReadonly();
    currentUser = this._currentUser.asReadonly();

    constructor() {
        const currentUser = localStorage.getItem('currentUser');

        if (currentUser) {
            const user = JSON.parse(currentUser);

            this._currentUser.set(user);
            this._isLoggedIn.set(true);
        }
    }

    login(username: string, password: string): boolean {
        if (!username || !password) {
            return false;
        }

        const user: User = this._users[0];
        this._currentUser.set(user);
        this._isLoggedIn.set(true);

        localStorage.setItem('currentUser', JSON.stringify(user));

        return true;
    }

    register(username: string, password: string, rePassword: string, email: string, tel: string): boolean {
        if (!username || !password || !rePassword || !email || !tel) {
            return false;
        }

        const newUser: User = {
            _id: `${username}${Date.now()}`,
            username,
            email,
            tel,
            password,
            created_at: Date.now().toString(),
            updatedAt: Date.now().toString(),
            themes: ['a'],
            posts: ['a'],
            __v: 1

        };
        this._currentUser.set(newUser);
        this._isLoggedIn.set(true);

        localStorage.setItem('currentUser', JSON.stringify(newUser));

        return true;
    }

    logout(): void {
        this._currentUser.set(null);
        this._isLoggedIn.set(false);
        localStorage.removeItem('currentUser');
    }

    getUser(): User | null {
        return this._currentUser()
    }
}