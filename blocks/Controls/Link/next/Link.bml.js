import 'beast';

import 'css!./Link.styl';

Beast
.decl('Link', {
    tag: 'a',
    expand: function() {
        this.domAttr('href', this.param('href'))
    }
});
