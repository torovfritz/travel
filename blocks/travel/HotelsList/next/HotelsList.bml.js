import 'beast';
import 'travel.Hotel';

import 'css!./HotelsList.styl';

Beast
.decl('HotelsList', {
    expand: function() {
    }
})

.decl('HotelsList__hotel', {
    expand: function() {
        this.implementWith(<Hotel>{this.get()}</Hotel>)
    }
})
