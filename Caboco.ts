export class Caboco {
    constructor(
    private vida: number = 100,
    private fome: number = 100,
    private forca: number = 100,
    private energia: number = 100
    ) {}

    public cacar() {

    }
    public procriar(caboco: Caboco): Caboco {
        return new Caboco()
    }
    public minerar() {

    }
    public comer() {

    }
    
}
