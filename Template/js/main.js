function Stopwatch () {

    let duration = 0
    let startTime = 0
    let endTime = 0
    let isRunning = false

    this.start = function(){
        if (!isRunning){
            startTime = Date.now()
            isRunning = true
        } else {
            console.log('The stopwatch has already started')
        }
    }

    this.end = function() {
        if (isRunning) {
            endTime = Date.now()
            duration = (endTime - startTime) / 1000
            isRunning = false
            console.log(duration)
        } else {
            console.log('The stopwatch has already ended')
        }
    }

    this.reset = function() {
        duration = 0
        startTime = 0
        endTime = 0
        isRunning = false
    }

    Object.defineProperty(this, 'isRunning', {
        get: function () {
            return isRunning
        } 
    })
}

const sw = new Stopwatch()


