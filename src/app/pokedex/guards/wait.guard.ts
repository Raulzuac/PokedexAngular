import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const waitGuard: CanActivateFn =async (route, state) => {
  const router = inject(Router);
  const date = new Date().getDay();
  console.log(date);
  if(date >= 1 && date <= 5){
    await sleep(3000);
    return true;
  }
  if(date == 6){
    await sleep(5000);
    return true;
  }
  router.navigate(['/error']);
  return false;
};

function sleep(ms:number){
  return new Promise(resolve => setTimeout(resolve, ms));
}
