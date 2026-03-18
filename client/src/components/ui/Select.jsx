export default function Select({ options, className, children, ...rest }) {
    return (
        <select className={`select ${className ?? ""}`} {...rest}>
            {children ?? options?.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </select>
    );
}
