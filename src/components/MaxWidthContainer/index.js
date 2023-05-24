const MaxWidthContainer = ({ children, smallWidth = false }) => {
  const maxWidth = smallWidth ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`container mx-auto ${maxWidth} px-4`}>
      {children}
    </div>
  );
}

export { MaxWidthContainer };