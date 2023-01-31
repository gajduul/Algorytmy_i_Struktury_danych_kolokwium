class Stack {
    #top
    #height
    constructor(){
        this.#top = null
        this.#height = 0
    }
    put(data){
        this.#top ={
            data,
            previous: this.#top
        }
        this.#height++
    }
    get top(){
        return this.#top?.data
    }
    takeoff(){
        let old = this.#top
        if(old != null){
            this.#height--
            this.#top = old.previous
        }
        return old?.data
    }
}

function CheckBrackets(
    string,
    open = {
        "„": "cudzysłów",
        "»": "strzałka",
        "(": "okrągły"
    },
    close = {
        "”": "cudzysłów",
        "«": "strzałka",
        ")": "okrągły"
    }) {
    let stack = new Stack()
    let errors = ""
	
    for(let sign of string)
        if(open[sign] != undefined) 
		{
			stack.put(open[sign])
		}
		else if(close[sign] != undefined)
		{
			let open = stack.takeoff()
			if (open !=close[sign]) { errors += open + ", "}
        }

		if(stack.top === undefined && errors === "")
			{
				return "Nawiasy zamkniętę prawidłowo"
			}
		else
			{
				while(stack.top) { errors += stack.takeoff() + " " }
				return "Niektóre nawiasy nie zostały zamkniete! Są to niedomknięte znaki : " + errors
			}
}