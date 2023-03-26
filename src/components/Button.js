// The following packages are used here:
// https://www.npmjs.com/package/prop-types
// https://www.npmjs.com/package/classnames
import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
}) {
    
    // Functionality from: https://www.npmjs.com/package/classnames
    const classes = className(rest.className, 
        'flex items-center px-3 py-1.5 m-3 border-solid border', {
        'bg-blue-400 border-blue-500': primary,
        'bg-gray-900 border-gray-900': secondary,
        'bg-green-400 border-green-500': success,
        'bg-orange-400 border-orange-500': warning,
        'bg-red-400 border-red-500': danger,
        'text-white': !outline && (primary || secondary || success || warning || danger),
        'rounded-md': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-orange-500': outline && warning,
        'text-red-500': outline && danger
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

// Custom validation to make sure we can only receive
// one button type
Button.propTypes = {
    // Functionality from: https://www.npmjs.com/package/prop-types
    checkVariationValue: ({     
            primary,
            secondary,
            success,
            warning,
            danger
        }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)
        
        if(count > 1) {
            return new Error(`Only one of primary, secondary, 
                success, warning, danger can be true!`);
        };
    }
};

export default Button;