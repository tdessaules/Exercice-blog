// classe permettant de typer un post
export class Post {
	
	// attributs d'un post
	title: string;
	content: string;
	loveIts: number;
	created_at: Date;
	
	 constructor() { 
		this.created_at = new Date();
	 }
}
