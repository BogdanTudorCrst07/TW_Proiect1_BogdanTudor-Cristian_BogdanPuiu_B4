const validEntries = '([0-9]|[a-z]|[A-Z])+'
String.prototype.fullMatch = function (regex) {
    try {
        regex = new RegExp(regex)
    }
    catch (exception) {
        return false;
    }
    var entries = this.toString().match(regex)
    if (entries) {
        if (entries[0] == entries.input)
            return true;
    }

    return false;
}


class Router {
    constructor() {
        this.getRoutes = {}
        this.postRoutes = {}
        this.putRoutes = {}
        this.deleteRoutes = {}
    }

    use(url, router) {
        let aux
        for (aux in router.getRoutes) {
            this.getRoutes[url + aux] = router.getRoutes[aux]
        }
        for (aux in router.postRoutes) {
            this.postRoutes[url + aux] = router.postRoutes[aux]
        }

    }


    post(url, controller) {
        this.postRoutes[url] = controller
    }
    get(url, controller) {
        this.getRoutes[url] = controller
    }

    route(req, res) {
        var url = req.url.split('?')[0]

        if (req.method == 'GET'){
            for(const routeKey of Object.keys(this.getRoutes)){
                let urlRegex=''
                const pathParams={}
                routeKey.split
            }
        }
    }
}