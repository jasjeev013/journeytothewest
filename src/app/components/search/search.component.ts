import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStation, ITrain, SearchData } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  activatedRouter = inject(ActivatedRoute);
  trainService = inject(TrainService);
  searchData: SearchData = new SearchData();
  stationList: IStation[] = [];
  trainList: ITrain[] = [];

  constructor() {
    this.activatedRouter.params.subscribe((res: any) => {
      this.searchData.fromStationId = res.fromStationId;
      this.searchData.toStationId = res.toStationId;
      this.searchData.dateOfTravel  = res.dateOfTravel;
      this.getSearchTrains();
    });
  }

  ngOnInit(): void {
    this.loadAllStations();
  }

  loadAllStations() {
    this.trainService.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }

  getSearchTrains() {
    this.trainService
      .getTrainsSearch(
        this.searchData.fromStationId,
        this.searchData.toStationId,
        this.searchData.dateOfTravel
      )
      .subscribe((res: any) => {
        this.trainList = res.data;
      });
  }
}
