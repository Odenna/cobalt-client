declare namespace Auth {

    interface IRegister {
        login: string,
        password: string,
        password_confirm: string
    }

    interface ISignin {
        login: string,
        password: string
    }
}