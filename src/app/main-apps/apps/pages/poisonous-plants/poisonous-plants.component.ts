import { Component, OnInit } from '@angular/core';
import { poisonous_plants } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/Service/imp-api.service';

@Component({
  selector: 'app-poisonous-plants',
  templateUrl: './poisonous-plants.component.html',
  styleUrls: ['./poisonous-plants.component.scss']
})
export class PoisonousPlantsComponent implements OnInit {

  Suggested_Plants = [
    {
      plant: 'الدفلى',
      id: 1,
      plantImage: "assets/poisonousPlantsImages/الدفلى.jpg"
    },
    {
      plant: 'ست الحسن',
      id: 2,
      plantImage: "assets/poisonousPlantsImages/ست الحسن.jpg"
    },
    {
      plant: 'الشوكران',
      id: 3,
      plantImage: "assets/poisonousPlantsImages/الشوكران.jpg"
    },
    {
      plant: 'البنج الأسود',
      id: 4,
      plantImage: "assets/poisonousPlantsImages/البنج الاسود.jpg"
    },
    {
      plant: 'الداتورا',
      id: 5,
      plantImage: "assets/poisonousPlantsImages/الداتوا.jpg"
    },
    {
      plant: 'خانق الذئب',
      id: 6,
      plantImage: "assets/poisonousPlantsImages/خانق الذئب.jpg"
    },
    {
      plant: 'الحنظل',
      id: 7,
      plantImage: "assets/poisonousPlantsImages/الحنظل.jpg"
    },
    {
      plant: 'الخروع',
      id: 8,
      plantImage: "assets/poisonousPlantsImages/الخروع.jpg"
    },
    {
      plant: 'السيكران',
      id: 9,
      plantImage: "assets/poisonousPlantsImages/السيكران.jpeg"
    },
    {
      plant: 'اللفاح',
      id: 10,
      plantImage: "assets/poisonousPlantsImages/اللقاح.jpg"
    },
    {
      plant: 'زنبق العنكبوت',
      id: 11,
      plantImage: "assets/poisonousPlantsImages/زنبق العنكبوت.jpg"
    },
    {
      plant: 'شوكران الماء',
      id: 12,
      plantImage: "assets/poisonousPlantsImages/شوكران الماء.jpg"
    },
    // {
    //   plant: 'الشيريا',
    //   id: 13,
    //   plantImage: "assets/poisonousPlantsImages/"
    // },
    {
      plant: 'آذان الفيل',
      id: 14,
      plantImage: "assets/poisonousPlantsImages/اذان الفيل.jpg"
    },
    // {
    //   plant: 'البنقروس',
    //   id: 15,
    //   plantImage: "src/assets/poisonousPlantsImages/"
    // },
    // {
    //   plant: 'حشيشة البن',
    //   id: 16,
    //   plantImage: "src/assets/poisonousPlantsImages/"
    // },
    // {
    //   plant: 'تباشير الأرض',
    //   id: 17,
    //   plantImage: "src/assets/poisonousPlantsImages/"
    // },
    {
      plant: 'جوز القيء',
      id: 18,
      plantImage: "assets/poisonousPlantsImages/جوز القيء.jpg"
    },
    {
      plant: 'السماق السام',
      id: 19,
      plantImage: "assets/poisonousPlantsImages/السماق السام.jpg"
    },
    // {
    //   plant: 'شوك الذئب',
    //   id: 20,
    //   plantImage: "src/assets/poisonousPlantsImages/"
    // },
    {
      plant: 'قفاز الثعلب',
      id: 21,
      plantImage: "assets/poisonousPlantsImages/قفاز الثعلب.jpg"
    },
    {
      plant: 'عين الديك',
      id: 22,
      plantImage: "assets/poisonousPlantsImages/عين الديك.jpg"
    },
    {
      plant: 'حب الملوك',
      id: 23,
      plantImage: "assets/poisonousPlantsImages/حب الملوك.jpg"
    },
    {
      plant: 'الدسيسة',
      id: 24,
      plantImage: "assets/poisonousPlantsImages/الدمسيسة.jpg"
    },
    {
      plant: 'أذن الحمار',
      id: 25,
      plantImage: "assets/poisonousPlantsImages/اذن الحمار.webp"
    },
    {
      plant: 'رجل الغراب',
      id: 26,
      plantImage: "assets/poisonousPlantsImages/رجل الغراب.jpeg"
    },
    // {
    //   plant: 'أبو شاكوش',
    //   id: 27,
    //   plantImage: "src/assets/poisonousPlantsImages/"
    // },
    {
      plant: 'كف مريم',
      id: 28,
      plantImage: "assets/poisonousPlantsImages/كف مريم.jpg"
    },
    {
      plant: 'السيسبان',
      id: 29,
      plantImage: "assets/poisonousPlantsImages/السيسبان.jpg"
    },
    {
      plant: 'نبات الغلقة',
      id: 30,
      plantImage: "assets/poisonousPlantsImages/الغلقة.jpg"
    },
  ]

  constructor(
      private impApiService: ImpApiService,
    ) { }

    ngOnInit(): void {
       this.impApiService.get(poisonous_plants.Suggested_plants).subscribe(data => {
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
