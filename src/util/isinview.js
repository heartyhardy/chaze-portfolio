
const isInView = (htmlElement, hook) => {
    /*
        Supports only true/false useState hooks
    */
   
    let bbox = htmlElement.current.getBoundingClientRect();
    if (
        bbox.top >= 0 && bbox.bottom <= window.innerHeight &&
        bbox.left >= 0 && bbox.right <= window.innerWidth
    ) {
        hook(true);
    } else {
        hook(false);
    }
}

export default isInView