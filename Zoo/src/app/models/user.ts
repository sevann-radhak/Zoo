export class User{

    constructor(
        public id: string,
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public image: string,
        public role: string,
        // public gettoken: boolean
    ) {
    }
}