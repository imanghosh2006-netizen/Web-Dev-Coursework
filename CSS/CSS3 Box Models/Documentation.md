### Margin Collapsing (Basics)
👉 Definition:
In CSS, when two vertical margins (top and bottom) meet, they don’t add up — instead, they collapse into one margin. The space shown is equal to the largest margin value.

**Key Points for Beginners**
- Only vertical margins (top and bottom) collapse.
- Happens between two block elements that are stacked.
- The bigger margin wins — smaller one disappears.
- Horizontal margins (left/right) never collapse.

Example 1: Adjacent Elements
<h1 style="margin-bottom:50px;">Heading</h1>
<h2 style="margin-top:20px;">Subheading</h2>


Result: The gap is 50px, not 20px.

Example 2: Parent and Child
<div style="margin-top:40px;">
  <p style="margin-top:30px;">Paragraph inside</p>
</div>


Result: The space above the <div> is 40px, not 30px.

Quick Tip
If collapsing causes confusion, you can stop it by adding padding or border to the parent:
.parent {
  padding-top: 1px;   /* stops collapse */
}




