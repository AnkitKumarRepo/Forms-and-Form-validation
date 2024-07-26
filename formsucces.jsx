import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();
    const { formData } = location.state || {};

    if (!formData) {
        return <p>No data available</p>;
    }

    return (
        <div>
            <h1>Form Submitted Successfully</h1>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
};

export default SuccessPage;
