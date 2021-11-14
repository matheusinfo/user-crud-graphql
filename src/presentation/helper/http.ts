import { HttpResponse } from '@/presentation/protocols'
  
export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: error,
})
  

export const success = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
})
  

export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: null,
})
  