# menu

menu page interactive

item-1 Photo by Valeria Boltneva: https://www.pexels.com/photo/ham-burger-with-vegetables-1639557/

item-2 Photo by Eneida Nieves: https://www.pexels.com/photo/cooked-pasta-on-brown-wooden-bowl-803963/

item-3 Photo by Shantanu Pal: https://www.pexels.com/photo/cooked-food-in-bow-2679501/

item-4 Photo by Adela Cristea: https://www.pexels.com/photo/avocado-toast-with-boiled-egg-and-tuna-4491395/

item-5Photo by Olena Bohovyk: https://www.pexels.com/photo/shallow-focus-photography-of-pancakes-with-blueberries-and-syrup-3323680/

item-6 Photo by julie aagaard: https://www.pexels.com/photo/salad-on-a-plate-2097090/

item-7 Photo by mali maeder: https://www.pexels.com/photo/red-meat-with-chili-pepper-and-green-spies-65175/

item-8 Photo by Desativado: https://www.pexels.com/photo/selective-focus-photography-of-meat-on-grill-2491273/

item-9 Photo by Genaro Servín: https://www.pexels.com/photo/strawberry-smoothie-on-a-clear-glass-2424832/

item-10 Photo by İbrahim Hakkı Uçman: https://www.pexels.com/photo/strawberry-smoothie-on-a-wine-glass-3342301/

description:

DISPLAYING MENU ITEMS
make a menu array (const menu)

select dish description and buttons (.section-center and btn-container)

create DOMContentLoaded event to - access and manipulate HTML elements, attach event listeners, perform DOM operations, and more.
By using the DOMContentLoaded event, you ensure that your JavaScript code runs only after the HTML document has been fully loaded, preventing potential issues where elements you want to interact with are not yet available.

use .map method so that all the items from the array(menu) could be added dynamically (possibly more in the future) as a string.

use .join method to make a single string out of manu items called by .map while using a sparator ('') of empty string, to avois the commas (,) inbetween the strings elements.

use innerHTML property to insert menu items onto the pages sectionCenter element.

MAKING BUTTONS FUNCTIONAL
use .reduce() method to iterate over menu array and create an array of uneque categories(names) to find all the possible button categories(names), the accumulator value of .reduce() is ['all'] so that the all button is always present

.push() method to add new categories at the end of the array

.map() method maps over uneque categories array and creates HTML buttons for each category

.join() method joins the generated buttons into a single string

innerHTML property displays button categories(names) in HTML

select all the filter buttons, return NodeList with all the 'filter-btn' const filterBtns = btnContainer.querySelectorAll('.filter-btn') and assign them to filterBtns variables

.forEach method executes the callback function for each element in the NodeList

.currentTarget property is a reference to the element on which the event listener is attached

.dataset property retrieves the value of the data-id attribute from the button that was clicked

.filter filters .menu array and creates new array menuCategory which includes only category properties which match the selected category

if the category matches the button pushed then it is displayed, if all button is pushed then the whole menu is displayed
