export const FormField = ({
    htmlFor,
    textContent,
    type,
    id,
    value,
    onChange,
}) => {
    return (
        <p>
            <label htmlFor={htmlFor}>{textContent}</label>
            <input type={type} id={id} value={value} onChange={onChange} />
        </p>
    );
};
