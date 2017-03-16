import 'beast';
import 'Formats.Price';
import 'Controls.Link';

import 'css!./Phone.styl';

Beast
.decl('Phone', {
    expand: function() {
        this.append(
            this.get('photo'),
            this.get('price'),
            this.get('model')
        )
        this.param({
            width: this.get('width')[0].text()*1,
            height: this.get('height')[0].text()*1
        })
    }
})

.decl('Phone__photo', {
    tag: 'img',
    expand: function(){
        let scale = 1;
        let w = this.parentBlock().param('width') * 1;
        let h = this.parentBlock().param('height') * 1;
        this.domAttr({
            'src': this.text(),
            'width': Math.round(w*scale),
            'height': Math.round(h*scale),
        })
    }
})

.decl('Phone__model', {
    expand: function(){
        this.append(
            <Link href="{'#' + this.text().replace(/\s/g, '-').toLowerCase()}">{this.text()}</Link>
        )
    }
})

.decl('Phone__price', {
    expand: function(){
        this.append(<Price>{this.text()}</Price>)
    }
})
