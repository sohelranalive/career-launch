import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-center custom-bg p-10'>Basic Q & A</h1>
            <div className='custom-area mt-20 mb-20 text-justify'>

                <p className='text-2xl font-semibold italic'>
                    A. When should you use context API?
                </p>
                <p>
                    Answer: Sometimes we need to pass value, object, function and any types of to another component for this we need to pass props through drilling. And we need to drills every child component to get that props. But context API gives us that facility to get the props without traveling every single component. We we want to get/pass props to a child component from parent component without props drilling we need to use content API.
                </p>
                <br /><br />
                <p className='text-2xl font-semibold italic'>
                    B. What is a custom hook?
                </p>
                <p>
                    Answer: In React Hook we can't edit the functionality of default hooks but sometimes we need to get data based on some certain conditions that time we can need to use custom hook. Suppose, we need to fetch data from local storage and need to compare it with loader data (fetched data), in this case we need to create a custom hook that will filter out the specific data and return us.
                </p>
                <br /><br />
                <p className='text-2xl font-semibold italic'>
                    C. What is useRef?
                </p>
                <p>
                    useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current. The value of the reference remains unchanged between component re-renderings. Updating a reference doesn't allows a component re-rendering.
                </p>
                <br /><br />
                <p className='text-2xl font-semibold italic'>
                    D. What is useMemo??
                </p>
                <p>By default React hook trigged in every re-render. and it call from start but useMemo doesn't render on component rendering. useMemo triggered based on a event. useMemo is used in the functional component of react that returns a memoized value. </p>
            </div>
        </div>
    );
};

export default Blog;