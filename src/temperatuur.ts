/**
 * The Temperature class the class that have the current temperature you wants to display
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Temperatuur} from './temperatuur'
 *
 * const temperatuurnu = new Temperatuur()
 * const temp = temperatuurnu.tempWaarde()
 * ```
 *
 */
export class Temperatuur{ 
    /**
     * In this methode you can set the temperature
     * 
     * @return the current temperature
     */
    tempWaarde(){
        const temp = 65.19
        return temp
    }
}