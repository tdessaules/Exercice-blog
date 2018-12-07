import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }
  
  @Input() postItem: {  title: string,
			content: string,
			loveIts: number,
			created_at: Date};

  ngOnInit() {
  }
  
  // fonction permettant d'ajouter un j'aime
  onJaime() {
   this.postItem.loveIts =  this.postItem.loveIts+1;
  }
  
  // fonction permettant d'enlever un j'aime
  onJaimePas() {
   this.postItem.loveIts =  this.postItem.loveIts-1;
  }

}
