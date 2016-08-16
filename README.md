# lockScroll

A simple jQuery plugin for fixing the position of one or more element(s) on page load.

## Usage
1. Include the jQuery plugin in your webpage:
```
<script src="/path/to/jquery.lockScroll.js"></script>
```

2. Use the plugin on one or more desired elements on a page:
```
$('.header, .sidebar').lockScroll();
```

3. Sit back and watch the magic happen!

## How it works
- Takes clientBoundingRect from element on page load and sets element as fixed with `top`, `left` and `width` attributes all duped over.
- Listens for `window.resize` events and re-sets the element(s) to static again, grabbing updated clientBoundingRect and re-fixing them.

## TODO
- Add API options
- Add API documentation
- Remove jQuery as a dependency
- Add example(s)
- Test...