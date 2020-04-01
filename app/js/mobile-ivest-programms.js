'use strict';

class Programs {

    constructor( options ) {
        this.programItems = document.querySelectorAll(options.items);
        this.activeClassName = options.className;
        this.programItemsArr = [];
    }

    createItemsArr() {
        for ( let i = 0; i < this.programItems.length; i++ ) {
            this.programItemsArr.push( this.programItems[i] );
        }
    }

    switchProgramItems() {
        const self = this;
        this.programItemsArr.forEach( function( item ) {
            const target = item.getElementsByClassName('program_caption')[0];
            target.addEventListener('click', function(e) {
                if( item.classList.contains( self.activeClassName ) ) {
                    item.classList.remove( self.activeClassName );
                } else {
                    item.classList.add( self.activeClassName );
                }
            })
        })
    }

    init() {
        this.createItemsArr();
        this.switchProgramItems();
    }
}

export { Programs };