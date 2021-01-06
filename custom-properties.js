if (CSS.registerProperty) {
  CSS.registerProperty({
    name: "--box__color",
    syntax: "<color>",
    initialValue: "rgba(16, 1, 156, 5)",
    inherits: false
  });

  CSS.registerProperty({
    name: "--box__gradient--position",
    syntax: "<percentage>",
    initialValue: "80%",
    inherits: false
  });
}