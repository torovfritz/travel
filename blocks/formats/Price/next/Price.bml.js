import 'beast';
import '/vendor/text.js';

import 'css!./Price.styl';

Beast
.decl('Price', {
    param: {
        value: 0,
        minValue: void 0,
        maxValue: void 0,
        currency: null,
        decimal: false
    },
    mod: {
        locale: 'ru'
    },
    tag: 'span',
    expand: function() {
        this.mod('decimal', this.param('decimal'));
        let locale = this.mod('locale');
        let currency = this.param('currency') || Text.locales[locale].currency;
        let parse = (str) => {
            if (str) {
                let float = parseFloat(str);
                let value = float !== parseInt(str) || this.mod('decimal') ?
                    float.toFixed(2) : float;
                let num = Text.numberWithDelimiter(value, { locale });
                return num.split('\u2009').map(n => <group>{n}</group>);
            } else {
                return void 0;
            }
        };

        let lower = parse(this.param('minValue'));
        let upper = parse(this.param('maxValue'));
        let value = parse(this.param('value') || this.text());

        let num;

        if (lower !== void 0 && upper !== void 0) {
            num = [<num>{lower}</num>, '\u2009…\u2009', <num>{upper}</num>];
        } else if (lower !== void 0) {
            num = ['от ', <num>{lower}</num>];
        } else if (upper !== void 0) {
            num = ['до ', <num>{upper}</num>];
        } else {
            num = <num>{value}</num>;
        }

        this.append(num, <code currency="{currency}"/>);
    }
})

.decl('price__group', { tag: 'span' })

.decl('price__num', { tag: 'span' })

.decl('price__code', {
    tag: 'span',
    expand: function() {
        let currency = this.param('currency');
        let symbols = {
            USD: '$',
            EUR: '€',
            RUR: 'A',
            RUB: 'A',
            TRY: 'TL'
        };

        if (currency === 'RUR') {
            this.mod('currency', currency);
        }

        this.tag('span')
            .append(symbols[currency] || currency);
    }
});
