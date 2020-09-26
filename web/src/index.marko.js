// Compiled using marko@4.23.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web$1.0.0/src/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_forRange = require("marko/src/runtime/helpers/for-range"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><script" +
    marko_attr("src", ((("http" + (input.secure ? "s" : "")) + "://localhost:") + input.port) + "/scripts.js") +
    "></script>");

  var $for$0 = 0;

  marko_forRange(0, 18, null, function(i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<link rel=stylesheet" +
      marko_attr("href", ((((("http" + (input.secure ? "s" : "")) + "://localhost:") + input.port) + "/styles?q=qa") + i) + "z") +
      ">");
  });

  out.w("<title>training</title><script>\n      function myFunction() {\n        var element = document.getElementById('title');\n        element.classList.add('test');\n      }\n    </script></head><body><h1 id=title onclick=myFunction()>My First Heading</h1><p>My first paragraph.</p>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web$1.0.0/src/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
