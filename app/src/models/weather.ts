export class Weather {
    public readonly name: string;
    public readonly tempeture: BigInteger;
    public readonly description: string;
    public readonly  icon:string


    constructor(name: string,tempeture: BigInteger, description: string,icon:string) {
        this.name = name,
        this.tempeture = tempeture,
        this.description = description,
        this.icon = icon
    }

    get image():string{
        return `${this.icon}`
    }
}