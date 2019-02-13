import { Observable } from "rxjs/Observable"
import { Response } from '@angular/http'
import 'rxjs/add/observable/throw'


export class ErrorHandler {

    static handleError(error: Response | any) { //metodo static()
        let errorMessage: string
        if (error instanceof Response) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}


