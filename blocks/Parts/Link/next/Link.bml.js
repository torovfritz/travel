import 'beast';
import 'css!./Link.styl';

Beast
.decl('Link', {
    tag: 'a',
    param: {
        'href': '#'
    },
    mod: {
        'External': false,
        'Action': false // newPage, hover
    },
    expand: function () {
        if (this.mod('External') === true) {
            this.mod('Action', 'newPage');
            this.append(
                <icon/>,
                this.get()
            )
        }
        this.domAttr('href', this.param('href'));
        if (this.mod('Action') === 'newPage') {
            this.domAttr('target', '_blank');
        }
    },
    on: {
        'mouseover': function (e) {
            if (this.mod('Action') === 'hover') {
                window.location.href = this.param('href');
            }
        }
    }
})
