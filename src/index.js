import React from "react";
import ReactDOM from "react-dom";

// створити елемент nav всередині якого буде список ul з чотирма елементами li

const list_item1 = React.createElement ( "li", {}, 'Apple');

const list_item2 = React.createElement ( "li", {}, 'Orange');

const list_item3 = React.createElement ( "li", {}, 'Peach');

const list_item4 = React.createElement ( "li", {}, 'Banana');

const list = React.createElement( "ul", null, list_item1, list_item2, list_item3, list_item4);

const navigation = React.createElement("nav", {}, list);

ReactDOM.render(navigation, document.getElementById("root"));

