# DOM
- The DOM API (Application Programming Interface) is a set of Methods and Properties that allow JavaScript to change the content, structure, and style of any HTML elements

- An API Method is an Action that you can do on an HTML element.

- An API Property is a Value that you can access on an HTML element.


## Example Explained
```
document: is the HTML document.
getElementById(): is a document method.
myPara = getElementById("demo"): retrieves the "demo" element.
innerHTML: is an element property.
myPara.innerHTML = "Hello World!": changes the property.
```

## Selecting HTML element
 - document.getElementById(id)
 - document.getElementByTagName(name)
 - document.getElementByClassName(name)
 - document.querySelector(selector) - css
 - document.querySelectorAll(selector)


## Accessing Element Content
 - _element_.innerHTML : includes tags
 - _element_.textContent : only text

## Accessing Element Attributes
 - _element_._attribute_ : Change the attribute value of an HTML element

 - _element_.style.property	: The style of an HTML element

 ## To Change Element Attributes
 - _element_.setAttribute() : to create or set a new attribute


 ## Manipulating the Structure
- document.createElement() : create a new HTML element

- document.removeChild() : remove an HTML element

- document.appendChild() : Add an HTML element

- document.replaceChild() : replace an html element

## Adding event Handler
- document.getElementById(id).onclick = function(){code}  : Adding event handler code to an onclick event


---

# Selecting Element

- HTML objects (and object collections) are also accessible:

   - document.anchors
   - document.body
   - document.documentElement
   - document.embeds
   - document.forms
   - document.head
   - document.images
   - document.links
   - document.scripts
   - document.title

- ***Example***
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>Finding HTML Elements Using <b>document.forms</b>.</p>

<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>These are the values of each element in the form:</p>

<p id="demo"></p>

<script>
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

# Changing HTML
 - .innerHTML
 - .textContent

 ## changing an attribute
 - sytax 
 > document.getElementById(id).attribute = new value

 - for the dynamic
   - pass Date() : it will print the current date
   - document.write() : by using this we can write directly to the HTML output stream whatever we want from the script however never use document.write() after the document is loaded. It will overwrite the document.

 ## changing css or style of HTML
 - syntax
 > document.getElementById(id).style.property= new style
 - by using event also we can change the HTML tag like onClick() event etc.
 

 


