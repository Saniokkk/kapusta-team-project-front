const BalanceButton = ({ children, className }) => {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
};

export { BalanceButton };
