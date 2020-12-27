/**
 * APP class gets all the info and make the finnishing touch.
 * 
 * To use this piece of code you can import it to other classes with this command's: 
 * ```ts
 * import {App} from './src/app'
 * const eindtotaal = new App()
 * eindtotaal.applicatie()
 * ```
 *
 */

import {Segments} from './segments'
import {Numbertosegment} from './numbertosegment'
import {Arraytosigledigit} from './arraytosigledigit'
import {Digitassigment} from './digitassigment'
import {Configuration} from './configuration'
import {Numbertosegmentframework} from './Numbertosegmentframework'
import {Digitassigmentframework} from './digitassigmentframework'
import {Numbertosegmentbig} from './numbertosegmentbig'
import {Digitassigmentbig} from './digitassigmentbig'
import {Numbertosegmentbigframe} from './numbertosegmentbigframe'
import {Digitassigmentbigframe} from './digitassigmentbigframe'

export class App{
    /**
     * The applicatie control everything from all the other classes 
     */
    applicatie(){
        const segments = new Segments()
        const cijfers = new Numbertosegment()
        const cijfersbig = new Numbertosegmentbig()
        const waarde = new Arraytosigledigit()
        const tem = new Digitassigment()
        const tembig = new Digitassigmentbig()
        const set = new Configuration()
        const digitframework = new Numbertosegmentframework()
        const temfram = new Digitassigmentframework()
        const cijfersbigfram = new Numbertosegmentbigframe()
        const tembigfram = new Digitassigmentbigframe()
        if(set.settings().framework == 1){
            if(set.settings().bignumbers == 1){
                console.log(segments.segmentfullhorizontaal())
                tembigfram.decide(waarde.digitone())
                tembigfram.decide(waarde.digittwo())
                tembigfram.decide(waarde.digitthree())
                tembigfram.decide(waarde.digitfore())
                tembigfram.decide(waarde.digitfive())
                console.log(cijfersbigfram.segmentdot(), cijfersbigfram.segmentcelcius())
                console.log(segments.segmentfullhorizontaal())
            }else{
                console.log(segments.segmentfullhorizontaal())
                temfram.decide(waarde.digitone())
                temfram.decide(waarde.digittwo())
                temfram.decide(waarde.digitthree())
                temfram.decide(waarde.digitfore())
                temfram.decide(waarde.digitfive())
                console.log(digitframework.segmentdot(), digitframework.segmentcelcius())
                console.log(segments.segmentfullhorizontaal())
            }

        }else{
            if(set.settings().bignumbers == 1){
                tembig.decide(waarde.digitone())
                tembig.decide(waarde.digittwo())
                tembig.decide(waarde.digitthree())
                tembig.decide(waarde.digitfore())
                tembig.decide(waarde.digitfive())
                console.log(cijfersbig.segmentdot(), cijfersbig.segmentcelcius())
            }
            else{tem.decide(waarde.digitone())
                tem.decide(waarde.digittwo())
                tem.decide(waarde.digitthree())
                tem.decide(waarde.digitfore())
                tem.decide(waarde.digitfive())
                console.log(cijfers.segmentdot(), cijfers.segmentcelcius())}
        
        }

}
}