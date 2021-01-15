// Compiled using marko@4.23.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web$1.0.0/src/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><script" +
    marko_attr("src", ((("http" + (input.secure ? "s" : "")) + "://localhost:") + input.port) + "/scripts.js") +
    "></script><title>training</title><script>\n      function myFunction() {\n        var element = document.getElementById('title');\n        element.classList.add('test');\n      }\n    </script></head><body><h1 id=title onclick=myFunction()>My First Heading</h1><p>My first paragraph.</p><a href=seasoned-community://jobs>Jobs deep link</a><br><a href=seasoned-community://gigs>Gigs deep link</a><br><a href=seasoned-community://work>Work deep link</a><br><a href=seasoned-community://work/my-work>My Work link</a><br><br><a href=seasoned-community://scheduleinterview?jobGuid=bacbda7b-831a-4ccf-9a8f-fc7113939c65>Scheduled interview</a><br><a href=seasoned-community://scheduleinterview?jobGuid=1b8c62e5-f963-4933-a2e1-f15c3a09e0e4>Scheduled passed</a><br><a href=seasoned-community://scheduleinterview?jobGuid=85a7047c-cd31-41bb-8e66-bae36a608125>Canceled by Candidate</a><br><a href=seasoned-community://scheduleinterview?jobGuid=a2ca4c97-1dde-4d23-b148-b7d4656f277e>Reschedule</a><br><a href=seasoned-community://scheduleinterview?jobGuid=da3de684-8f6d-449a-a69b-066af2bb1b5e>Request an Interview Time</a><br><a href=seasoned-community://scheduleinterview?jobGuid=90b322b8-2b51-4b15-b554-e456ab4d4a26>REQUESTED_BY_ADMIN</a><br><a href=seasoned-community://scheduleinterview?jobGuid=bedc5189-5f67-479e-89dd-643e84a2829e>REQUESTED_BY_CANDIDATE</a><br><a href=seasoned-community://scheduleinterview?jobGuid=bedc5189-5f67-479e-89dd-643e84a2829e>REQUESTED_BY_CANDIDATE avail</a><br><a href=seasoned-community://scheduleinterview?jobGuid=4e718585-66f6-43a9-9359-a0dcac96ba89>REQUESTED_BY_CANDIDATE no avail</a><br><a href=seasoned-community://scheduleinterview?jobGuid=21431f6d-dc87-4cb6-8c98-a5f7d3755dfd>JUST A JOB</a><br><a href=seasoned-community://scheduleinterview?jobGuid=bedc5189-5f67-479e-89dd-643e84a2829e>LAST CASE</a><br>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "37");

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
