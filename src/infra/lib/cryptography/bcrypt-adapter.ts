import bcrypt from 'bcrypt'
import { HashPassword } from '@/data/protocols/criptography'

export class BcryptAdapter implements HashPassword {
    async hash ({ password }: HashPassword.Params): Promise<HashPassword.Result> {
        const hashedPassword = await bcrypt.hash(password, 8)
        return { 
            hashedPassword
        }
    }
}