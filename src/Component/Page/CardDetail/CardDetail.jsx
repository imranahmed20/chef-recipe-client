import React from 'react';

const CardDetail = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center fw-bold'>Top Six Chefs In Bangladesh</h1>
            <p className='banner-detail text-center'>Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. You should be able to delegate tasks to kitchen staff to ensure meals are prepared in a timely manner. Also, you should be familiar with sanitation regulations.</p>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CardDetail;