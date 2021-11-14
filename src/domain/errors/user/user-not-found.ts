export class UserNotFoundError extends Error {
    constructor() {
        super('User not found, please try again with other data.');
        this.name = 'UserNotFoundError'
    }
}