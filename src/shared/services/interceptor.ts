import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class I1 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = sessionStorage.getItem('token');
        const modified = req.clone({setHeaders: {'Authorize': 'bearer'+ token}});
        return next.handle(modified);
    }
}