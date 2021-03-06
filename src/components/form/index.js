import React, { useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default function Form({
    disabled,
    onSubmit
}) {
    const [value, setValue] = useState('');

    function handleChangeValue(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(value.trim());
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                type='text'
                disabled={disabled}
                onChange={handleChangeValue} />
            <button
                type='submit'
                disabled={!value}>
                Add
            </button>
        </form>
    );
}
