import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css'],
  providers: [ApiService]
})
export class NaveComponent implements OnInit {
  index:number;
  naves:any[]=[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.apiService.getNaves(this.index)
      .subscribe((res,)=>{
        this.naves = res['naves'];
        console.log(this.naves)
      },error=>{
        console.log(error);
      });
  }

}
