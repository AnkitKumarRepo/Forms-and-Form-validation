import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    const validate = () => {
        const newErrors = {};
        const fields = ['firstName', 'lastName', 'username', 'email', 'password', 'phoneNo', 'country', 'city', 'panNo', 'aadharNo'];
        fields.forEach(field => {
            if (!formData[field]) newErrors[field] = ${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required;
        });
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (formData.phoneNo && !/^\d{10}$/.test(formData.phoneNo)) {
            newErrors.phoneNo = 'Phone number must be 10 digits';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Redirect to success page with form data
            history.push('/success', { formData });
        }
    };

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span>{errors.firstName}</span>}
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <span>{errors.lastName}</span>}
            </label>
            <br />
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <span>{errors.username}</span>}
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </label>
            <br />
            <label>
                Password:
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
                <button type="button" onClick={handlePasswordToggle}>{showPassword ? 'Hide' : 'Show'}</button>
                {errors.password && <span>{errors.password}</span>}
            </label>
            <br />
            <label>
                Phone No.:
                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                {errors.phoneNo && <span>{errors.phoneNo}</span>}
            </label>
            <br />
            <label>
                Country:
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                </select>
                {errors.country && <span>{errors.country}</span>}
            </label>
<br />
            <label>
                City:
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    {formData.country === 'India' && <>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </>}
                    {formData.country === 'USA' && <>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                    </>}
                </select>
                {errors.city && <span>{errors.city}</span>}
            </label>
            <br />
            <label>
                PAN No.:
                <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
                {errors.panNo && <span>{errors.panNo}</span>}
            </label>
            <br />
            <label>
                Aadhar No.:
                <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                {errors.aadharNo && <span>{errors.aadharNo}</span>}
            </label>
            <br />
            <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
        </form>
    );
};

export default FormComponent;
