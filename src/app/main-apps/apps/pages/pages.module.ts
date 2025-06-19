import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home/home-page.component';
import { SearchComponent } from './search/search.component';
import { IdentifyAPlantComponent } from './identify-a-plant/identify-a-plant.component';
import { PlantInformationComponent } from './plant-information/plant-information.component';
import { ExploreComponent } from './explore/explore.component';
import { PlantDiseasesComponent } from './plant-diseases/plant-diseases.component';
import { MyGardenComponent } from './my-garden/my-garden.component';
import { RemindersComponent } from './reminders/reminders.component';
import { PoisonousPlantsComponent } from './poisonous-plants/poisonous-plants.component';
import { AnimalsHarmfulToPlantsComponent } from './animals-harmful-to-plants/animals-harmful-to-plants.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { EditAccountInfoComponent } from './edit-account-info/edit-account-info.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { DiseaseInfoComponent } from './disease-info/disease-info.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { PoisonousPlantInfoComponent } from './poisonous-plant-info/poisonous-plant-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from 'src/services/chat.service';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    IdentifyAPlantComponent,
    PlantInformationComponent,
    ExploreComponent,
    PlantDiseasesComponent,
    MyGardenComponent,
    RemindersComponent,
    PoisonousPlantsComponent,
    AnimalsHarmfulToPlantsComponent,
    AccountInfoComponent,
    EditAccountInfoComponent,
    DiseaseInfoComponent,
    AnimalInfoComponent,
    PoisonousPlantInfoComponent,
    ChatPageComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule, // استيراد HttpClientModule
    ReactiveFormsModule,
  ],
  providers: [
        ChatService
    ],

})
export class PagesModule { }
