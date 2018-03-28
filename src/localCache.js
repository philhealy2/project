
class LocalCache {

    constructor() {
        this.entries = [] ;
    }

    getAll() {
        return this.entries ;
    }

    populate(entries) {
        this.entries = entries;
    }


}

export default (new LocalCache() );
