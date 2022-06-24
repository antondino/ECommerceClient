import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
@Input() totalCount: number;
@Input() pageSize: number;
@Output() pageChanged = new EventEmitter<number>();//needs fixing
//pageChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit (){
  }

  onPagerChange(event:any){
    this.pageChanged.emit(event)
  }

}
