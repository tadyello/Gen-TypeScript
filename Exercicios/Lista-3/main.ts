import { Animal } from "./src/animal";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let cachorro1 = new Cachorro("Branco","Mamífero",5,"Caninos","Coragem");
let cavalo1 = new Cavalo("Preto","Mamífero",7,"Equinos","Pé de pano");
let preguica1 = new Preguica("Marrom","Mamífero",3,"Brádipo","Ligeira");

cavalo1.som();
preguica1.som();
cachorro1.som();