export default class CountdownController
{
    /**@type {Phaser.Scene} */
    scene

    /**@type {Phaser.GameObjects.Text} */
    label

    /**@type {Phaser.Time.TimerEvent} */
    timerEvent

    duration = 0 
    /**
     * 
     * @param {Phaser.Scene} scene
     * @param {Phaser.GameObjects.Text} label
     * }*/
    constructor(scene, label){
        this.scene = scene
        this.label = label
    }

    start(callback, duration = 45000){
        this.stop()
        this.timerEvent = this.scene.time.addEvent({
            delay = duration, 
            callback: () => {
                this.label.text = '0'
                this.stop()
                if(callback){
                    callback()
                }
            }
        })
        if(this.timerEvent){
            this.timerEvent.destroy()
            this.timerEvent = undefined
        }
        this.timerEvent = this.scene.time.addEvent({
            delay: duration
        })
    }
    stop(){

    }
    update()
    {
        if(!this.timerEvent || this.duration <= 0){
            return 
        }

        const elapsed = this.timerEvent.getElapsed()
        const remaining = this.duration - elapsed

        this.label.text
    }
}