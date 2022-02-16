const Button = ({children, onClick}) => {
    /*
    ! For debugging purposes only!
    * console.log(children)
    * console.log(onClick)
    */
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
 
export default Button;