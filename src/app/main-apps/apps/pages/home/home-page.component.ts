import { Component, OnInit } from '@angular/core';
import { home } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/Service/imp-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  Common_Plants = [
    {
      plant: 'تفاح',
      id: 1,
      plantImage: "assets/plantsImages/التفاح.jpg"
    },
    {
      plant: 'برتقال',
      id: 2,
      plantImage: "assets/plantsImages/برتقال.jpeg"
    },
    {
      plant: 'قمح',
      id: 3,
      plantImage: "assets/plantsImages/قمح.jpg"
    },
    {
      plant: 'طماطم',
      id: 4,
      plantImage: "assets/plantsImages/طماطم.jpg"
    },
    {
      plant: 'بطاطس',
      id: 5,
      plantImage: "assets/plantsImages/بطاطس.jpg"
    },
    {
      plant: 'جزر',
      id: 6,
      plantImage: "assets/plantsImages/جزر.jpg"
    },
    {
      plant: 'بصل',
      id: 7,
      plantImage: "assets/plantsImages/بصل.jpg"
    },
    {
      plant: 'خيار',
      id: 8,
      plantImage: "assets/plantsImages/خيار.jpg"
    },
    {
      plant: 'بطيخ',
      id: 9,
      plantImage: "assets/plantsImages/بطيخ.jpg"
    },
    {
      plant: 'ذرة',
      id: 10,
      plantImage: "assets/plantsImages/ذرة.webp"
    },
  ]

  Suggested_Plants = [
    {
      plant: 'برتقال',
      id: 2,
      plantImage: "assets/plantsImages/برتقال.jpeg"
    },
    {
      plant: 'طماطم',
      id: 4,
      plantImage: "assets/plantsImages/طماطم.jpg"
    },
    {
      plant: 'جزر',
      id: 6,
      plantImage: "assets/plantsImages/جزر.jpg"
    },
    {
      plant: 'خيار',
      id: 8,
      plantImage: "assets/plantsImages/خيار.jpg"
    },
    {
      plant: 'بطيخ',
      id: 9,
      plantImage: "assets/plantsImages/بطيخ.jpg"
    },
    {
      plant: 'ذرة',
      id: 10,
      plantImage: "assets/plantsImages/ذرة.webp"
    },
    {
      plant: 'عنب',
      id: 11,
      plantImage: "assets/plantsImages/عنب.jpg"
    },
    {
      plant: 'مانجو',
      id: 13,
      plantImage: "assets/plantsImages/مانجو.png"
    },
    {
      plant: 'بابايا',
      id: 16,
      plantImage: "assets/plantsImages/بابايا.jpg"
    },
    {
      plant: 'تمر',
      id: 17,
      plantImage: "assets/plantsImages/تمر.webp"
    },
  ]

  constructor(
    private impApiService: ImpApiService,
  ) { }

  ngOnInit(): void {
    this.impApiService.get(home.Common_Plants).subscribe(data => {
      this.Common_Plants = data.data
    })

    this.impApiService.get(home.Suggested_Plants).subscribe(data => {
      this.Suggested_Plants = data.data
    })
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('تم اختيار الملف:', file);
      // يمكنك الآن التعامل مع الملف (رفع، معاينة، إلخ)
    }
  }
}
