jQueryTemp = jQuery.noConflict(true);
jQueryOriginal = jQuery || jQueryTemp;

head = document.getElementsByTagName("head")[0];
script = document.createElement("script");
script.id = scriptId;
script.type = "text/javascript";
script.src = "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js";
head.appendChild(script);

script.onload = function() {
  jQ = jQuery.noConflict(true);
  window.jQuery = window.$ = jQueryOriginal;

  script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.bootcdn.net/ajax/libs/marked/1.1.0/marked.min.js";
  head.appendChild(script);

  linkid = "examcoocss";
  link = document.createElement("link");
  link.id = linkid;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://cdn.jsdelivr.net/gh/examcoo/examcoo/examcoo.css";
  head.appendChild(link);
}

