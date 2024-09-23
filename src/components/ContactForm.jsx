import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
    const day7 = new Date();
    day7.setDate(day7.getDate() + 7);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        height: '',
        width: '',
        depth: '',
        material: '',
        delivery_date: day7,
        comments: ''
    });

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            delivery_date: date,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_fb7inp8',  // Service ID de EmailJS
                'template_dc86a9v', // Template ID de EmailJS
                formData,
                'rYxolLGsZyMvVufZo'      // Public User ID de EmailJS
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Solicitud de impresión enviada con éxito');
                },
                (err) => {
                    console.log('FAILED...', err);
                    alert('Hubo un error al enviar la solicitud');
                }
            );
    };

    return (
        <div className={"w-full flex justify-center bg-contact-pattern bg-center bg-no-repeat bg-cover"}>
            <div className="form-container opacity-[81%] w-[90%] items-center content-center bg-white rounded-b-lg flex flex-col">
                <form onSubmit={handleSubmit} className={`w-full py-6 px-6`}>
                    <div className={`form-description w-1/2 content-start items-start mb-6`}>
                        <span className="form-description text-[#5844D7]">
                            Lorem ipsum dolor sit amet, consectetur  sit amet, consectetur.  Lorem ipsum dolor sit amet, consectetur
                        </span>
                    </div>
                    <div className="form-group flex flex-row w-full justify-center">
                        <div className="w-1/2 floating-label pr-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name">Nombre:</label>
                        </div>
                        <div className="w-1/2 floating-label">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email">Email:</label>
                        </div>
                    </div>

                    <div className="form-group flex w-full justify-center floating-label">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="description">Breve descripción del trofeo:</label>
                    </div>

                    <div className="form-group w-full flex flex-col md:flex-row items-start justify-between mb-8">
                        <div className="section-info w-full md:w-1/3 pr-6">
                            <h3 className="text-lg font-semibold text-[#5844D7] uppercase pb-4">Características</h3>
                            <p className="text-gray-600 text-sm">
                                Características aproximadas.
                            </p>
                        </div>
                        <div className="form-inputs w-full md:w-2/3 flex flex-col space-y-6">
                            <div className="flex flex-col md:flex-row py-6 md:py-0 md:space-x-6">
                                <div className="flex flex-col w-full md:w-1/3 floating-label">
                                    <input
                                        type="number"
                                        name="height"
                                        value={formData.height}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="height">Altura (cm):</label>
                                </div>

                                <div className="flex flex-col w-full md:w-1/3 floating-label">
                                    <input
                                        type="number"
                                        name="width"
                                        value={formData.width}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="width">Ancho (cm):</label>
                                </div>

                                <div className="flex flex-col w-full md:w-1/3 floating-label">
                                    <input
                                        type="number"
                                        name="depth"
                                        value={formData.depth}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="depth">Profundidad (cm):</label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                                <div className="flex flex-col w-full md:w-1/3 floating-label">
                                    <select
                                        name="material"
                                        value={formData.material}
                                        onChange={handleChange}
                                        placeholder=" "
                                        className="select-field border-b-2 border-[#181B3C99] focus:border-[#9F88FC]"
                                        required
                                    >
                                        <option value="PLA">PLA</option>
                                        <option value="ABS">ABS</option>
                                        <option value="PETG">PETG</option>
                                        <option value="Resina">Resina</option>
                                    </select>
                                    <label htmlFor="material">Material solicitado:</label>
                                </div>

                                <div className="flex flex-col w-full md:w-1/3  floating-label relative">
                                    <div className="input-calendar absolute">
                                        <DatePicker
                                            selected={formData.delivery_date}
                                            onChange={handleDateChange}
                                            placeholderText=" "
                                            dateFormat="dd/MM/yyyy"
                                            required
                                        />
                                        <label htmlFor="delivery_date">Fecha de entrega:</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group w-full flex flex-row justify-between floating-label">
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            placeholder=" "
                        />
                        <label htmlFor="comments">Detalles adicionales:</label>
                    </div>
                    <div className="form-group w-full flex flex-row justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="terms" id='terms' required className={`accent-[#5844D7] w-[20px] h-[20px]`} />
                            <label className="text-gray-600 text-sm md:text-base">He leído, entendido y acepto los términos legales.</label>
                        </div>
                        <button type="submit" className={"submit-btn font-bold bg-[#181B3C] text-white rounded-full uppercase py-2 px-2 text-[20px] hover:bg-[#5844D7] disabled:bg-[#999] disabled:cursor-not-allowed"}>Enviar solicitud</button>
                    </div>
                </form >
            </div >
        </div >
    );
};

export default ContactForm;