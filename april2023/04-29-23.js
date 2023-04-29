// BASIC: Making Six Toast.

// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):

// six_toast(12) == 6

function sixToast(num) {
    if(num<6){
      return 6 - num
    }else{
      return num - 6
    }
  }