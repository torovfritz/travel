import 'beast';

import 'css!./Primary.styl';

Beast
.decl('Button', {
    tag: 'input',
    expand: function() {
        this.empty();
        this.domAttr({
            'type': 'button',
            'value': this.text()
        })
    }
})




.decl('Button_disabled', {
    expand: function() {}
})
