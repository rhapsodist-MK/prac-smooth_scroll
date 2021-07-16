
# getBoundingClientRect()
The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

This method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.

Note: The amount of scrolling that has been done of the viewport area is taken into account when computing the bounding rectangle. This means that the rectangle's edges (top, left, bottom, and right) change their values every time the scrolling position changes.