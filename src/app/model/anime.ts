export class Anime{
    idAnimes:number;
    animeName:string;
    // format date yyyy-mm-dd
    dateBegin:Date
    dateEnd:Date;
    categories:string[] = [];
    authorName!:string;
    ratings:[];
    seasons:[];

    constructor(idAnime:number,animeName:string,dateBegin:Date,dateEnd:Date,categories:string[],ratings:[],seasons:[]){
      this.idAnimes = idAnime;
      this.animeName = animeName;
      this.dateBegin = dateBegin;
      this.dateEnd = dateEnd;
      this.categories = categories;
      this.ratings = ratings;
      this.seasons = seasons;
    }
}
