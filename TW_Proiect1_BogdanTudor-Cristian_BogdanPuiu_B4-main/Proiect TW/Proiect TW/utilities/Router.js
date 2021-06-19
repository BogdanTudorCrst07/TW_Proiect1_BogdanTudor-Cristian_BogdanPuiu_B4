class Router{
    constructor(){
        this.getRoutes={}
        this.postRoutes={}
    }

    use(url,router){
        let aux
        for(aux in router.getRoutes){
            this.getRoutes[url+aux]=router.getRoutes[aux]
        }
        for (aux in router.postRoutes) {
            this.postRoutes[url + aux] = router.postRoutes[aux]
          }
    }

    post(url,controller){
        this.postRoutes[url]=controller
    }
    get(url,controller){
        this.getRoutes[url]=controller
    }
    route(req,res){

        var url=req.url.split('?')[0]
        if(url.includes("/utilities/uploads"))
        {
            req.params='.'+url
            url="/utilities/uploads"
        }
        console.log('request at '+url)
        if(req.method== 'GET'){
            if(this.getRoutes[url] !== undefined){
            try{
                this.getRoutes[url](req,res)
            } catch(exception){
                console.log(exception)
            }
        }
    }
    if (req.method === 'POST') {
        if (this.postRoutes[url] !== undefined) {
          try {
            this.postRoutes[url](req, res)
          } catch (e) {
            console.log(e)
          }
        }
      }

}
}
module.exports={Router}