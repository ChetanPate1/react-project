export function objSize(obj) {
   var count = 0;
   for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
         ++count;
      }else {
         break;
      }
   }
   return count;
}

export function timeNow(){
   return new Date().getTime();
}
