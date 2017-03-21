import 'beast';
import 'Formats.Price';
import 'Parts.Link';

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
            w: this.get('width')[0].text(),
            h: this.get('height')[0].text()
        })
    }
})

.decl('Phone__photo', {
    tag: 'img',
    expand: function(){
        let scale = 1;
        this.domAttr({
            'src': this.text(),
            'width': this.parentBlock().param('w'),
            'height': this.parentBlock().param('h')
        })
    }
})

.decl('Phone__price', {
    expand: function(){
        this.append(
            <Price>{this.text()}</Price>
        )
    }
})

.decl('Phone__model', {
    expand: function(){
        this.append(
            <Link href="{'#'+this.text().replace(/\s/g, '-')}">{this.text()}</Link>
        )
    }
})
