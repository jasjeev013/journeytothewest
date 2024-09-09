import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { IStation } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  trainService = inject(TrainService);
  router = inject(Router);

  stationList: IStation[] = [];

  fromStationId: number = 0;
  ToStationId: number = 0;
  dateOfTravel: string = '';

  ngOnInit(): void {
      this.loadAllStations();

  }

  loadAllStations(){
    this.trainService.getAllStations().subscribe((res:any) => {
      this.stationList = res.data;

    })
  }

  onSearch(){
    if(this.fromStationId == 0 || this.ToStationId == 0 || this.dateOfTravel==''){
      alert("Select the Journey Details")
    }else{
      if(this.fromStationId==this.ToStationId){
        alert('From & To Station Cannot be Same')
      }else{
        console.log(this.fromStationId,this.ToStationId,this.dateOfTravel)
        this.router.navigate(['search',this.fromStationId,this.ToStationId,this.dateOfTravel])
      }
    }
  }


}
