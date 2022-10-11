import React from 'react';

const Blog = () => {
    return (

        <div className='sm:mx-12 mt-12 border border-orange-500'>
            <div className=' text-start border rounded m-10 p-10'>
                <h2 className='text-orange-500 text-3xl py-6'>What is the purpose of react router?</h2>
                <p className='text-lg'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className=' text-start border rounded m-10 p-10'>
                <h2 className='text-orange-500 text-3xl py-6'>How does context api work?</h2>
                <p className='text-lg'>Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div className='text-start border rounded m-10 p-10'>
                <h2 className='text-orange-500 text-3xl py-6'>Explain useRef?</h2>
                <p className='text-lg'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.</p>
            </div>
        </div>
    );
};

export default Blog;