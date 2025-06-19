import { Component, OnInit } from '@angular/core';
import { explore } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/Service/imp-api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  Suggested_Plants = [
    {
      plant: 'تفاح',
      id: 1,
      plantImage: "src/assets/plantsImages/"
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
    {
      plant: 'عنب',
      id: 11,
      plantImage: "assets/plantsImages/عنب.jpg"
    },
    {
      plant: 'فراولة',
      id: 12,
      plantImage: "assets/plantsImages/فروالة.jpg"
    },
    {
      plant: 'مانجو',
      id: 13,
      plantImage: "assets/plantsImages/مانجو.png"
    },
    {
      plant: 'رمان',
      id: 14,
      plantImage: "assets/plantsImages/رمان.webp"
    },
    {
      plant: 'تين',
      id: 15,
      plantImage: "assets/plantsImages/تين.jpg"
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
    {
      plant: 'عدس',
      id: 18,
      plantImage: "assets/plantsImages/عدس.webp"
    },
    {
      plant: 'فول',
      id: 19,
      plantImage: "assets/plantsImages/فول.webp"
    },
    {
      plant: 'نعناع',
      id: 20,
      plantImage: "assets/plantsImages/نعناع.webp"
    },
    {
      plant: 'ريحان',
      id: 21,
      plantImage: "assets/plantsImages/ريحان.jpg"
    },
    {
      plant: 'خس',
      id: 22,
      plantImage: "assets/plantsImages/خس.jpeg"
    },
    {
      plant: 'فلفل حار',
      id: 23,
      plantImage: "assets/plantsImages/فلفل حار.jpg"
    },
    {
      plant: 'كوسا',
      id: 24,
      plantImage: "assets/plantsImages/كوسا.webp"
    },
    {
      plant: 'باذنجان',
      id: 25,
      plantImage: "assets/plantsImages/باذنجان.webp"
    },
    {
      plant: 'فلفل حلو',
      id: 26,
      plantImage: "assets/plantsImages/فلفل حلو.jpg"
    },
    {
      plant: 'بقدونس',
      id: 27,
      plantImage: "assets/plantsImages/بقدونس.avif"
    },
    {
      plant: 'زنجبيل',
      id: 28,
      plantImage: "assets/plantsImages/زنجبيل.webp"
    },
    {
      plant: 'زعتر',
      id: 29,
      plantImage: "assets/plantsImages/زعتر.jpg"
    },
    {
      plant: 'إكليل الجبل',
      id: 30,
      plantImage: "assets/plantsImages/اكليل الجبل.avif"
    },
  ]

  constructor(
    private impApiService: ImpApiService,
  ) { }

  ngOnInit(): void {
    this.impApiService.get(explore.Suggested_Plants).subscribe(data => {
          this.Suggested_Plants = data.data
        })
  }
}
