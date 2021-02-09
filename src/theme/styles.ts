const styles = {
  global: {
    //   My resets
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "*": {
      margin: "0",
      padding: "0",
      WebkitTapHighlightColor: "transparent",
    },
    // styles for the `html` and `body`
    "html,body": {
      minWidth: "fit-content",
    },
    // Shopping Cart Badge styles
    ".MuiBadge-root > span": {
      fontFamily: "'Quicksand', sans-serif",
      bg: "#fa5757",
      height: "17px",
      minWidth: "17px",
      fontSize: "0.65rem",
    },
    "@media (hover: hover) and (pointer: fine)": {
      ".product-card:hover": {
        border: "1px solid",
        borderColor: "gray.200",
        boxShadow: "lg",
        transform: "scale(1.01)",
      },
    },
  },
};

export default styles;
