/**
 * The Configuration class you can edit the preferences, frame and bignumbers.
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {Configuration} from './configuration'
 *
 * const set = new Configuration()
 * const kader = set.settings().framework
 * const bigdigit = set.settings().bignumbers
 * ```
 *
 */
export class Configuration{ 
    /**
  * In this methode you can change the settings from the 2 options.
  *  
  * @return Framework: 0 to not use the frame, 1 to use the frame
  * @return Bignumbers: 0 to use small numbers, 1 to use big numbers
  */
    settings(){
        const framework = 1
        const bignumbers = 1
        return{
            framework: framework,
            bignumbers: bignumbers            
        }
    }
}