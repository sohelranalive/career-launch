import React from 'react';

const Category = ({ cate }) => {

    const { categoryLogo, categoryName, availableJobs } = cate

    return (
        <div className='custom-bg rounded-md w-full p-10 mt-5 md:mt-0'>
            <img src={categoryLogo} alt="" className='bg-gray-200 p-2 rounded-md mb-8' />
            <h1>{categoryName}</h1>
            <small><p>{availableJobs}+ Jobs Available</p></small>
        </div>
    );
};

export default Category;