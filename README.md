# Analog Logger

Track your 35mm or 120 film frames with camera setting configurations. 

Its no [EXIF](https://en.wikipedia.org/wiki/Exif) but hey, better than _writing it all down_.


###### Links
* ['_Analog Book_'](https://analogbook.com/?v=7516fd43adaa)
* [_The PhotoMemo Notebook Is Made Specifically For Film Photographers_](https://www.popphoto.com/photomemo-notebook-is-made-specifically-for-film-photographers#page-3)
* [iOS - Film Rolls](https://itunes.apple.com/us/app/film-rolls-app-for-film-photographers/id675626559)
* [What is EXIF Data?](https://photographylife.com/what-is-exif-data)


### Stack
* React (cause it's *so hot right now*)
    * PWA?
        * Utilize service workers for offline use
    * React Native?
        * Less likely
* Redux (*state is going to get tricky with this app*)
* MongoDB
* GraphQL
* OAuth


#### Functionality
* Log information on roll
* Save comprehensive data on frames/shots
    * GPS data: *where the shot was taken*
    * Camera settings: *aperture, shutter speed*
    * Quick save: *defaults to most used setting*


#### Goals
* Basic functionality
    * User with basic **CRUD** interactivity
* Keep this open-source
* Keep it simple, least amount of dependencies
    * Minimize framework reliance
* Cool Goals
    * Bluetooth trigger?
        * Have no idea about this
            * Wire up a [*soft release*](https://www.japancamerahunter.com/shop/japancamerahunter-soft-releases/) button and triggers app to save shot data?
                * *Needs*:
                    * Raspberry Pi
                    * Tiny bluetooth sensor
                    * Patience 
                    * ***TIME TO LEARN*** electronics tinkering

