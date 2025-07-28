export type IUserDetails = {
    userName: string,
    email: string,
    phoneNumber: number,
    password: string,
    address: string,
    photo:  File | null,
    createdAt: Date,
    userType:string,
    age: number
}