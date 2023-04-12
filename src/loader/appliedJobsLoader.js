import { getShoppingCart } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
    const loadedAllJobs = await fetch('/jobs.json')
    const allJobs = await loadedAllJobs.json();

    //if cart data stored in database we need to use async await

    const getAppliedJobs = getShoppingCart();
    const appliedJobs = [];

    for (const id in getAppliedJobs) {
        const addedJobs = allJobs.find(aj => aj.id === id)
        if (addedJobs) {
            const quantity = getAppliedJobs[id];
            addedJobs.quantity = quantity;
            appliedJobs.push(addedJobs);
        }
    }

    //if we want to return more than one parameter, we can return as a array
    // return [product, savedCart]
    //another way to return more than one parameter
    //return {product, cart: savedCart}

    return appliedJobs;
}

export default appliedJobsLoader;
