const Button = ({ children, className }) => {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
};

export { Button };
