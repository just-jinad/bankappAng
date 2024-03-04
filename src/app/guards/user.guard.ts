import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  let user = JSON.parse(localStorage.getItem('user_id')!)
  console.log(user);
  
  if (!user) {
    alert("User_Id not Found, user would be redirected to Login")
    routes.navigate(['/login'])
  }else{

  }
  return true;
};
