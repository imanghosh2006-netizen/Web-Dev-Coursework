### CSS Specificity:


### Cascade Algorithm
This Algorithm is used for solving conflicts where multiple CSS rules apply to an HTMl element.

**The Rules are:**

**1.Position and order of Appearance:** The order in which Css rules appear. If we are using the same type of selector for a particular element, (class selector or id selector or etc.), the one which comes at the end is used.

**2.Specificity:** An Algorithm which determines which Css feature has the strongest match.
Order of Specificity is:
**Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal selector.**

**3.Origin:** The order in which Css appears and where it comes from, whether if it is browser style, Css from a browser extension, or the authored Css.

**4.Importance:** Some Css rules are weighed more heavily than others, specially with the important rule type.  The **!important** tag is applied. This tag overrides all.

## CSS Specificity Cheatsheet

Specificity determines which CSS rule wins when multiple rules apply.

- Inline styles → 1000  
- ID selectors (`#id`) → 100  
- Class, attribute, pseudo-class (`.class`, `[attr]`, `:hover`) → 10  
- Element, pseudo-element (`div`, `p`, `::before`) → 1  
- Universal selector (`*`) and combinators (`+`, `>`, `~`, space) → 0  

**Calculation:** Add values for each part of the selector.  
Example: `#main .intro p` = 100 + 10 + 1 = **111**










### 🔍 The data-x="a" Attribute      //This is an Attribute Selector

- data-x="a" is a custom data attribute in HTML.
- All attributes that start with data- are part of the HTML5 data- attribute specification*.
- They allow developers to store extra information (metadata) on HTML elements that doesn’t affect how the element is rendered by default.

📌 What it means in your example
<h1 class="yellow cred cpurple" data-x="a">Css Specificity</h1>

You can style elements based on data attributes:
h1[data-x="a"] {
  color: red;
}
- Semantic / Metadata Purposes
Developers often use data attributes to store:
- IDs or keys for JavaScript logic
- State information (e.g., data-state="open")
- Extra descriptive info without cluttering the DOM with non-standard attributes
✅ Key Pointdata-x="a" doesn’t directly affect CSS specificity or styling unless you target it explicitly in CSS or use it in JavaScript. It’s essentially a custom hook for developers.Would you like me to show you how CSS specificity changes if you style this element using its class vs. using its data-x attribute? That comparison can be quite insightful.