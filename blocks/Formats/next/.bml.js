import 'beast';

import 'css!./.styl';

Beast
.decl('', {
    expand: function() {
        this.append(' is invoked');
    }
})
