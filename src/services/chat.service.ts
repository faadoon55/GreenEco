import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  /**
   * إرسال الرسالة والصورة (إن وجدت) إلى الخادم.
   * @param message نص الرسالة.
   * @param file ملف الصورة (اختياري).
   * @returns ملاحظة حول الرد من الخادم.
   */
  sendMessage(message: string, file: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('message', message);

    // إضافة الصورة إذا كانت موجودة
    if (file) {
      formData.append('image', file, file.name);
    }

    // إرسال البيانات عبر HTTP POST إلى السيرفر
    return this.http.post<any>('http://localhost:5000/chat', formData);
  }
}
