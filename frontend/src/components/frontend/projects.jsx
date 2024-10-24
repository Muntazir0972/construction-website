import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/hero';
import ConstructionImg from '../../assets/images/construction2.jpg';


const projects = () => {
    return (
        <>

            <Header />
            <main>
                <Hero preHeading='Quality. Integrity. Value'
                    heading='Our Projects'
                    text='We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise.' />
            </main>

            <section className='section-3 bg-light py-5'>
                <div className="container py-5">
                    <div className='section-header text-center'>

                        <span>Our Projects</span>
                        <h2>discover our diverse range of projects</h2>
                        <p>We offer a diverse array of construction services,spanning residential, commercial, and industrial projects.</p>

                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ConstructionImg} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Karachi Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuseson projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ConstructionImg} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Lahore Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuseson projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ConstructionImg} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Islamabad Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuseson projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ConstructionImg} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Multan Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuseson projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ConstructionImg} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Multan Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuseson projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ConstructionImg} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Multan Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuseson projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <Footer />

        </>

    )
}

export default projects