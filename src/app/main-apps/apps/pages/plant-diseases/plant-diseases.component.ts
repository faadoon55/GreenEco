import { Component, OnInit } from '@angular/core';
import { plant_diseases } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/Service/imp-api.service';

@Component({
  selector: 'app-plant-diseases',
  templateUrl: './plant-diseases.component.html',
  styleUrls: ['./plant-diseases.component.scss']
})
export class PlantDiseasesComponent implements OnInit {

  Suggested_diseases = [
    {
      disease: 'اللفحة المتأخرة',
      id: 1,
      diseaseImage: "assets/diseasesImages/اللفحة المتاخرة.jpg"
    },
    {
      disease: 'البياض الدقيقي',
      id: 2,
      diseaseImage: "assets/diseasesImages/البياض الدقيقي.webp"
    },
    {
      disease: 'البياض الزغبي',
      id: 3,
      diseaseImage: "assets/diseasesImages/البياض الزغبي.jpeg"
    },
    {
      disease: 'جرب التفاح',
      id: 4,
      diseaseImage: "assets/diseasesImages/جرب التفاح.jpg"
    },
    {
      disease: 'الصدأ',
      id: 5,
      diseaseImage: "assets/diseasesImages/الصدأ.jpg"
    },
    {
      disease: 'العفن الرمادي',
      id: 6,
      diseaseImage: "assets/diseasesImages/العفن الرمادي.webp"
    },
    {
      disease: 'الذبول الوعائي',
      id: 7,
      diseaseImage: "assets/diseasesImages/الذبول الوعائي.jpg"
    },
    {
      disease: 'اللفحة النارية',
      id: 8,
      diseaseImage: "assets/diseasesImages/اللفحة النارية.jpg"
    },
    {
      disease: 'تبرقش الأوراق',
      id: 9,
      diseaseImage: "assets/diseasesImages/تبرقش الاوراق.JPG"
    },
    {
      disease: 'بقع الأوراق',
      id: 10,
      diseaseImage: "assets/diseasesImages/بقع الاوراق.jpg"
    },
  ]

  Suggested_diseases_ = [
    {
      disease: 'بقع الأوراق السوداء',
      id: 11,
      diseaseImage: "assets/diseasesImages/بقع الاوراق السوداء.jpg"
    },
    {
      disease: 'الأنثراكنوز',
      id: 12,
      diseaseImage: "assets/diseasesImages/الانثراكنوز.webp"
    },
    {
      disease: 'عفن الجذور',
      id: 13,
      diseaseImage: "assets/diseasesImages/عفن الجذور.jpg"
    },
    {
      disease: 'التدرن التاجي',
      id: 14,
      diseaseImage: "assets/diseasesImages/التدرن التاجي.png"
    },
    {
      disease: 'التقرح البكتيري',
      id: 15,
      diseaseImage: "assets/diseasesImages/التقرح البكتيري.jpg"
    },
    {
      disease: 'اللفحة المبكرة',
      id: 16,
      diseaseImage: "assets/diseasesImages/اللفحة المبكرة.jpeg"
    },
    {
      disease: 'العفن الأبيض',
      id: 17,
      diseaseImage: "assets/diseasesImages/العفن الابيض.jpeg"
    },
    {
      disease: 'الإصفرار الفيروسي',
      id: 18,
      diseaseImage: "assets/diseasesImages/الاصفرار الفيروسي.webp"
    },
    {
      disease: 'التخطيط الفيروسي',
      id: 19,
      diseaseImage: "assets/diseasesImages/التخطيط الفيروسي.jpg"
    },
    // {
    //   disease: 'شلل القرون',
    //   id: 20,
    //   diseaseImage: "src/assets/diseasesImages/"
    // },
  ]

  constructor(
        private impApiService: ImpApiService,
      ) { }

      ngOnInit(): void {
         this.impApiService.get(plant_diseases.Suggested_diseases).subscribe(data => {
              this.Suggested_diseases = data.data
            })

            this.impApiService.get(plant_diseases.Suggested_diseases).subscribe(data => {
              this.Suggested_diseases_ = data.data
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
