import 'beast';
import 'Phones.Phone';

import 'css!./PhonesList.styl';

Beast

.decl('PhonesList', {
    expand: function() {
    }
})

.decl('PhonesList__phone', {
    mod: {
        State: false
    },
    expand: function() {
        this.implementWith(<Phone>{this.get()}</Phone>)
    },
    on: {
        click: function () {
            this.toggleMod('State', 'active', false)
        }
    }
})
