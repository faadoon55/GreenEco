import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(private router: Router,
  ) {

  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return next.handle(request).pipe(catchError(err => {
  //     if (err.status === 400) {
  //       this.toastr.error('يوجد مشكلة بالطلب يرجى التحقق وإعادة المحاولة. Bad Request');
  //       this.spinner.hide()
  //     }
  //     if (err.status === 401) {
  //       this.toastr.error('غير مصرح بالدخول. Unauthorized');
  //       this.router.navigate(['/auth/login']);
  //       this.spinner.hide()
  //     }
  //     if (err.status === 403) {
  //       this.toastr.error('لا يمكنك الوصول. Forbidden');
  //       this.router.navigate(['/auth/not-found']);
  //       this.spinner.hide()
  //       /// maybe i shall end the session?
  //     }
  //     if (err.status === 422) {
  //       this.toastr.error('يوجد مشكلة بالمدخلات حاول مجددا. Unprocessable Entity');
  //       this.spinner.hide()
  //     }
  //     if (err.status === 429) {
  //       this.toastr.error('يوجد عدد كبير من الطلبات. Too Many Requests');
  //       this.spinner.hide()
  //     }
  //     if (err.status === 500) {
  //       this.toastr.error(err.message);
  //       this.spinner.hide()
  //     }
  //     return throwError(err);
  //   }))
  // }

}
