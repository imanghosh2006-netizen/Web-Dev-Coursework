### HTML ENTITIES ###
HTML entities are special codes used to represent reserved or hard-to-type characters in HTML, ensuring they display correctly in browsers. For example, < must be written as &lt; and > as &gt; to avoid breaking HTML tags.


**A Brief List of Enitites.**

&lt;    → <
&gt;    → >
&amp;   → &
&quot;  → "
&apos;  → '
&nbsp; -> space



### Pre tag:

The <pre> tag in HTML is used to display preformatted text exactly as it appears in the source code, preserving spaces, tabs, and line breaks. It's ideal for showing code snippets, ASCII art, or any text where layout matters.

Example
<pre>
Line 1: Hello
Line 2:   This line has spaces
Line 3: End
</pre>

Output (conceptual)
Line 1: Hello
Line 2:   This line has spaces
Line 3: End

**Check characterset and canvas tags also please**








### Quotation Tags in HTML

**1. <q> Tag (Inline Quotation)**

The <q> tag is used for short, inline quotations inside a sentence.

Browsers usually add quotation marks automatically.

Best for short quotes within a paragraph.

Syntax
<p>Einstein once said, <q>Life is like riding a bicycle.</q></p>

Output (conceptually)

Einstein once said, “Life is like riding a bicycle.”

**2. <blockquote> Tag (Long Quotation / Block Quote)**

Used for longer quotations that should appear as a separate block.

Browsers usually indent the block.

You can also add a cite attribute to specify the source URL.

Syntax
<blockquote cite="https://example.com/einstein">
    Life is like riding a bicycle. To keep your balance, you must keep moving.
</blockquote>

Output (conceptually)

A separate indented block containing the quoted text.






### <code> Tag — Definition, Usage & Examples

Definition:
The <code> tag in HTML is used to display inline code snippets.
It renders text in a monospaced font and is ideal for short pieces of code, commands, variable names, or function names inside normal text.

**Usage**

**1. Inline Code**
<p>Use the <code>console.log()</code> function to print output in JavaScript.</p>

Output (conceptual)

Use the console.log() function to print output in JavaScript.

**2. Code Blocks (Using <pre> + <code>)**

For longer code blocks, wrap <code> inside a <pre> tag so indentation and line breaks are preserved.

<pre>
<code>
def greet():
    print("Hello, world!")
</code>
</pre>

**When to Use <code>**

Inline code (e.g., let x = 5;)
Function names (e.g., print())
Commands (e.g., npm install)
File names (e.g., style.css)
Variable names (e.g., username)
