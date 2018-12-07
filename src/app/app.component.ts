import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'exercice-blog';
  
  posts: Post[]=new Array();
  
  post1 = new Post();
  post2 = new Post();
  post3 = new Post();
  
  
 
  ngOnInit(){
     
	 this.post1.title = 'Lorem Ipsum';
	 this.post1.content = 'Il n’y a personne qui n’aime la souffrance pour elle-même, qui ne la recherche et qui ne la veuille pour elle-même…';
	 this.post1.loveIts = 4;
	 
	 this.post2.title = 'Traduction de H. Rackham (1914)';
	 this.post2.content = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.';
	 this.post2.loveIts = -1;
	 
	 this.post3.title = 'Section 1.10.33 du "De Finibus Bonorum et Malorum" de Ciceron (45 av. J.-C.)';
	 this.post3.content = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.';
	 this.post3.loveIts = 0;
	 
	 this.posts.push(this.post1);
	 this.posts.push(this.post2);
	 this.posts.push(this.post3);
	  
  }

 
  
  
  
}


