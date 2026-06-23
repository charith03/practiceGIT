class All{
    constructor(page){
        this.page = page
    }
    async login(){
        console.log('this was login feature function')
    }
    
    async logout(){
        console.log("this is logout function")
    }

    async inventory(){
        console.log("this is inventory session page")
    }

    async cart(){
        console.log("this is cart session page")
    }
    async checkout(){
        console.log("this is checkout session page")
    }
}