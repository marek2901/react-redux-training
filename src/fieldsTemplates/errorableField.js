import React from 'react';

export const errorableField = ({
    input,
    placeholder,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) => <div>
    <div>
        <input {...input} placeholder={placeholder} type={type}/> {touched && ((error && <span>
            {error}
        </span>) || (warning && <span>
            {warning}
        </span>))}
    </div>
</div>