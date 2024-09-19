import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        height: '',
        width: '',
        depth: '',
        material: '',
        delivery_date: '',
        comments: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre del solicitante</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Escribe tu nombre"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Escribe tu correo electrónico"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descripción del trofeo</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe cómo debería verse el trofeo"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="height">Altura (cm)</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        placeholder="Altura del trofeo en cm"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="width">Ancho (cm)</label>
                    <input
                        type="number"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                        placeholder="Ancho del trofeo en cm"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="depth">Profundidad (cm)</label>
                    <input
                        type="number"
                        name="depth"
                        value={formData.depth}
                        onChange={handleChange}
                        placeholder="Profundidad del trofeo en cm"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="material">Material solicitado</label>
                    <input
                        type="text"
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        placeholder="Ej: PLA, ABS, PETG, etc."
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="delivery_date">Fecha de entrega solicitada</label>
                    <input
                        type="date"
                        name="delivery_date"
                        value={formData.delivery_date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comentarios adicionales</label>
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Cualquier detalle adicional"
                    />
                </div>

                <button type="submit" className="submit-btn">Enviar solicitud</button>
            </form>
        </div>
    );
};

export default ContactForm;