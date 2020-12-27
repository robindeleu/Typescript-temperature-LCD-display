/**
 * The Digitassigment class make from a number that we can read a digit number
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Digitassigmentframework} from './digitassigmentframework'
 *
 * const tem = new Digitassigmentframework()
 * const temperatuurdigit = tem.decide("PUT A NUMBER HERE")
 * ```
 *
 */

import {Numbertosegmentframework} from './Numbertosegmentframework'

export class Digitassigmentframework{
    /**
  * In this methode he check wich number you have and couple it to the digits with a frame around it
  *  
  * @param waarde This is the number you wants to make a digit of
  * 
  * @return the same number but in a digit
  */
    decide(waarde: number){
        const seg = new Numbertosegmentframework()
        if(waarde == 0){
            return (console.log(seg.segmentzero()))
        }
        else{
            if(waarde == 1){
                return (console.log(seg.segmentone()))
            }
            else{
                if(waarde == 2){
                    return (console.log(seg.segmenttwo()))
                }
                else{
                    if(waarde == 3){
                        return (console.log(seg.segmentthree()))
                    }
                    else{
                        if(waarde == 4){
                            return (console.log(seg.segmentfour()))
                        }
                        else{
                            if(waarde == 5){
                                return (console.log(seg.segmentfive()))
                            }
                            else{
                                if(waarde == 6){
                                    return (console.log(seg.segmentsix()))
                                }
                                else{
                                    if(waarde == 7){
                                        return (console.log(seg.segmentseven()))
                                    }
                                    else{
                                        if(waarde == 8){
                                            return (console.log(seg.segmenteight()))
                                        }
                                        else{
                                            if(waarde == 9){
                                                return (console.log(seg.segmentnine()))
                                            }
                                            else{
                                                return (console.log(seg.segmentnan()))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}