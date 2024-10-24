import React, { useState, useRef, useMemo } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/sidebar'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';

const Create = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...' // Fixed placeholder
    }), []);

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const navigate = useNavigate();
    const onSubmit = async (data) => {

        const newData = {...data, "content" : content}
        const res = await fetch(apiUrl + 'services', {
            'method': 'POST',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();

        if (result.status == true) {
            toast.success(result.message);
            navigate('/admin/services');
        } else {
            toast.error(result.message);
        }
    }

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        FormData.append("image",file);

        await fetch(apiUrl + 'temp-images', {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body:formData
        }),then (response => response.json());

    }
    return (
        <>
            <Header />
            <main>
                <div className="container my-5">
                    <div className='row'>
                        <div className='col-md-3'>
                            <Sidebar />
                            {/* Sidebar */}
                        </div>

                        <div className='col-md-9'>
                            {/* Dashboard */}
                            <div className="card shadow border-0">
                                <div className="card-body p-4">

                                    <div className="d-flex justify-content-between">
                                        <h4 className='h5 mt-2'>Services / Create</h4>
                                        <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />

                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor="" placeholder='Title' className='form-label'>Name</label>
                                            <input
                                                {
                                                ...register('title', {
                                                    required: "The title field is required"
                                                })
                                                }
                                                type="text"
                                                className={`form-control ${errors.title && 'is-invalid'}`} />
                                            {
                                                errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                            }
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" placeholder='Slug' className='form-label'>Slug</label>
                                            <input
                                                {
                                                ...register('slug', {
                                                    required: "The slug field is required"
                                                })
                                                }
                                                type="text" className={`form-control ${errors.slug && 'is-invalid'}`} />
                                            {
                                                errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                            }
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" placeholder='short Description'  className='form-label'>Short Description</label>
                                            <textarea 
                                                {
                                                ...register('short_desc')
                                                }
                                                className='form-control' rows={4}></textarea>
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" placeholder='Content' className='form-label'>Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { }}
                                            />
                                        </div>
                                            
                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Image</label>
                                            <input type="file" className='form-control' onChange={handleFile}/>
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Status</label>
                                            <select className='form-control'
                                                {
                                                ...register('status')
                                                }
                                            >
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>

                                        <button className='btn btn-primary'>Submit</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Create