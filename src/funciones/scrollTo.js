
const scrollTo = (element, to, duration=100) => {

let start = element.scrollTop,
change = to - start,
currentTime = 0,
increment = 20;
    
const animateScroll = () => {        
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
        setTimeout(animateScroll, increment);
    }
};
animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};


export default scrollTo