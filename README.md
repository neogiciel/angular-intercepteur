﻿## <h1>Application Angular JS</h1>
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
  HttpInterceptor,
  HttpHandlerFn,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';


export function LoggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  
  console.log("[LoggingInterceptor] interception")
  
  const headers = new HttpHeaders({
    Authorization: "12345678"
  })

  const newReq = req.clone({
    headers
  })

  return next(newReq)
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



