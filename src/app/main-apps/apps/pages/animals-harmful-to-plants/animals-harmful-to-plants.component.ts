import { Component, OnInit } from '@angular/core';
import { animals } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/Service/imp-api.service';

@Component({
  selector: 'app-animals-harmful-to-plants',
  templateUrl: './animals-harmful-to-plants.component.html',
  styleUrls: ['./animals-harmful-to-plants.component.scss']
})
export class AnimalsHarmfulToPlantsComponent implements OnInit {

  Suggested_Animals = [
    {
      animal: 'الجراد',
      id: 1,
      animalImage: "assets/animalsImages/الجراد.jpg"
    },
    {
      animal: 'الدودة القارضة',
      id: 2,
      animalImage: "assets/animalsImages/الديدان-القارضة.webp"
    },
    {
      animal: 'المن',
      id: 3,
      animalImage: "assets/animalsImages/المن.jpeg"
    },
    {
      animal: 'سوسة النخيل',
      id: 4,
      animalImage: "assets/animalsImages/سوسة_النخيل.jpg"
    },
    {
      animal: 'العنكبوت الأحمر',
      id: 5,
      animalImage: "assets/animalsImages/العنكبوت-الأحمر.webp"
    },
    {
      animal: 'ذبابة الفاكهة',
      id: 6,
      animalImage: "assets/animalsImages/ذبابة الفاكهة.webp"
    },
    {
      animal: 'النطاط',
      id: 7,
      animalImage: "assets/animalsImages/النطاط.jpg"
    },
    {
      animal: 'النملة الزراعية',
      id: 8,
      animalImage: "assets/animalsImages/التملة الزراعية.webp"
    },
    // {
    //   animal: 'الدودة الدبوسية',
    //   id: 9,
    //   animalImage: "src/assets/animalsImages/"
    // },
    {
      animal: 'البق الدقيقي',
      id: 10,
      animalImage: "assets/animalsImages/البق الدقيقي.jpg"
    },
    {
      animal: 'القواقع',
      id: 11,
      animalImage: "assets/animalsImages/القواقع.webp"
    },
    {
      animal: 'الحشرة القشرية',
      id: 12,
      animalImage: "assets/animalsImages/الحشرة القشرية.jpeg"
    },
    {
      animal: 'فأر الحقل',
      id: 13,
      animalImage: "assets/animalsImages/فار الحقل.webp"
    },
    {
      animal: 'الدودة البيضاء',
      id: 14,
      animalImage: "assets/animalsImages/الدودة الثعبانية.webp"
    },
    {
      animal: 'حشرة التربس',
      id: 15,
      animalImage: "assets/animalsImages/حشرة التربس.png"
    },
    {
      animal: 'الدودة الورقية',
      id: 16,
      animalImage: "assets/animalsImages/الدودة الورقية.jpg"
    },
    {
      animal: 'كلب الماء',
      id: 17,
      animalImage: "assets/animalsImages/كلب الماء.jpg"
    },
    {
      animal: 'الثعلب',
      id: 18,
      animalImage: "assets/animalsImages/الثعلب.jpg"
    },
    {
      animal: 'الخنزير البري',
      id: 19,
      animalImage: "assets/animalsImages/الخنزير البري.jpg"
    },
    {
      animal: 'الثعبان',
      id: 20,
      animalImage: "assets/animalsImages/الثعبان.jpg"
    },
    {
      animal: 'الغراب',
      id: 21,
      animalImage: "assets/animalsImages/الغراب.jpg"
    },
    {
      animal: 'البومة',
      id: 22,
      animalImage: "assets/animalsImages/البومة.jpg"
    },
    {
      animal: 'الزرزور',
      id: 23,
      animalImage: "assets/animalsImages/الزرزور.jpg"
    },
    {
      animal: 'البعوض',
      id: 24,
      animalImage: "assets/animalsImages/البعوض.jpg"
    },
    {
      animal: 'العثة',
      id: 25,
      animalImage: "assets/animalsImages/العثة.jpg"
    },
    {
      animal: 'الحلزون',
      id: 26,
      animalImage: "assets/animalsImages/الحلزون.jpg"
    },
    {
      animal: 'الحشرة النطاطة',
      id: 27,
      animalImage: "assets/animalsImages/الحشرة النطاطة.jpg"
    },
    {
      animal: 'الدودة الثعبانية',
      id: 28,
      animalImage: "assets/animalsImages/الدودة الثعبانية.webp"
    },
    {
      animal: 'الإوز البري',
      id: 29,
      animalImage: "assets/animalsImages/الاوز البري.jpg"
    },
    {
      animal: 'الصُرصور',
      id: 30,
      animalImage: "assets/animalsImages/الصرصور.jpg"
    },
  ]

  constructor(
    private impApiService: ImpApiService,
  ) { }

  ngOnInit(): void {
     this.impApiService.get(animals.Suggested_Animals).subscribe(data => {
          this.Suggested_Animals = data.data
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
