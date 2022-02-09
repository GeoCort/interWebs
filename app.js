let node = document.body;
// document.body.nodeType explains if a node is a element or leave/text
function talksAbout(dom, string){
    if(dom.nodeType == Node.ELEMENT_NODE){ //if the node is an element 
    for( let child of dom.childNodes){ //access the child nodes of the element
        if(talksAbout(child, string)){
        return true;
        }
    } 
    return false; //no child nodes produce a text node
}else if(dom.nodeType == Node.TEXT_NODE){
    return dom.nodeValue.indexOf(string) > -1
}
}

console.log(talksAbout(node,"book"));