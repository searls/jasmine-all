# jasmine-all

A single script to embed [jasmine](http://pivotal.github.com/jasmine/) specs in a trivial HTML file or online with something like a JSFiddle very easily.

Here's the URL:

```
http://sukima.github.com/jasmine-all/jasmine-all-min.js
```

Here's what that URL looks like in a script tag:

``` html
<script type="text/javascript" src="http://sukima.github.com/jasmine-all/jasmine-all-min.js"></script>
```

Here's what that URL looks like in a [full-blown HTML document](http://sukima.github.com/jasmine-all/examples/1-min.html):

Other examples: [Disable auto run][1], [attach to another element][2]

[1]: http://sukima.github.com/jasmine-all/examples/2.html
[2]: http://sukima.github.com/jasmine-all/examples/3.html

``` html
<!DOCTYPE html>
</html>
  <head>
    <title>Jasmine</title>
  </head>
  <body>
    <script type="text/javascript" src="http://sukima.github.com/jasmine-all/jasmine-all-min.js"></script>

    <script type="text/javascript">
      window.hugPanda = function(){ return "yay!"; };
    </script>

    <script type="text/javascript">
      describe('hugging pandas', function(){
        it('makes me yell "yay!"', function(){
          expect(hugPanda()).toBe("yay!");
        });
      });
    </script>
  </body>
</html>
```

The above markup should produce something like this:

![Screenshot](http://i.minus.com/iE2SLer3L7xxC.png "Screenshot")
