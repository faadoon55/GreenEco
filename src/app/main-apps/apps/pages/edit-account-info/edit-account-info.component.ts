import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account-info',
  templateUrl: './edit-account-info.component.html',
  styleUrls: ['./edit-account-info.component.scss']
})
export class EditAccountInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  uploadedImage: string | null = null; // لتخزين الصورة المرفوعة

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput?.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.uploadedImage = e.target?.result as string; // تحويل الصورة إلى Base64
      };

      reader.readAsDataURL(fileInput.files[0]); // قراءة الملف
    }
  }

  signout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token")
  }

}
