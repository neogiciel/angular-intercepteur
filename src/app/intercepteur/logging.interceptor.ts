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

/*
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const headers = new HttpHeaders({
      Authorization: "12345678"
    })

    const newReq = request.clone({
      headers
    })
  
    console.log("intercepteur");
    
    return next.handle(newReq);
  }
}
*/