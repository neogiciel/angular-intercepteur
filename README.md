## <h1>Application Angular JS</h1>
***
<table>
  <tr>
    <td><img src="https://www.mag-corp.com/wp-content/uploads/2021/08/angular.png" alt="drawing" height="260px"/></td>
  </tr>
</table>

## Informations Générales
***
Mise en place d'une application Angular JS utilisant le concept d'interception

## Technologies
***
Technologies utilisées:
* Angular JS 17
  
## Instalation
***
Lancement de l'application Angular JS<br>
```
$ ng build
$ ng serve
```
Le service est accessible sur http://localhost:4200

## FAQs
***
Lancer la commande
```
ng g interceptor logging
```
Compléter la classe

```
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggibgInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("[HeadersInterceptor] interception")
    console.log(request)
    const GUID = 'f4179b26-21ac-432c-bcd8-cb4bc6e50981'
    const modifiedRequest = request.clone({
      setHeaders:{
        GUID
      }
    })
    return next.handle(modifiedRequest);
  }
}
```
Aller dans le fichier : 
app.module.ts et modifier
```
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor  } from './interceptors/logging.interceptor'

 providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    }
  ]
```



