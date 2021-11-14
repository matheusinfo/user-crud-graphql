export class UserDuplicatedError extends Error {
    constructor() {
        super('User already exists, please try again with other data.');
        this.name = 'UserDuplicatedError'
    }
}