# jasmine-all

A single script to embed [jasmine]() specs in a JSFiddle easily.

Here's a minimal little example:

``` html
<!DOCTYPE html>
</html>
  <head>
    <title>Jasmine</title>
  </head>
  <body>
    <script type="text/javascript" src="http://searls.github.com/jasmine-all/jasmine-all-min.js"></script>

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