import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../../services/db.service';
import {Carpool} from '../../models/carpool';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.page.html',
  styleUrls: ['./archiv.page.scss'],
})
export class ArchivPage implements OnInit {
  private id: string;
  public selectedCarpool: Promise<Carpool>;

  constructor(private route: ActivatedRoute,
              private db: DbService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectedCarpool = this.db.getCarpool(this.id);
  }

}
