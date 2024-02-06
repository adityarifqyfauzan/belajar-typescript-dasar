export interface User {
    id?: number,
    username: string,
    password: string,
    isActive?: boolean
}

let users: User[] = []

export interface UserRepositoryInterface {
    FindByID(id: number): User
    FindByUsername(username: string): User
    Create(user: User): void
}

export class UserRepository implements UserRepositoryInterface {

    FindByUsername(username: string): User {
        let user: User = {
            id: 0,
            username: "",
            password: "",
            isActive: false
        }

        for (const user of users) {
            if (user.username == username) {
                return user
            }
        }
        return user
    }

    FindByID(id: number): User {

        let user: User = {
            id: 0,
            username: "",
            password: "",
            isActive: false
        }

        for (const user of users) {
            if (user.id == id) {
                return user
            }
        }
        return user
    }

    Create(user: User): void {
        user.id = users.length+1
        user.isActive = true
        users.push(user)
    }



}