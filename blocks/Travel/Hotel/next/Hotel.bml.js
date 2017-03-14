import 'beast';
import 'Formats.Price';
import 'css!./Hotel.styl';

Beast
.decl('Hotel', {
    expand: function(){
        this.append(
            this.get('photo'),
            this.get('price'),
            this.get('name')
        )
    }
})


.decl('Hotel__photo', {
    expand: function() {
        this.css('background-image', `url(${this.text()})`);
        this.empty();
    }
})

.decl('Hotel__name', {
    tag: 'a',
    expand: function(){
        this.domAttr('href', '#'+Math.random())
    }
})


.decl('Hotel__price', {
    expand: function(){
        this.append(<Price>{this.text()}</Price>)
    }
})
