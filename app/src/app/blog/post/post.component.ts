import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataJsonServiceService } from 'src/app/service/data-json-service.service';


@Component({
  selector: 'Post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post?: any;
  constructor(private route: ActivatedRoute,private dados: DataJsonServiceService) { }
  
  ngOnInit(): void {

    this.getPost();
    
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.dados.getPost(id);
    console.log(this.post);
    console.log(this.route.snapshot.paramMap.get('seoTitulo'));
      
  }
}