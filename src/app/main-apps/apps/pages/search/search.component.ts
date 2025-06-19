import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string = ''; // النص المدخل من المستخدم
  searchResults: string[] = []; // نتائج البحث
  previousSearches: string[] = []; // عمليات البحث السابقة

  constructor( ) { }

  @ViewChild('searchInput') searchInput!: ElementRef;

  ngOnInit() {
    // التركيز على حقل البحث عند تحميل المكون
    setTimeout(() => this.searchInput.nativeElement.focus(), 0);

    // جلب عمليات البحث السابقة من Local Storage
    const savedSearches = localStorage.getItem('previousSearches');
    if (savedSearches) {
      this.previousSearches = JSON.parse(savedSearches);
    }
  }

  onSearch() {
    // التحقق من وجود نص مدخل
    if (this.searchQuery.trim() === '') {
      alert('يرجى إدخال كلمة مفتاحية للبحث');
      return;
    }

    // تنفيذ البحث الوهمي
    this.searchResults = [
      `نتيجة 1 للكلمة "${this.searchQuery}"`,
      `نتيجة 2 للكلمة "${this.searchQuery}"`,
      `نتيجة 3 للكلمة "${this.searchQuery}"`,
    ];

    // حفظ البحث في قائمة العمليات السابقة
    this.previousSearches.unshift(this.searchQuery);

    // تخزين عمليات البحث السابقة في Local Storage
    localStorage.setItem('previousSearches', JSON.stringify(this.previousSearches));

    // إعادة ضبط حقل البحث
    this.searchQuery = '';
    setTimeout(() => this.searchInput.nativeElement.focus(), 0); // إعادة التركيز إلى حقل البحث
  }

  clearPreviousSearches() {
    // مسح عمليات البحث السابقة
    this.previousSearches = [];
    localStorage.removeItem('previousSearches');
  }

}
