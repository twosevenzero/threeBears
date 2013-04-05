# jQuery threeBears

Making sure your text always fits just right.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/twosevenzero/threeBears/master/dist/threeBears.min.js
[max]: https://raw.github.com/twosevenzero/threeBears/master/dist/threeBears.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/threeBears.min.js"></script>
<script>
jQuery(function($) {
  $(.your-element).threeBears();
});
</script>
```

## Configuration
threeBears will start with huge text and work its way down until it fits just right. In order to have some kind of limit, I have implemented a minFontSize configuration variable. This is your way of ensuring it doesn't get reduced to an unreadable value.

Example Configuration:

```html
<script>
$('.timestamp').threeBears({ 
    minFontSize: 12 
});
</script>
```

## Changelog
- 0.1.0 - Initial draft of plugin.


## License

This plugin is licensed under The MIT License (MIT)

The MIT License (MIT)
Copyright (c) 2013 Dave West (@twosevenzero)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
