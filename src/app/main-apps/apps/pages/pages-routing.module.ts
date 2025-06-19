import { PoisonousPlantInfoComponent } from './poisonous-plant-info/poisonous-plant-info.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { DiseaseInfoComponent } from './disease-info/disease-info.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { EditAccountInfoComponent } from './edit-account-info/edit-account-info.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AnimalsHarmfulToPlantsComponent } from './animals-harmful-to-plants/animals-harmful-to-plants.component';
import { PoisonousPlantsComponent } from './poisonous-plants/poisonous-plants.component';
import { RemindersComponent } from './reminders/reminders.component';
import { MyGardenComponent } from './my-garden/my-garden.component';
import { PlantDiseasesComponent } from './plant-diseases/plant-diseases.component';
import { ExploreComponent } from './explore/explore.component';
import { PlantInformationComponent } from './plant-information/plant-information.component';
import { IdentifyAPlantComponent } from './identify-a-plant/identify-a-plant.component';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './home/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'identify-a-plant',
    component: IdentifyAPlantComponent
  },
  {
    path: 'plant-information/:id',
    component: PlantInformationComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'plant-diseases',
    component: PlantDiseasesComponent
  },
  {
    path: 'disease-info/:id',
    component: DiseaseInfoComponent
  },
  {
    path: 'my-garden',
    component: MyGardenComponent
  },
  {
    path: 'reminders',
    component: RemindersComponent
  },
  {
    path: 'poisonous-plants',
    component: PoisonousPlantsComponent
  },
  {
    path: 'poisonous-plant-info/:id',
    component: PoisonousPlantInfoComponent
  },
  {
    path: 'animals-harmful-to-plants',
    component: AnimalsHarmfulToPlantsComponent
  },
  {
    path: 'animal-info/:id',
    component: AnimalInfoComponent
  },
  {
    path: 'account-info',
    component: AccountInfoComponent
  },
  {
    path: 'edit-account-info',
    component: EditAccountInfoComponent
  },
  {
    path: 'chat-page',
    component: ChatPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
