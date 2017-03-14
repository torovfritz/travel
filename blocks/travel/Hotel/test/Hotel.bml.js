import 'beast';
import 'formats.Price';
import 'css!./Hotel.styl';

Beast

.decl('Hotel', {
    expand: function(){
        this.append(
            <photo src="{this.get('photo')[0].text()}">
                {this.get('price')}
            </photo>,
            this.get('name')
        )
    }
})


.decl('Hotel__photo', {
    expand: function() {
        this.css('background-image', `url(${this.param('src')})`);
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
