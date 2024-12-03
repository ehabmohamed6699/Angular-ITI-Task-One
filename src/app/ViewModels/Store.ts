export class Branch{
    constructor(public id: number, public name: string, public address: string) {
    }
}

export class Store {
    constructor(public name: string, public branched: Branch[], public logo: string) {
    }
}
