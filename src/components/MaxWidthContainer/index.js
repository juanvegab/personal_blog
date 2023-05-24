const MaxWidthContainer = ({ children, smallWidth = false }) => {
  const maxWidth = smallWidth ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`container mx-auto ${maxWidth}`}>
      {children}
    </div>
  );
}

export { MaxWidthContainer };