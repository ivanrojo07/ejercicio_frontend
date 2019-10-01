export class Movie {
    /*
    nombre: string;
    apellido: string;

    constructor(nombre:string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    'titulo':movie.title,
                    'sinopsis':movie.opening_crawl,
                    'director':movie.director,
                    'producer':movie.producer,
                    'fecha':movie.release_date,
                    'id':
    */

    constructor(
        public titulo: string,
        public sinopsis: string, 
        public director: string, 
        public producer: string, 
        public fecha: string, 
        public id: number
        ) { }
}