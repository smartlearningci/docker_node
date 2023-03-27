import { Component } from '@angular/core';
import { DataJsonServiceService } from '../service/data-json-service.service';
import { LogServiceService } from '../service/log-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {


  exibe : boolean = true
  posts : any;

  constructor(private dados: DataJsonServiceService, private logService: LogServiceService) {}



  ngOnInit(){
    this.posts = this.dados.getPostsTeasers()
    this.logService.log("BlogListComponent","Mensagem1 ");
    this.logService.log("BlogListComponent","Mensagem2 ");
    this.logService.log("BlogListComponent","Mensagem3 ");

  }
}
