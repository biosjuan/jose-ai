import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingIndicatorService } from "./loading-indicator.service";

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Show loading indicator
    this.loadingIndicatorService.show();

    return next.handle(req).pipe(
      finalize(() => {
        // Hide loading indicator when the request is complete
        this.loadingIndicatorService.hide();
      })
    );
  }
}
