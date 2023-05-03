import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


const Blog = () => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }
    return (
        <div className='container mb-5'>
            <h1 className='text-center mb-5 mt-3 text-danger'>Question Part</h1>
            <div className='card mb-5 p-4'>
                <h3>1. Tell us the differences between uncontrolled and controlled components.</h3>
                <p className='category-detail'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            {/* <div>
                <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div> */}

            <div className='card mb-5 p-4'>
                <h3>2. How to validate React props using PropTypes?</h3>
                <p className='category-detail'>Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
            </div>
            <div className='card mb-5 p-4'>
                <h3>3. Tell us the difference between nodejs and express js.</h3>
                <p className='category-detail'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
            </div>
            <div className='card mb-5 p-4'>
                <h3>4. What is a custom hook, and why will you create a custom hook?</h3>
                <p className='category-detail'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;