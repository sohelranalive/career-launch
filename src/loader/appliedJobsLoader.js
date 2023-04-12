import { getShoppingCart } from "../utilities/fakedb";

const appliedJobsLoader = async () => {

    const loadedAllJobs = await fetch('/jobs.json')
    const allJobs = await loadedAllJobs.json();

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

    return appliedJobs;
}

export default appliedJobsLoader;
