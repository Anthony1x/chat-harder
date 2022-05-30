import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  leftBurger: boolean = false
  rightBurger: boolean = false

  clickEvent(left: boolean) {
    if (left) {
      if (this.rightBurger)
        this.rightBurger = false

      this.leftBurger = !this.leftBurger
    } else {
      if (this.leftBurger)
        this.leftBurger = false

      this.rightBurger = !this.rightBurger
    }
  }


  constructor() {
  }
}
