README

Organization of components:

    I have three classes in this app: App.jsx, DisplayList.jsx, and FilteredList.jsx.

    FilteredList.jsx holds the overall layout of the entire app: the filtering sections, the aggregator. 
    The states in this component are dedicated to managing overarching values that change, like the total 
    quantity of items, the number of aggregated sets for each item, the list (so that the overall 
    order can be changed), the filtering size, and the filtering color. 
    There are functions for filtering and adding to the aggregator.
    The render function renders the filtering links, and the aggregator by mapping items of the list that
    should be aggregated.
    FilteredList is responsible for the overall general contents, layout, and filtering of my app.

    DisplayList.jsx is responsible for rendering the list itself. It maps items of the list so each item can be 
    displayed as a card. 

    App.jsx is responsible for holding the original list.

How data is passed down through components:

    App.jsx passes the original list as a prop to FilteredList. This list is used to set the original sorted state.

    FilteredList passes multiple props to DisplayList to be used to render the list itself. Specifically, the sorted
    list is passed so that the newly filtered/sorted list can be rendered, functions for adding and removing are passed
    so that buttons in the list items will have onClick functions, and both the calculateTotal function and the agg state
    are passed as props so that the total quantity in the aggregate can be updated when add or remove are clicked.


How the user trigger state changes:

    State changes are triggered whenever a button (or filtering/sorting link) is pressed. This is done by the onClick functions.

    The states for the size and color filter are changed by the onClick functions for the filtering links: onSelectFilterSize and 
    onSelectFilterColor because I would like to know what size and color the items are filtered by so it can be rendered later. 
    The changes are then rendered by DisplayList.

    The state for the sorted order is changed when by the onClick function for the sorting links: sortByNum because I want to be able
    to know when and how the order changes so it can be displayed.

    The state for the number of total aggregated sets for an item are changed by the onClick functions for the add and remove buttons:
    addClick and removeClick becuase I want to keep track of how many sets there are for each item so I can display this value and later
    calculate the total.

    The state for the overall total number of pompoms for an item is changed by the onClick function for the add and remove buttons: 
    calculateTotal because I want to recalculate the total everytime a new item is added or removed from the aggregator. 

I acknowledge that it is not good practice to use images from online urls in apps. However, I had a lot of trouble downloading and using images locally.
