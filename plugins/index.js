module.exports = require("tailwindcss/plugin")(function ({ addComponents, addUtilities }) {
  addComponents([
    require("./base.js")(),
    require("./dropdown.js")(),
    require("./modal.js")(),
    require("./popover.js")(),
    require("./toast.js")(),
    require("./tooltip.js")()
  ]);
  addUtilities({ ".navbar-collapse": { display: "flex !important" } }, { variants: ["responsive"] });
});