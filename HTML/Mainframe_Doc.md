In HTML there are headings form <h1></h1> to <h6></h6>

Use <p>lorem10</p> to have a random paragraph or a line with 10 digits lorem(numbers)

<br> tag is used to shift to new line

### Styling Multiple Anchor Tags

You can style different `<a>` tags by assigning **classes** in HTML and targeting them in CSS.  
Alternatively, you can use **IDs** (for unique elements) or **nth-child selectors** (based on position in the parent).

**Example (using classes):**

```html
<a href="#" class="red-link">Red Link</a>
<a href="#" class="blue-link">Blue Link</a>

```css
.red-link {
  background-color: red;
  color: white;
}
.blue-link {
  background-color: blue;
  color: white;
}

```
