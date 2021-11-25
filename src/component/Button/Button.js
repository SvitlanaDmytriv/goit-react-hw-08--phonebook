import PropTypes from 'prop-types';

export default function Button({
  className,
  type,
  onClick = null,
  disabled = false,
  children,
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.elementType,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
