import { Animal } from "../src/animal"
import { Cat } from "../src/cat"
import { User, UserRepository } from '../src/repository/auth-repository';
import { AuthUsecase } from "../src/usecase/auth-usecase";

describe('Object Oriented Programming', function() {

    it('should support OOP in TS', function() {
        const animal: Animal = new Animal('Cat');
        expect(animal.getName()).toBe('Cat');
        expect(animal.voice()).toBe('this is animal voice');
        
        const cat: Cat = new Cat('Kitty');
        expect(cat.getName()).toBe('Kitty');
        expect(cat.voice()).toBe('meoww!!')
    })

    it('should support dependecy injection', function() {
        const userRepo: UserRepository = new UserRepository()
        const authUsecase: AuthUsecase = new AuthUsecase(userRepo)

        const user: User = {
            username: 'admin',
            password: 'admin',
        }

        // register user
        authUsecase.Register(user)

        // login
        expect(authUsecase.Login(user.username, user.password)).toBe('berhasil login')
        expect(authUsecase.Login(user.username, 'asdfghjkl')).toBe('password salah!')
        expect(authUsecase.Login('test', 'test')).toBe('username test tidak terdaftar')

    })

})