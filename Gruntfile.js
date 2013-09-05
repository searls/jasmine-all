module.exports = function (grunt) {
  var
    build_dir = "build/",
    pkg       = require("./package.json"),
    hljs      = require("highlight.js");

  function compressJsFile(file) {
    var UglifyJS = require("uglify-js2");
    var result   = UglifyJS.minify(file);
    return result.code;
  }

  function compressCssFile(file) {
    var
      UglifyCSS = require("uglifycss"),
      jsesc     = require("jsesc"),
      result    = UglifyCSS.processFiles([file]);
    return jsesc(result);
  }

  function highlightHTML(html) {
    return hljs.highlight("xml", html).value;
  }

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.initConfig({
    pkg: pkg,
    copy: {
      main: {
        cwd: "public/",
        src: "**",
        dest: build_dir,
        expand: true
      },
    },
    'gh-pages': {
      options: {
        base: build_dir
      },
      src: ['**']
    }
  });

  grunt.registerTask("default", ["build"]);

  grunt.registerTask("build:compileStandAlone",
    "Builds jasmine-all.js",
    function() {
      var output = grunt.template.process(
        grunt.file.read("jasmine-all.jst"),
        { data: {
          jasmineVersion:      pkg.version,
          jasmineCss:          compressCssFile("lib/jasmine.css"),
          jasmineHtmlReporter: grunt.file.read("lib/jasmine-html.js"),
          jasmineCore:         grunt.file.read("lib/jasmine.js"),
          jasmineJquery:       grunt.file.read("lib/jasmine-jquery.js")
        } }
      );
      grunt.file.write(build_dir + "jasmine-all.js", output);

      output = grunt.template.process(
        grunt.file.read("index.html.jst"),
        { data: {
          jasmineVersion: pkg.version,
          scriptTag: highlightHTML('<script type="text/javascript" src="http://sukima.github.com/jasmine-all/jasmine-all-min.js"></script>'),
          repo_url: "http://github.com/sukima/jasmine-all/",
          examples: [
            highlightHTML(grunt.file.read("examples/1.html")),
            highlightHTML(grunt.file.read("examples/2.html")),
            highlightHTML(grunt.file.read("examples/3.html"))
          ]
        } }
      );
      grunt.file.write(build_dir + "index.html", output);
    }
  );

  grunt.registerTask("build:compressStandAlone",
    "Compresses js to jasmine-all-min.js",
    function() {
      grunt.file.write(build_dir + "jasmine-all-min.js", compressJsFile(build_dir + "jasmine-all.js"));
    }
  );

  grunt.registerTask("build",
    "Builds and minifies jasmine-all-min.js",
    [
      "build:compileStandAlone",
      "build:compressStandAlone",
      "copy"
    ]
  );

  grunt.registerTask("clean",
    "Cleans the build directory",
    function() {
      grunt.file.delete(build_dir);
    }
  );

};

/* vim:set ts=2 sw=2 et fdm=marker: */
