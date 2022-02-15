const Button = ({children, action}) => {
    return (
        <button className="add-button" onClick={action}>
            {children}
        </button>
    );
}
 
export default Button;