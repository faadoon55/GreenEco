import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from 'src/services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  arrayList = [
    {
      user: 'هل تسطيع أن تقدم لي نصائح وإرشادات في مجال الزراعة؟!',
      ai: 'نعم وبكل سرور.',
    },
  ];

  userMessage: string = '';
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  imageComment: string = '';

  @ViewChild('content') content: any;

  constructor(private chatService: ChatService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.userMessage.trim() !== '' || this.selectedFile !== null) {
      this.chatService.sendMessage(this.userMessage, this.selectedFile).subscribe(
        (response: any) => {
          const aiReply = response.reply || 'لا يوجد رد';
          this.arrayList.push({ user: this.userMessage, ai: aiReply });
          this.userMessage = '';
          this.selectedFile = null;
          this.imagePreview = null;
        },
        (error: any) => {
          console.error('حدث خطأ:', error);
        }
      );
    } else {
      console.log('الرجاء كتابة رسالة أو رفع صورة قبل الإرسال.');
    }
  }

  clearFile(): void {
    this.selectedFile = null;
    this.imagePreview = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.modalService.open(this.content, { centered: true });
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  sendImageWithComment(modal: any) {
    if (this.selectedFile) {
      console.log('إرسال الصورة مع التعليق:', this.imageComment);
      this.chatService.sendMessage(this.imageComment, this.selectedFile).subscribe(
        (response: any) => {
          const aiReply = response.reply || 'تم استلام الصورة';
          this.arrayList.push({ user: this.imageComment, ai: aiReply });
          this.selectedFile = null;
          this.imagePreview = null;
          this.imageComment = '';
          modal.close();
        },
        (error: any) => {
          console.error('حدث خطأ أثناء إرسال الصورة:', error);
        }
      );
    }
  }
}
