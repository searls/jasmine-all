# jasmine-all

A single script to embed [jasmine](https://pivotal.github.io/jasmine/) specs in a trivial HTML file or online with something like a JSFiddle very easily.

Here's the URL:

```
https://searls.github.io/jasmine-all/jasmine-all-min.js
```

Here's what that URL looks like in a script tag:

``` html
<script type="text/javascript" src="https://searls.github.io/jasmine-all/jasmine-all-min.js"></script>
```

Check out the [examples](https://searls.github.io/jasmine-all/).

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Jasmine</title>
  </head>
  <body>
    <script type="text/javascript" src="https://searls.github.io/jasmine-all/jasmine-all-min.js"></script>

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
