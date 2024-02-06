import { User, UserRepositoryInterface } from "../repository/auth-repository"

export interface AuthUsecaseInterface {
    Login(username: string, password: string): string
    Register(user: User): void
}

export class AuthUsecase implements AuthUsecaseInterface {

    private userRepo: UserRepositoryInterface

    constructor(userRepo: UserRepositoryInterface) {
        this.userRepo = userRepo
    }

    Register(user: User): void {
        this.userRepo.Create(user)
    }

    Login(username: string, password: string): string {
        
        const user: User = this.userRepo.FindByUsername(username)

        if (user.id == 0) {
            return `username ${username} tidak terdaftar`
        }

        if (user.password != password) {
            return `password salah!`
        }

        return `berhasil login`

    }

}