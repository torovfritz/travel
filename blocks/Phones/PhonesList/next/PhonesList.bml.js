import 'beast';

import 'css!./PhonesList.styl';

Beast
.decl('PhonesList', {
    expand: function() {

    }
})

.decl('PhonesList__phone', {
    expand: function(){
        this.implementWith(<Phone>{this.get()}</Phone>)
    }
})
