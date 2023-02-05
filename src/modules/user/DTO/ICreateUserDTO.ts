interface ICreateUserDTO{
    name: string
    password: string
    profile: "default" | "admin" | "vet"
}