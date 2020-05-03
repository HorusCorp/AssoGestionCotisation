export default function(newTabs = '1', action) {

    if(action.type === 'tabschange1') {
        var newTabsCopy ='1'
            console.log(newTabsCopy)
      return newTabsCopy;
    }
    if(action.type === 'tabschange2') {
      newTabsCopy = '2'
            console.log(newTabsCopy)
      return newTabsCopy;
    }
    if(action.type === 'tabschange3') {
       newTabsCopy = '3'
            console.log(newTabsCopy)
       return newTabsCopy;
    
    }
    if(action.type === 'tabschange4') {
      newTabsCopy = '4'
           console.log(newTabsCopy)
      return newTabsCopy;
   } 
   if(action.type === 'tabschange5') {
      newTabsCopy = '5'
           console.log(newTabsCopy)
      return newTabsCopy;
   } 

    else {
             return newTabs
        }

  }