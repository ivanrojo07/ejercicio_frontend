import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  datas: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData()
      .subscribe((res) => {
        this.datas = res['naves'];
        console.log(this.datas)

      });
  }

}
