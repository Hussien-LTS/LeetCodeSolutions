/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var curr = init
    // let arr = []
return {
		increment: function() {
            curr = curr + 1
            // arr.push(curr)
            return curr
			 },
		decrement: function() {
			curr = curr - 1
            // arr.push(curr)
            return curr
		},
    	reset: function() {
			curr = init 
            // arr.push(curr)
            return curr
		}
	}

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */